import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import DepartmentHeader from "./DepartmentHeader.js";
import DepartmentSidebar from "./DepartmentSidebar.js";

// Establish Socket.IO connection
const socket = io("http://localhost:1024", {
  withCredentials: true,
  extraHeaders: {
    "my-custom-header": "abcd",
  },
});

const DepartmentChatbox = ({ userId }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Function to fetch initial messages
    const fetchMessages = async () => {
      try {
        const response = await fetch(
          "http://localhost:1024/api/v1/messages/get/departmentMessage",
          {
            method: "GET",
            credentials: "include",
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMessages(data.messages); // Update messages state with fetched messages
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages(); // Fetch messages when component mounts

    // Listen for 'receiveMessage' events from Socket.IO server
    socket.on("receiveMessage", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]); // Update messages state with new message
    });

    // Clean up socket event listener on component unmount
    return () => {
      socket.off("receiveMessage");
    };
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  // Function to send a new message
  const sendMessage = async () => {
    if (message.trim()) {
      const newMessage = { message };

      try {
        // Emit the message to the server via socket.io
        socket.emit("sendMessage", newMessage);

        // Save the message to the backend
        const response = await fetch(
          "http://localhost:1024/api/v1/messages/send/message",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newMessage),
            credentials: "include",
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        // Clear the message input field after sending
        setMessage("");
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

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
                  className={`p-3 my-2 rounded-lg ${
                    msg.senderId === userId
                      ? "bg-green-200 self-end"
                      : "bg-white self-start border border-gray-200"
                  }`}
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
