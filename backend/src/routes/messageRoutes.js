import express from "express";
import {
  getMessages,
  sendMessage,
} from "../controllers/messageController.js";

const router = express.Router();

// GET all chat messages
router.get("/", getMessages);

// POST a new message
router.post("/", sendMessage);

export default router;