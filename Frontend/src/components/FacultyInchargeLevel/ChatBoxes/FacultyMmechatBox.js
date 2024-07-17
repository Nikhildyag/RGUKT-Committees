import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import FicHeader from '../FicHeader.js';
import FicSidebar from '../FicSidebar.js';

const socket = io('http://localhost:1024', {
  withCredentials: true,
  extraHeaders: {
    "my-custom-header": "abcd"
  }
});

const FacultyMmechatBox = ({ userId }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
      const fetchMessages = async () => {
         const data = {
        department: 'chem',
      }
      const branch = JSON.stringify(data)
      try {
        const response = await fetch('http://localhost:1024/api/v1/messages/get/centralMessage', {
          method: 'POST',
            credentials: 'include',
            headers: { "Content-Type": "application/json", },
            body: branch,
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
          const data = await response.json();
          console.log(data);
        setMessages(data.messages);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
    socket.on('receiveMessage', (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      socket.off('receiveMessage');
    };
  }, []);

  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <FicHeader />
      <div className="flex w-full">
        <FicSidebar />
        <div className=" w-full ml-[18%] relative top-20 h-screen flex items-center">
          <div className="flex flex-col p-5 mx-auto max-w-3xl">
            <h1 className='text-[25px] font-semibold font-serif text-blue-400'>Welcome to Chemcial chat box</h1>
            <div className="flex flex-col w-[50vw] h-96 overflow-y-scroll border border-gray-300 p-4 mb-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-3 my-2 rounded-lg ${
                    msg.senderId === userId ? 'bg-green-200 self-end' : 'bg-white self-start border border-gray-200'
                  }`}>
                  {msg.message}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyMmechatBox;
