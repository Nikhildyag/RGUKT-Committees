import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import DepartmentHeader from "./DepartmentHeader.js";
import DepartmentSidebar from "./DepartmentSidebar.js";
import DepartmentChatNew from "./DepartmentChatNew.js";

const socket = io.connect("http://localhost:1024", {
  withCredentials: true,
  extraHeaders: {
    "my-custom-header": "abcd",
  },
});

const DepartmentChatbox = () => {
  const [userId, setUserId] = useState("");
  const [department, setDepartment] = useState("");
  const [room, setRoom] = useState("");

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
      setUserId(data.user.userId);
      setDepartment(data.user.department);
      setRoom(data.user.committee_name + data.user.department);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    if (room) {
      socket.emit("join_room", room);
      console.log("Joined the Room:", room);
    }
  }, [room]);

  const data = { socket, room, userId, department };
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
