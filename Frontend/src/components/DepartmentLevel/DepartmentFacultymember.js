
import React, { useEffect, useState } from 'react';
import DepartmentHeader from './DepartmentHeader';
import DepartmentSidebar from './DepartmentSidebar';
import ProfileCard from '../ProfileCard';

const DepartmentFacultymember = () => {
  const [facultyMember, setFacultyMember] = useState();

  const fetchFacultyMember = async () => {
      try {
        const response = await fetch(
          "http://localhost:1024/api/v1/incharge/get-incharge1",
          {
            method: "GET",
            credentials: "include", // Include credentials (cookies)
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error(response,"Network response was not ok");
        }
        const json = await response.json();
        setFacultyMember(json.incharge)
        console.log(json.incharge);
      } catch (error) {
        console.log(error);
      }
  }
  useEffect(() => {
    fetchFacultyMember();
  })

  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <DepartmentHeader />
      <div className="flex w-full">
        <DepartmentSidebar />
        <div className='relative h-screen left-72 top-20'>
          {facultyMember && (
          <ProfileCard Data={facultyMember}/>
        )}
        </div> 
       </div> 
    </div>
  );
};

export default DepartmentFacultymember
