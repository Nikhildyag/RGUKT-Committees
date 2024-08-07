import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import Header from "../Home/Header.js";
import CentralAuthoritySidebar from "../Home/CentralAuthoritySidebar.js";
import ScrollableFeed from "react-scrollable-feed";

const socket = io("http://localhost:1024", {
  withCredentials: true,
  extraHeaders: {
    "my-custom-header": "abcd",
  },
});

const CentralEeeChatBoxSection = ({ userId }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const data = {
        department: "eee",
      };
      const branch = JSON.stringify(data);
      try {
        const response = await fetch(
          "http://localhost:1024/api/v1/messages/get/departmentMessagesForCentral",
          {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: branch,
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        setMessages(data.messages);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
    socket.on("receiveMessage", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, []);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const formatTime = (dateStr) => {
    const date = new Date(dateStr);

    // Check if the date is valid
    if (isNaN(date.getTime())) {
      throw new Error("Invalid date");
    }

    // Extract hours, minutes, and seconds
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");

    // Determine AM/PM
    const ampm = hours >= 12 ? "pm" : "am";

    // Convert hours from 24-hour to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    // Format hours as "hh"
    const formattedHours = String(hours).padStart(2, "0");

    // Format the time as "hh:mm:ss AM/PM"
    return `${formattedHours}:${minutes}${ampm}`;
  };
  return (
    <div className="max-w-[100%]  h-screen overflow-x-hidden text-wrap">
      <Header />
      <div className="flex w-full h-[85%]">
        <CentralAuthoritySidebar />
        <div className=" md:ml-[18%] sm:ml-[0%] sm:h-full overflow-y-hidden relative top-20 flex w-full">
          <div className="flex flex-col p-4 mx-auto lg:w-[100%] sm:h-full md:max-w-full items-center ">
            <h1 className="text-[25px] font-semibold font-serif text-blue-400">
              Welcome to EEE Chat Box
            </h1>
            <div className="flex flex-col lg:w-[90%] lg:h-[100%] md:w-[77%] sm:h-[100%] sm:w-full md:h-[30em] overflow-y-scroll border border-gray-300 rounded-lg p-4 mb-4 bg-gray-100">
              <ScrollableFeed>
                <div className="flex flex-col space-y-4">
                  {messages.length > 0 &&
                    messages.map((m, index) => (
                      <div
                        className="justify-start flex items-center max-w-xs md:max-w-md space-x-2 bg-white text-gray-800 px-3 py-1 rounded-lg shadow"
                        key={index}
                      >
                        <div className="flex flex-col">
                          {m.user && (
                            <p
                              style={{ fontSize: "0.5rem" }}
                              className={` text-green-400
                              `}
                            >
                              {m.user.Id_number}
                            </p>
                          )}
                          <p className="break-words w-auto">{m.message}</p>
                          <div className="flex justify-between gap-1">
                            <p style={{ fontSize: "0.5rem" }}>
                              {formatDate(m.createdAt)}
                            </p>
                            <p style={{ fontSize: "0.5rem" }}>
                              {formatTime(m.createdAt)}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </ScrollableFeed>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CentralEeeChatBoxSection;
