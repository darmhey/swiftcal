import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";

import appointmentRouter from "./routes/appointmentRoutes";
import userRouter from "./routes/userRoutes";
import availabilityRouter from "./routes/availabilityRoutes";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
connectDB();

// ROUTES
// app.use("/", (req, res) => {
//   res.send("Appointment Booking API is running...");
// });
app.use("/api/v1/appointments", appointmentRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/availability", availabilityRouter);

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
