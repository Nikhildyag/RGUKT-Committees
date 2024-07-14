import DepartmentHeader from './DepartmentHeader'
import DepartmentSidebar from './DepartmentSidebar'
import DepartmentComplaints from './DepartmentComplaints'
import React from 'react'

const Departments = () => {
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <DepartmentHeader />
      <div className="flex w-full">
        <div className="md:w-[30%] lg:w-[20%] ">
          <DepartmentSidebar />
        </div>
        <div className="lg:w-[80%] lg:ml-[-2%] sm:ml-0 sm:w-[100%] md:ml-[0%] md:w-[70%]">
          <DepartmentComplaints />
        </div>
      </div>
    </div>
  )
}

export default Departments
