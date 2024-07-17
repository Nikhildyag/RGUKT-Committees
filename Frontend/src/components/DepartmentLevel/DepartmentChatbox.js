import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import DepartmentHeader from './DepartmentHeader.js';
import DepartmentSidebar from './DepartmentSidebar.js';

const socket = io.connect('http://localhost:1024');
// , {
//   withCredentials: true,
//   extraHeaders: {
//     'my-custom-header': 'abcd',
//   },
// });

const DepartmentChatbox = () => {
  const [userId, setUserId] = useState('');
  const [department, setDepartment] = useState();
  const [committe, setCommitte] = useState();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [room, setRoom] = useState();
  const sendMessage = async () => {
      const messageData = {
        'room': room,
        'author': userId,
        'message': "How are you",
         'time':
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      }
     await socket.emit("send_message", messageData);
  }

   const fetchUserData = async () => {
      const url = 'http://localhost:1024/api/v1/department/get/departmentMember';
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            'Content-Type':'application/json'
          },
          credentials:'include',
        })
        if (!response.ok) {
          throw new Error('Error in the response');
        }
        const data = await response.json();
        setRoom(data.user.committee_name + data.user.department)
        socket.emit("join_room",room);
      } catch (error) {
        console.log(error);
      }
     }

  useEffect(() => {
    fetchUserData();
    socket.on("receive_message", (data) => {
      console.log("here you will recive the message");
      console.log("your message from the response",data);
    });
  }, [socket])
  
  return (
    <div className="max-w-[100%] h-screen overflow-x-hidden text-wrap">
      <DepartmentHeader />
      <div className="flex w-full">
        <DepartmentSidebar />
        <div className="w-full md:ml-[18%] sm:ml-[0%] relative top-20 flex items-center">
          <div className="flex flex-col p-5 mx-auto max-w-3xl">
            <div className="flex flex-col md:w-[50vw] sm:w-[80vw] md:h-[30em] sm:h-[40em] overflow-y-scroll border border-gray-300 p-4 mb-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-3 my-2 rounded-lg bg-green-200  self-start border border-gray-200`}
                >
                  {msg.message}
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

export default DepartmentChatbox;




//  useEffect(() => {
//     // const fetchMessages = async () => {
//     //   try {
//     //     const response = await fetch(
//     //       'http://localhost:1024/api/v1/messages/get/departmentMessage',
//     //       {
//     //         method: 'GET',
//     //         credentials: 'include',
//     //       }
//     //     );
//     //     if (!response.ok) {
//     //       throw new Error('Network response was not ok');
//     //     }
//     //     const data = await response.json();
//     //     setMessages(data.messages);
//     //   } catch (error) {
//     //     console.error('Error fetching messages:', error);
//     //   }
//     // };

//     // fetchMessages();

//     // Listen for incoming messages
//     socket.on('receiveMessage', (data) => {
//       setMessages((prevMessages) => [...prevMessages, data]);
//     });
    
//     return () => {
//       // Cleanup the socket connection when the component is unmounted
//       socket.off('receiveMessage');
//     };
//   }, []);