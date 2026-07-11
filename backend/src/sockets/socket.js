const users = new Map();

const initializeSocket = (io) => {

  io.on("connection", (socket) => {

    console.log(`🟢 User Connected: ${socket.id}`);


    socket.on("join", (username) => {

      users.set(socket.id, username);

      io.emit("onlineUsers", Array.from(users.values()));

    });


    socket.on("typing", () => {

      const username = users.get(socket.id);

      socket.broadcast.emit(
        "userTyping",
        username
      );

    });


    socket.on("stopTyping", () => {

      socket.broadcast.emit(
        "userStoppedTyping"
      );

    });


    socket.on("disconnect", () => {

      users.delete(socket.id);

      io.emit(
        "onlineUsers",
        Array.from(users.values())
      );

    });

  });

};


export default initializeSocket;