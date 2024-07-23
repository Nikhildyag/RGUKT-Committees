import React, { createContext, useState, useEffect } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext(null);

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const ENDPOINT = "http://localhost:1024"; // Adjust this to your server endpoint
    const newSocket = io(ENDPOINT);
    setSocket(newSocket);

    // Cleanup function to disconnect socket on unmount
    return () => newSocket.disconnect();
  }, []);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export default SocketContext;
