import React from 'react'
import { Link } from 'react-router-dom'

const DepartmentSidebar = () => {
  return (
    <div className="min-h-screen h-full sm:hidden md:block fixed top-0 w-64  shadow-lg">
      <div className="flex flex-row gap-2  bg-[#426CAD] h-[2.6em]">
        <img
          src="https://hub.rgukt.ac.in/hub/static/images/logo.png"
          className="h-9 mt-2 ml-3 rounded-[50%]"
          alt="RGUKT Logo"
        />
        <span className="text-white text-[22px] pl-2 pt-3  font-serif font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          Department
        </span>
      </div>
      <div className="overflow-y-auto h-[calc(100%-54px)] bg-[#ece8e8] mt-[7.2%] ">
        <ul className="list-none px-4 py-4 text-sm sm:text-base md:text-md lg:text-md xl:text-lg">
              <Link to="/academic/facultyincarge">
                <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
                Faculty Incharge
                </li>
                  </Link>
                <Link to="/academic/chatBox">
                    <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
                Chatbox
                    </li>
                </Link>
                   <Link to="/academic/centralaurhority">
                    <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
                    Central Authority
                    </li>
                </Link>
                <Link to="/academic/studentcommitte">
                    <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
                    Department Commities
                    </li>
                </Link>
        </ul>
      </div>
    </div>
  )
}

export default DepartmentSidebar
