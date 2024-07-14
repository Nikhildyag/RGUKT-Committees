
import React from 'react';
import DepartmentHeader from './DepartmentHeader';
import DepartmentSidebar from './DepartmentSidebar';

const DepartmentMembers = () => {
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
