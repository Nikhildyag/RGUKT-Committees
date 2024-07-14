
import React, { useEffect } from 'react';
import DepartmentHeader from './DepartmentHeader';
import DepartmentSidebar from './DepartmentSidebar';

const DepartmentMembers = () => {
 
  const fetchDepartmentMembers =async() => {
       const url = "http://localhost:1024/api/v1/department/get/committee/departmentMembers";
    const response = await fetch(url);
    const data = await response.json();
    if (response.ok === true) {
      console.log("fetched data is ",data);
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
      <div className="flex w-full">
        <DepartmentSidebar />
       </div> 
    </div>
  );
};

export default DepartmentMembers
