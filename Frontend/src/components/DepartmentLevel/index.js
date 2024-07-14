import React, { useEffect } from "react";
import DepartmentHeader from "./DepartmentHeader";
import DepartmentSidebar from "./DepartmentSidebar";
import ProfileCard from "../ProfileCard";

const cardData = { fullName: "Academic Commity", department: "CSE" };
const Departments = () => {
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <DepartmentHeader />
      <div className="flex w-full">
        <DepartmentSidebar />
        <ProfileCard Data={cardData} />
      </div>
    </div>
  );
};

export default Departments;
