import DepartmentHeader from './DepartmentHeader'
import DepartmentSidebar from './DepartmentSidebar'
import DepartmentComplaints from './DepartmentComplaints'
import React  from 'react'


const Departments = () => {
  
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <DepartmentHeader />
      <div className="flex w-full">
        <DepartmentSidebar />
        <div className="w-[80%] ml-[18%] flex items-center">
          <DepartmentComplaints />
        </div>
      </div>
    </div>
  )
}

export default Departments
