import dotenv from 'dotenv'
import http from 'http'
import { Server } from 'socket.io'

dotenv.config({
  path: '../.env',
})
import connectDB from './db/index.js'
import app from './app.js'
import { Message } from './models/messages.model.js'

// Connect to the database
connectDB()
  .then(() => {
    const server = http.createServer(app)

    // Attach Socket.IO to the HTTP server
    const io = new Server(server, {
      pingTimeout:60000,
      cors: {
        origin: 'http://localhost:3000', // Change this to your frontend URL in production
        methods: ['GET', 'POST'],
        credentials: true,
      },
    })

    io.on("connection", (socket) => {
      console.log("Connected to socket.io");
      socket.on("setup", (userData) => {
      console.log("user joied with id:",userData.sender_id)
    socket.join(userData.sender_id);
    socket.emit("connected");
    });
      socket.on("join_chat", (room) => {
        console.log("user joined in  the room:", room);
      socket.join(room);
      console.log("User Joined Room: " + room);
  });

      socket.on('sendMessage', async (newMessage) => {
        const newRoom = newMessage.department + newMessage.committee_name;
        console.log(newRoom);
        console.log(newMessage);
        socket.emit('MessageRecived', newMessage);

      })

      socket.on('disconnect', () => {
        console.log('user disconnected')
      })
    })

    // Start the server
    server.listen(process.env.PORT, () => {
      console.log(
        `Connection successful! Server is running at port ${process.env.PORT}`
      )
    })
  })
  .catch((error) => {
    console.log('Server error', error)
  })