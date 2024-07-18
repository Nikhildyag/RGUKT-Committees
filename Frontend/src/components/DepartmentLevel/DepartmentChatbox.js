
import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import DepartmentHeader from "./DepartmentHeader.js";
import DepartmentSidebar from "./DepartmentSidebar.js";

const socket = io.connect("http://localhost:1024", {
  withCredentials: true,
  extraHeaders: {
    "my-custom-header": "abcd",
  },
});

const DepartmentChatbox = () => {
  const [userIds, setUserIds] = useState('')
  const [department, setDepartment] = useState('')
  const [room, setRoom] = useState('')
  const [message, setMessage] = useState();
  const [messages, setMessages] = useState();
  const fetchUserData = async () => {
    const url = 'http://localhost:1024/api/v1/department/get/departmentMember'
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      })
      if (!response.ok) {
        throw new Error('Error in the response')
      }
      const data = await response.json()
      console.log(data.userIds);
      setUserIds(data.userIds);
      setDepartment(data.user.department)
      setRoom(data.user.committee_name + data.user.department)

    } catch (error) {
      console.log(error)
    }

  };
  useEffect(() => {
    fetchUserData();
    console.log("fetced data id's");
    console.log(userIds[0])
    if (userIds) {
      socket.emit("setup", userIds[0]);
    } 
   }, []);
    const fetchMessages = async () => {
      try {
        const response = await fetch(
          'http://localhost:1024/api/v1/messages/get/departmentMessage',
          {
            method: 'GET',
            credentials: 'include',
          }
        )
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        console.log(data.messages[0].sender_id);
        socket.emit("join_chat", data.messages[0]);
        setMessages(data.messages)
      } catch (error) {
        console.error('Error fetching messages:', error)
      }
    }
  
  useEffect(() => {
    fetchMessages();
  }, [])
  const sendMessage = async () => {
    if (message.trim()) {
     const messageData = {
      room,
      author: userIds[0],
      'message':message,
      time: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes(),
     };
      const newMessage = { message };
      try {
        setMessage('')
        // Save the message to the backend
        const response = await fetch(
          'http://localhost:1024/api/v1/messages/send/message',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newMessage),
            credentials: 'include',
          }
        )
        if (!response.ok) 
          throw new Error('Network response was not ok')
        const data = await response.json();
        console.log(data.messages);
        socket.emit("sendMessage", data.newMessage);
        console.log("message sended");
      } catch (error) {
        console.error('Error sending message:', error)
      }
    }
  }
    
  useEffect(() => {
    console.log("recive here");
  })
  return (
    <div className="max-w-[100%]  h-screen overflow-x-hidden text-wrap">
      <DepartmentHeader />
      <div className="flex w-full">
        <DepartmentSidebar />
        <div className=" w-full md:ml-[18%] sm:ml-[0%] relative top-20 flex items-center">
          <div className="flex flex-col p-5 mx-auto max-w-3xl">
            <div className="flex flex-col md:w-[50vw] sm:w-[80vw] md:h-[30em] sm:h-[40em] overflow-y-scroll border border-gray-300 p-4 mb-4">
            <p>hiii</p>
            </div>
            <div className="flex w-[50vw] ">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message"
                className="flex-1 p-3 border  border-gray-300 rounded-l-lg"
              />
              <button
                onClick={sendMessage}
                className="px-8 py-3 bg-blue-500 text-white rounded-r-lg  hover:bg-blue-600"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DepartmentChatbox