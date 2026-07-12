import express from "express";
import cors from "cors";

import messageRoutes from "./routes/messageRoutes.js";

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://realtime-chat-app-a5tn.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (Postman, curl, mobile apps)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Realtime Chat Backend is running 🚀",
  });
});

app.use("/api/messages", messageRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

export default app;