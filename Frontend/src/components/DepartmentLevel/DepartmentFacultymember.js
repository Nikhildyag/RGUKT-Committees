
import React, { useEffect, useState } from 'react';
import DepartmentHeader from './DepartmentHeader';
import DepartmentSidebar from './DepartmentSidebar';

const DepartmentFacultymember = () => {
  const [facultyMember, setFacultyMember] = useState();

  const fetchFacultyMember = async () => {
      try {
        const response = await fetch(
          "http://localhost:1024/api/v1/incharge/get-incharge",
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
        console.log(json)
        // set(json.MembersArray);
        console.log(json);
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
       </div> 
    </div>
  );
};

export default DepartmentFacultymember
