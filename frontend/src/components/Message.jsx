const Message = ({ message, username }) => {
  const isMine = message.username === username;

  const time = new Date(message.createdAt).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={`message-wrapper ${isMine ? "mine" : "other"}`}>

      <div className="message-card">

        <div className="message-header">
          <span className="message-username">
            {isMine ? "You" : message.username}
          </span>

          <span className="message-time">
            {time}
          </span>
        </div>

        <div className="message-body">
          {message.message}
        </div>

      </div>

    </div>
  );
};

export default Message;