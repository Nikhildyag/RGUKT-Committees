import React from 'react'
import { Link } from 'react-router-dom'

const DepartmentSidebar = () => {
  return (
    <div className="min-h-screen h-full sm:hidden md:block fixed top-0 w-64  shadow-lg">
      <div className="flex flex-row gap-2  bg-[#426CAD] h-[2.6em]">
        <Link to="/departments">
          <img
            src="https://hub.rgukt.ac.in/hub/static/images/logo.png"
            className="h-9 mt-2 ml-3 rounded-[50%]"
            alt="RGUKT Logo"
          />
        </Link>
        <span className="text-white  pl-2 pt-3  font-serif font-bold text-sm sm:text-base md:text-lg lg:text-md xl:text-xl">
          Department
        </span>
      </div>
      <div className="overflow-y-auto h-[calc(100%-54px)] bg-[#ece8e8] mt-[7.2%] ">
        <ul className="list-none px-4 py-4 text-sm sm:text-base md:text-md lg:text-md xl:text-lg">
<<<<<<< HEAD
              <Link to="/department/facultyincharge">
                <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
                Faculty Incharge
                </li>
                  </Link>
                <Link to="/chatbox">
                    <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
                Chatbox
                    </li>
                </Link>
                   <Link to="/department/centralauthority">
                    <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
                    Central Authority
                    </li>
                </Link>
                <Link to="/department/departmentmembers">
                    <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
                       Department Commities
                    </li>
                </Link>
=======
          <Link to="/department/facultyincharge">
            <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
              Faculty Incharge
            </li>
          </Link>
          <Link to="/department/facultyincharge">
            <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
              Chatbox
            </li>
          </Link>
          <Link to="/department/centralauthority">
            <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
              Central Authority
            </li>
          </Link>
          <Link to="/department/departmentmembers">
            <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
              Department Commities
            </li>
          </Link>
>>>>>>> 8e2e7e2c7da126627478d95f1018d76b76cd105c
        </ul>
      </div>
    </div>
  )
}

export default DepartmentSidebar
