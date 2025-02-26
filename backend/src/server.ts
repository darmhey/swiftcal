import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";

import appointmentRouter from "./routes/appointmentRoutes";
import userRouter from "./routes/userRoutes";
import availabilityRouter from "./routes/availabilityRoutes";
import session from "express-session";
import { initializePassport, googleAuth, googleAuthCallback } from "./auth";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(
  cors({
    origin: "http://localhost:3000", // Match your frontend
    credentials: true, // Allow cookies to be sent and received
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
      sameSite: "lax", // Allows cross-origin requests (e.g., localhost:3000 to localhost:3002)
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    },
  })
);
app.use(initializePassport()); // Initialize Passport from auth.ts

// Database connection
connectDB();

// ROUTES
// app.use("/", (req, res) => {
//   res.send("Appointment Booking API is running...");
// });
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
    res.redirect("http://localhost:3000/schedule"); // Adjust if your frontend port differs
  }
);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// import express from "express";

// const app = express();

// app.get("/", (req, res) => {
//   res.status(200).send("Hello from backend");
// });

// const port = 3002;
// app.listen(port, () => {
//   console.log("App is running...");
// });
