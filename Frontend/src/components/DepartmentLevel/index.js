import DepartmentHeader from './DepartmentHeader'
import DepartmentSidebar from './DepartmentSidebar'
import DepartmentComplaints from './DepartmentComplaints'
import React from 'react'

const Departments = () => {
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <DepartmentHeader />
      <div className="flex w-full">
<<<<<<< HEAD
        <DepartmentSidebar />
=======
        <div>
          <DepartmentSidebar />
        </div>
>>>>>>> d657242cc8398cc73f7823ee6ced06d5ce9ddb61
        <div className="w-[80vw] ml-[18%] sm:ml-0 sm:w-full md:w-[80vw] md:ml-[18%]">
          <DepartmentComplaints />
        </div>
      </div>
    </div>
  )
}

export default Departments