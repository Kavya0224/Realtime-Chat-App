import { useState } from "react";
import socket from "../socket/socket";

const ChatInput = ({ onSend }) => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    const text = message.trim();

    if (!text) return;

    onSend(text);

    setMessage("");

    socket.emit("stopTyping");
  };


  const handleTyping = (e) => {
    const value = e.target.value;

    setMessage(value);

    if (value.trim()) {
      socket.emit("typing");
    } else {
      socket.emit("stopTyping");
    }
  };


  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };


  return (
    <div className="chat-input-container">

      <input
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={handleTyping}
        onKeyDown={handleKeyDown}
      />


      <button onClick={sendMessage}>
        Send
      </button>

    </div>
  );
};

export default ChatInput;