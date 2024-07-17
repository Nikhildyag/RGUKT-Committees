<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import DepartmentHeader from "./DepartmentHeader.js";
import DepartmentSidebar from "./DepartmentSidebar.js";

const socket = io.connect("http://localhost:1024");
// , {
//   withCredentials: true,
//   extraHeaders: {
//     'my-custom-header': 'abcd',
//   },
// });

const DepartmentChatbox = () => {
  const [userId, setUserId] = useState("");
  const [department, setDepartment] = useState();
  const [committe, setCommitte] = useState();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [room, setRoom] = useState();
  const sendMessage = async () => {
    const messageData = {
      room: room,
      author: userId,
      message: "How are you",
      time:
        new Date(Date.now()).getHours() +
        ":" +
        new Date(Date.now()).getMinutes(),
    };
    await socket.emit("send_message", messageData);
  };

  const fetchUserData = async () => {
    const url = "http://localhost:1024/api/v1/department/get/departmentMember";
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error("Error in the response");
      }
      const data = await response.json();
      console.log(data);
      setRoom(data.user.committee_name + data.user.department);
      //console.log(room);
      room && socket.emit("join_room", room);
=======
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import DepartmentHeader from './DepartmentHeader.js';
import DepartmentSidebar from './DepartmentSidebar.js';
import DepartmentChatNew from './DepartmentChatNew.js';

const socket = io.connect('http://localhost:1024', {
  withCredentials: true,
  extraHeaders: {
    'my-custom-header': 'abcd',
  },
});

const DepartmentChatbox = () => {
  const [userId, setUserId] = useState('');
  const [department, setDepartment] = useState('');
  const [room, setRoom] = useState('');

  const fetchUserData = async () => {
    const url = 'http://localhost:1024/api/v1/department/get/departmentMember';
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      if (!response.ok) {
        throw new Error('Error in the response');
      }
      const data = await response.json();
      setUserId(data.user.userId);
      setDepartment(data.user.department);
      setRoom(data.user.committee_name + data.user.department);
>>>>>>> d702ce1f87560b413cc676588d3cf6b7be9952c0
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserData();
<<<<<<< HEAD
    socket.on("receive_message", (data) => {
      console.log("here you will recive the message");
      console.log("your message from the response", data);
    });
  }, [room]);

=======
  }, []);

  useEffect(() => {
    if (room) {
      socket.emit('join_room', room);
      console.log('Joined the Room:', room);
    }
  }, [room]);

  const data = { socket, room, userId, department };
>>>>>>> d702ce1f87560b413cc676588d3cf6b7be9952c0
  return (
    <div className="max-w-[100%] h-screen overflow-x-hidden text-wrap">
      <DepartmentHeader />
      <div className="flex w-full">
        <DepartmentSidebar />
        <DepartmentChatNew data={data} />
      </div>
    </div>
  );
};

export default DepartmentChatbox;
<<<<<<< HEAD

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
=======
>>>>>>> d702ce1f87560b413cc676588d3cf6b7be9952c0
