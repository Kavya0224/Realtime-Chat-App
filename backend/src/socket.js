let io = null;

export const setSocketInstance = (socketInstance) => {
  io = socketInstance;
};

export const getSocketInstance = () => {
  if (!io) {
    throw new Error("Socket.io has not been initialized.");
  }

  return io;
};
