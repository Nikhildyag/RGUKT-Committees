// DepartmentChatbox.js
import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import DepartmentHeader from "./DepartmentHeader.js";
import DepartmentSidebar from "./DepartmentSidebar.js";
import ScrollableFeed from "react-scrollable-feed";
let socket, selectedChatCompare;

const ENDPOINT = "http://localhost:1024"; // Adjust this to your server endpoint
// socket = io(ENDPOINT);

const DepartmentChatbox = () => {
  const userInfo = JSON.parse(localStorage.getItem("department"));
  // console.log(userInfo);
  const [currentMessage, setCurrentMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [socketConnected, setSocketConnected] = useState(false);
  const [typing, setTyping] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const typingTimeoutRef = useRef(null);

  const fetchMessages = async () => {
    const response = await fetch(
      "http://localhost:1024/api/v1/messages/get/departmentMessage",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    const data = await response.json();
    console.log("fetched messages", data);
    setMessages(data.messages);
    socket.emit("join chat", userInfo.department + userInfo.committee_name);
  };

  const handleChange = (e) => {
    setCurrentMessage(e.target.value);
    if (!socketConnected) return;
    if (!typing) {
      setTyping(true);
      socket.emit("typing", userInfo.department + userInfo.committee_name);
    }
    let lastTypingTime = new Date().getTime();
    var timerLength = 1000;
    setTimeout(() => {
      var timeNow = new Date().getTime();
      var timeDiff = timeNow - lastTypingTime;
      if (timeDiff >= timerLength && typing) {
        socket.emit(
          "stop typing",
          userInfo.department + userInfo.committee_name
        );
        setTyping(false);
      }
    }, timerLength);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const messageDetails = {
      message: currentMessage,
    };
    setCurrentMessage("");
    const data = JSON.stringify(messageDetails);

    try {
      const response = await fetch(
        "http://localhost:1024/api/v1/messages/send/message",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: data,
        }
      );

      if (!response.ok) {
        throw new Error("Sending message failed");
      }

      const responseData = await response.json();
      //console.log(responseData);
      const newMessage = responseData.newMessage;

      socket.emit("sendMessage", newMessage);
      setMessages([...messages, newMessage]);

      // setMessages((prevMessages) => [...prevMessages, newMessage]);
      setCurrentMessage(""); // Clear input field
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleKeyDown = (e) => {
    if (e.code === "Enter" && currentMessage) {
      e.preventDefault(); // Prevent default Enter key action
      handleSubmit(e);
    }
  };

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("setup", userInfo);
    socket.on("connected", () => setSocketConnected(true));
    socket.on("typing", () => setIsTyping(true));
    socket.on("stop typing", () => {
      setIsTyping(false);
    });
    return () => {
      socket.disconnect(); // Disconnect in cleanup function
    };
  }, []);

  // useEffect(() => {
  //   console.log("count");
  //   console.log(userInfo);

  //   // eslint-disable-next-line
  // }, []);

  useEffect(() => {
    fetchMessages();
  }, [userInfo.department + userInfo.committee_name]);

  useEffect(() => {
    socket.on("message received", (newMessageRecieved) => {
      console.log(messages);
      setMessages([...messages, newMessageRecieved]);
    });
  });

  return (
    <div className="max-w-[100%] h-screen overflow-x-hidden text-wrap">
      <DepartmentHeader />
      <div className="flex w-full">
        <DepartmentSidebar />
        <div className="w-full md:ml-[18%] sm:ml-[0%] relative top-20 flex items-center">
          <div className="flex flex-col p-5 mx-auto max-w-3xl sm:h-fit">
            <div className="flex flex-col md:w-[50vw] sm:w-[80vw] md:h-[30em] sm:h-[40em] overflow-y-scroll border border-gray-300 p-4 mb-4">
              <ScrollableFeed>
                {messages.length > 0 &&
                  messages.map((m, index) => (
                    <div
                      className={`w-[80%] ${
                        m.sender_id !== userInfo._id
                          ? "text-left self-start ml-0"
                          : "text-right self-end ml-auto"
                      } p-2 mb-2`}
                      key={index}
                    >
                      <p className="inline-block break-words">{m.message}</p>
                    </div>
                  ))}
              </ScrollableFeed>
              {isTyping ? (
                <div className="text-blue-600">typing...</div>
              ) : (
                <></>
              )}
            </div>

            <div className="flex w-[50vw]">
              <input
                type="text"
                placeholder="Type a message"
                value={currentMessage}
                onChange={handleChange}
                className="flex-1 p-3 border border-gray-300 rounded-l-lg"
                onKeyDown={handleKeyDown}
              />
              <button
                onClick={handleSubmit}
                className="px-8 py-3 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
              >
                Send1
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentChatbox;
