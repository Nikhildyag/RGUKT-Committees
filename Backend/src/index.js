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
      cors: {
        origin: ['http://localhost:3000'], // Change this to your frontend URL in production
        methods: ['GET', 'POST'],
        credentials: true,
      },
    })

    io.on('connection', (socket) => {
      console.log('a user connected')

      socket.on('sendMessage', async (data) => {
        const newMessage = new Message(data)
        await newMessage.save()
        io.emit('receiveMessage', data)
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
