import dotenv from 'dotenv';
import http from 'http';
import { Server } from 'socket.io';
import connectDB from './db/index.js';
import app from './app.js';
import { Message } from './models/messages.model.js';

// Load environment variables
dotenv.config({
  path: '../.env',
});

// Connect to the database
connectDB()
  .then(() => {
    const server = http.createServer(app);

    // Attach Socket.IO to the HTTP server
    const io = new Server(server, {
      cors: {
        origin: 'http://localhost:3000', // Change this to your frontend URL in production
        methods: ['GET', 'POST'],
        credentials: true,
      },
    });

    io.on('connection', (socket) => {
       socket.on("join_room", (data) => {
          socket.join(data);
          console.log(`User with ID: ${socket.id} joined room: ${data}`);
          });
      socket.on("sendMessage", async (data) => {
        socket.to(data.room).emit("recive_message", data);
      });

      socket.on('disconnect', () => {
        console.log('A user disconnected');
      });
    });

    // Start the server
    server.listen(process.env.PORT, () => {
      console.log(`Server is running at port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log('Server error:', error);
  });
