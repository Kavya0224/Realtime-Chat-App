import { useEffect, useRef } from "react";
import Message from "./Message";

const ChatBox = ({ messages, username }) => {

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);


  return (
    <div className="chat-box">

      {messages.length === 0 ? (
        <div className="empty-chat">
          Start the conversation 🚀
        </div>
      ) : (

        messages.map((message) => (
          <Message
            key={message._id}
            message={message}
            username={username}
          />
        ))

      )}

      <div ref={bottomRef}></div>

    </div>
  );
};

export default ChatBox;