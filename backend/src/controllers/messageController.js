import Message from "../models/Message.js";
import { getSocketInstance } from "../socket.js";

/**
 * GET /api/messages
 */
export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: 1 });

    res.status(200).json({
      success: true,
      count: messages.length,
      data: messages,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch messages.",
    });
  }
};

/**
 * POST /api/messages
 */
export const sendMessage = async (req, res) => {
  try {
    const { username, message } = req.body;

    if (!username || !message) {
      return res.status(400).json({
        success: false,
        message: "Username and message are required.",
      });
    }

    const newMessage = await Message.create({
      username,
      message,
    });

    // Broadcast the newly created message
    const io = getSocketInstance();
    io.emit("newMessage", newMessage);

    res.status(201).json({
      success: true,
      data: newMessage,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to send message.",
    });
  }
};