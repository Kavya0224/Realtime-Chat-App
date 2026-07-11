import express from "express";
import cors from "cors";

import messageRoutes from "./routes/messageRoutes.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Realtime Chat Backend is running 🚀",
  });
});

// API Routes
app.use("/api/messages", messageRoutes);

// Handle Unknown Routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

export default app;