import express from "express";
import cors from "cors";

import messageRoutes from "./routes/messageRoutes.js";

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://realtime-chat-app-a5tn.vercel.app/",
    ],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({
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