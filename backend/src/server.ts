import express, {
  Request,
  Response,
  NextFunction,
  RequestHandler,
} from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";
import jwt from "jsonwebtoken";
import { User, IUser } from "./models/userModel"; // Import User and IUser for type safety

import appointmentRouter from "./routes/appointmentRoutes";
import userRouter from "./routes/userRoutes";
import availabilityRouter from "./routes/availabilityRoutes";
import {
  initializePassport,
  googleAuth,
  googleAuthCallback,
} from "./controllers/authController";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware
app.use(
  cors({
    origin: "http://localhost:3000", // Match your frontend
    credentials: true, // Allow credentials for consistency, but not needed for JWTs
  })
);
app.use(express.json());

// Middleware to verify JWT
const authenticateJWT: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    res.status(401).json({ message: "Not logged in" });
    return; // Explicitly return to avoid undefined
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "your-jwt-secret-here"
    ) as { googleId: string };
    req.user = { googleId: decoded.googleId }; // Set req.user for compatibility
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token", error });
    return; // Explicitly return to avoid undefined
  }
};

//initialize passport
app.use(initializePassport());

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
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    // Explicitly return Promise<void>
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication failed" });
        return; // Ensure the function completes
      }
      const user = req.user as IUser; // Cast req.user to IUser
      // Generate JWT
      const token = jwt.sign(
        { googleId: user.googleId },
        process.env.JWT_SECRET!,
        { expiresIn: "1h" } // Token expires in 1 hour
      );
      console.log("Callback hit! User:", user);
      res.redirect(`http://localhost:3000/schedule?token=${token}`); // Send token in query
    } catch (error) {
      next(error); // Pass errors to Express error handler
    }
  }
);

// Protect /me with JWT
app.get(
  "/api/v1/users/me",
  authenticateJWT,
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    // Explicitly return Promise<void>
    try {
      const { googleId } = req.user as { googleId: string };
      const user = await User.findOne({ googleId });
      if (!user) {
        res.status(404).json({ message: "User not found" });
        return; // Ensure the function completes
      }
      res.json(user);
    } catch (error) {
      next(error); // Pass errors to Express error handler
    }
  }
);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
