import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import DepartmentHeader from "./DepartmentHeader.js";
import DepartmentSidebar from "./DepartmentSidebar.js";
const ENDPOINT = 'http://localhost:1024'
var socket;

const DepartmentChatbox = () => {
  socket = io(ENDPOINT);
  const [message, setMessage] = useState();

  const sendMessage = async (e) => {
    e.preventDefault();
    console.log(message);
    socket.emit("message", message);
    setMessage('');
  }

useEffect(() => {
  // Ensure the socket is connected
     socket.on("connect", () => {
        console.log(`user connected with the Id:${socket.id}`);
      })
      socket.on("welcome", (s) => {
        console.log(s);
      })
      return () => {
        socket.disconnect();
      }
  //  fetchUserData();
  }, []);
  return (
    <div className="max-w-[100%]  h-screen overflow-x-hidden text-wrap">
      <DepartmentHeader />
      <div className="flex w-full">
        <DepartmentSidebar />
        <div className=" w-full md:ml-[18%] sm:ml-[0%] relative top-20 flex items-center">
          <div className="flex flex-col p-5 mx-auto max-w-3xl">
            <div className="flex flex-col md:w-[50vw] sm:w-[80vw] md:h-[30em] sm:h-[40em] overflow-y-scroll border border-gray-300 p-4 mb-4">
            {/* <p>hiii</p> */}
            </div>
            <form onSubmit={sendMessage} className="flex w-[50vw] ">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message"
                className="flex-1 p-3 border  border-gray-300 rounded-l-lg"
              />
              <button type="submit"
                className="px-8 py-3 bg-blue-500 text-white rounded-r-lg  hover:bg-blue-600" >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentChatbox