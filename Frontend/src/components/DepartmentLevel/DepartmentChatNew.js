import React, { useEffect, useState } from 'react';

const DepartmentChatNew = ({ data }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const { socket, userId, room } = data;

  const sendMessage = async () => {
    const messageData = {
      room,
      author: userId,
      message,
      time: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes(),
    };
    if (socket) {
    //   console.log('Sending message:', messageData);
      await socket.emit('send_message', messageData);
        console.log('Message sent');
    }
    setMessage('');
  };

  useEffect(() => {
    if (socket) {
      console.log('Setting up socket listeners');
      socket.on('receive_message', (message) => {
        console.log('Received message:', message);
        setMessages((prevMessages) => [...prevMessages, message]);
      });

      // Cleanup on unmount
      return () => {
        console.log('Cleaning up socket listeners');
        socket.off('receive_message');
      };
    } else {
      console.log('Socket is not defined');
    }
  });

  return (
    <div className="max-w-[100%] w-full h-screen overflow-x-hidden text-wrap">
      <div className="flex w-full">
        <div className="w-full md:ml-[18%] sm:ml-[0%] relative top-20 flex items-center">
          <div className="flex flex-col p-5 mx-auto max-w-3xl">
            <div className="flex flex-col md:w-[50vw] sm:w-[80vw] md:h-[30em] sm:h-[40em] overflow-y-scroll border border-gray-300 p-4 mb-4">
              {messages.map((msg, index) => (
                <div key={index} className="mb-2">
                  <span className="font-bold">{msg.author}</span>: {msg.message}{' '}
                  <span className="text-gray-500 text-sm">{msg.time}</span>
                </div>
              ))}
            </div>
            <div className="flex w-[50vw]">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message"
                className="flex-1 p-3 border border-gray-300 rounded-l-lg"
              />
              <button
                onClick={sendMessage}
                className="px-8 py-3 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentChatNew;
