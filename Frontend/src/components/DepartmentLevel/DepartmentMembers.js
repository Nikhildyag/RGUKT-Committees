import React, { useEffect, useState } from 'react';
import DepartmentHeader from './DepartmentHeader';
import DepartmentSidebar from './DepartmentSidebar';
import ProfileCard from '../ProfileCard';

const DepartmentMembers = () => {
  const [DepartmentMembers, SetDepartmentMembers] = useState();
 
  const fetchDepartmentMembers =async() => {
      const url = "http://localhost:1024/api/v1/department/get/committee/departmentMembers";
     const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await response.json();
    if (response.ok === true) {
      console.log("fetched data is ", data);
      SetDepartmentMembers(data.members);
    } else {
      console.log(response.errorMessage);
      //console.log(response.ok);
    }
  }
  useEffect(() => {
    fetchDepartmentMembers();
  },[])
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <DepartmentHeader />
      <div className="flex h-auto w-full">
        <DepartmentSidebar />
        {DepartmentMembers && (
          <div className="mt-8 border h-screen border-[#c85cdb] md:relative z-[-1] md:left-60 md:top-20 rounded-md pb-4 lg:w-[80%] sm:w-[100%] sm:mx-8 lg:mx-0">
              <h1 className=" bg-[#c85cdb]  text-white text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl  text-center py-2">
                Your Committe Members
              </h1>
              <div className="flex flex-wrap justify-center items-center  px-4">
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <ProfileCard Data={DepartmentMembers[0]} />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <ProfileCard Data={DepartmentMembers[1]} />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <ProfileCard Data={DepartmentMembers[2]} />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <ProfileCard Data={DepartmentMembers[3]} />
                </div>
              </div>
          </div>
        )
          
        }
       </div> 
    </div>
  );
};

export default DepartmentMembers