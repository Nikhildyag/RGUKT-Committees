<<<<<<< HEAD
import React, { useEffect } from "react";
import DepartmentHeader from "./DepartmentHeader";
import DepartmentSidebar from "./DepartmentSidebar";
import ProfileCard from "../ProfileCard";

const cardData = { fullName: "Academic Commity", department: "CSE" };
const Departments = () => {
=======
import DepartmentHeader from './DepartmentHeader'
import DepartmentSidebar from './DepartmentSidebar'
import DepartmentComplaints from './DepartmentComplaints'
import React  from 'react'


const Departments = () => {
  
>>>>>>> d91883c610b13bab1fa0b7be629c13d7fddb0c1a
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <DepartmentHeader />
      <div className="flex w-full">
        <DepartmentSidebar />
<<<<<<< HEAD
        <ProfileCard Data={cardData} />
      </div>
    </div>
  );
};

export default Departments;
=======
        <div className="w-[80%] ml-[18%] flex items-center">
          <DepartmentComplaints />
        </div>
      </div>
    </div>
  )
}

export default Departments
>>>>>>> d91883c610b13bab1fa0b7be629c13d7fddb0c1a
