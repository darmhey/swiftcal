import express, { Request, Response, RequestHandler } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";
import session from "express-session";
import {
  setupPassport,
  googleAuth,
  googleAuthCallback,
} from "./controllers/authController";
import { IUser } from "./models/userModel";

import appointmentRouter from "./routes/appointmentRoutes";
import userRouter from "./routes/userRoutes";
import availabilityRouter from "./routes/availabilityRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001; // Use 3001 to avoid conflict with frontend on 3000

// Middleware
app.use(
  cors({
    origin: "http://localhost:3000", // Frontend on port 3000
    credentials: true, // Allow cookies (sessions) across origins
  })
);
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET || "your-secret-key", // Use a strong secret
    resave: false, // Don’t resave session if unmodified
    saveUninitialized: false, // Don’t save uninitialized sessions
    cookie: {
      secure: false, // Use true in production with HTTPS
      httpOnly: true, // Prevents JavaScript access to the cookie
      sameSite: "lax", // Allows cross-origin requests (frontend on 3000, backend on 3001)
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    },
  })
);
app.use(setupPassport()); // Initialize Passport from authController

// Database connection
connectDB();

// ROUTES
app.use("/api/v1/appointments", appointmentRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/availability", availabilityRouter);
app.get("/api/v1/auth/google", googleAuth);

app.get(
  "/api/v1/auth/google/callback",
  googleAuthCallback,
  (req: Request, res: Response) => {
    // Successful authentication - redirect to frontend
    console.log("Callback hit! User:", req.user || "No user");
    res.redirect("http://localhost:3000/schedule"); // Redirect to frontend on port 3000
  }
);

//Protect /me with session
const getCurrentUser: RequestHandler = (req: Request, res: Response) => {
  if (!req.user) {
    res.status(401).json({ message: "Not logged in" });
    return;
  }
  res.json(req.user as IUser); // Return the session user
};

app.get("/api/v1/users/me", getCurrentUser);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
