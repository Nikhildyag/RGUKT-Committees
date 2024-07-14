
import React, { useEffect } from 'react';
import DepartmentHeader from './DepartmentHeader';
import DepartmentSidebar from './DepartmentSidebar';
import ProfileCard from '../ProfileCard'
import Cookies from 'js-cookie'

const cardData = { fullName: 'Academic Commity', department: 'CSE' }
const Departments = () => {

  const getDepartmentMembersResult = async () => {
    console.log("Make API call")
  }
  useEffect(() => {
    getDepartmentMembersResult();
  },[])
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <DepartmentHeader />
      <div className="flex w-full">
            <DepartmentSidebar />
             <ProfileCard Data={cardData}/>
       </div> 
    </div>
  );
};

export default Departments;

