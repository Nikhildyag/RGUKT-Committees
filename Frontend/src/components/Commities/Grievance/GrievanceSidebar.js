import React  from 'react'
import { Link } from 'react-router-dom'

const GrievanceSidebar = () => {

  return (
    <div className="min-h-screen h-full sm:hidden md:block fixed top-0 lg:block xl:block w-2/12 bg-[#ece8e8] shadow-lg mt-14">
      <div className="overflow-y-auto h-full">
        <ul className="list-none px-4 py-5">
          <Link to="/grievance/facultyincarge">
            <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
              Faculty Incharge
            </li>
          </Link>
          <Link to="/grievance/centralaurhority">
            <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
              Central Authority
            </li>
          </Link>
          <Link to="/grievance/studentcommitte">
            <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
              Department Commities
            </li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default GrievanceSidebar
