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
     pingTimeout: 60000,
      cors: {
        origin: 'http://localhost:3000', // Change this to your frontend URL in production
        methods: ['GET', 'POST'],
        credentials: true,
      },
    })

    io.on("connection", (socket) => {
      console.log(`user connected with the ID ${socket.id}`);
      socket.emit("welcome", `welcome to the server ${socket.id}`);

      socket.on("message", (data) => {
        console.log(data);
      })
      socket.on("disconnect", () => {
        console.log(`user disconnected ${socket.id}`);
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