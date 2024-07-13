import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import axios from 'axios';

const socket = io('http://localhost:1024');

const Discussion = ({ userId }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const res = await axios.get('http://localhost:1024/api/v1/messages/recive/messages');
      setMessages(res.data);
    };

    fetchMessages();

    socket.on('receiveMessage', (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      socket.off('receiveMessage');
    };
  }, []);

  const sendMessage = async () => {
    if (message.trim()) {
      const newMessage = { sender_id: "1235", message };

      try {
        // Emit the message to the server via socket.io
        setMessage('');
        socket.emit('sendMessage', newMessage);

        // Save the message to the backend
        await axios.post('http://localhost:1024/api/v1/send/message', newMessage);

        // Update the local state
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  return (
    <div className="flex flex-col p-5 mx-auto max-w-3xl">
      <div className="flex flex-col h-96 overflow-y-scroll border border-gray-300 p-4 mb-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 my-2 rounded-lg ${
              msg.senderId === userId ? 'bg-green-200 self-end' : 'bg-white self-start border border-gray-200'
            }`}
          >
            {msg.message}
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
          className="flex-1 p-3 border border-gray-300 rounded-l-lg"
        />
        <button
          onClick={sendMessage}
          className="p-3 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Discussion;
