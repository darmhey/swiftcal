import { createServer } from "http";
import { parse } from "url";
import next from "next";
import express from "express";
import cors from "cors";
import session from "express-session";
import connectDB from "./config/db";
import { initializePassport, googleAuth, googleAuthCallback } from "./auth";
import userRouter from "./routes/userRoutes";
import appointmentRouter from "./routes/appointmentRoutes";
import availabilityRouter from "./routes/availabilityRoutes";
//import app from "../src/app/";

// Prepare Next.js app (point to your frontend directory)
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev, dir: "../src/" }); // Updated path to /public/src/app from /backend/src
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const server = express();

  // Middleware
  server.use(
    cors({
      origin: "http://localhost:3000", // Same as the server port
      credentials: true, // Allow cookies
    })
  );
  server.use(express.json());
  server.use(
    session({
      secret: process.env.SESSION_SECRET || "your-secret-key-here",
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: false, // Set to true in production with HTTPS
        httpOnly: true,
        sameSite: "lax", // Works on same port, no cross-origin
        maxAge: 24 * 60 * 60 * 1000, // 24 hours
      },
    })
  );
  server.use(initializePassport());

  // Database connection
  connectDB();

  // Backend routes
  server.use("/api/v1/users", userRouter);
  server.use("/api/v1/appointments", appointmentRouter);
  server.use("/api/v1/availability", availabilityRouter);
  server.get("/api/v1/auth/google", googleAuth);
  server.get("/api/v1/auth/google/callback", googleAuthCallback, (req, res) => {
    console.log("Callback hit! User:", req.user || "No user");
    res.redirect("/schedule"); // Relative path, same domain/port
  });

  // Next.js routes (handle all other requests)
  server.all("*", (req, res) => {
    const parsedUrl = parse(req.url!, true);
    handle(req, res, parsedUrl);
  });

  // Start server on port 3000
  const PORT = 3000;
  createServer(server).listen(PORT, () => {
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
