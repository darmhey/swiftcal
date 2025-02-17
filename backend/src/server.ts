import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
connectDB();

// Default route
app.get("/", (req, res) => {
  res.send("Appointment Booking API is running...");
});

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
