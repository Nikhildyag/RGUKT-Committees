import React from 'react'
import { Link } from 'react-router-dom'

const CentralAuthoritySidebar = () => {
  return (
    <div className="min-h-screen h-full sm:hidden md:block fixed top-0 lg:block xl:block w-2/12 bg-[#ede6e5] shadow-lg mt-14">
      <div className="overflow-y-auto h-full">
        <ul className="list-none px-4 py-5 text-sm sm:text-base md:text-md lg:text-md xl:text-md">
          <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
            Discussion Forum
          </li>
          <Link to="/central/facultyIncharge">
            <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
              Faculty Incharge
            </li>
          </Link>
          <Link to="/central/centralauthority">
            <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
              Central Authority
            </li>
          </Link>
          <Link to="/central/studentcommittee">
            <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
              Department Commities
            </li>
          </Link>
          <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
            Feedback
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CentralAuthoritySidebar
