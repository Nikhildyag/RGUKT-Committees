import React from 'react'
import { Link } from 'react-router-dom'

const DesktopCommities = () => {
  return (
    <div className="min-h-screen h-full sm:hidden md:block fixed top-0 w-64  shadow-lg">
      <div className="flex flex-row gap-2 bg-[#426CAD] h-[2.3em]">
        <img
          src="https://hub.rgukt.ac.in/hub/static/images/logo.png"
          className="h-9 mt-2 ml-3 rounded-[50%]"
          alt="RGUKT Logo"
        />
        <span className="text-white text-[22px] pl-2 pt-3 font-serif font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          Committees
        </span>
      </div>
      <div className="overflow-y-auto h-[calc(100%-54px)] bg-[#ece8e8] mt-[7.2%] ">
        <ul className="list-none px-4 py-4 text-sm sm:text-base md:text-md lg:text-lg xl:text-xl">
          <Link to="/academic">
            <li className="mx-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
              Academic Committee
            </li>
          </Link>
          <Link to="/campusamenties">
            <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
              Campus Amenities Committee
            </li>
          </Link>
          <Link to="/mess">
            <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
              Mess Advisory Committee
            </li>
          </Link>
          <Link to="/career">
            <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
              Career Guidance Committee
            </li>
          </Link>
          <Link to="/sports">
            <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
              Sports Committee
            </li>
          </Link>
          <Link to="/cultural">
            <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
              Cultural Committee
            </li>
          </Link>
          <Link to="/educational">
            <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
              Educational Opportunities Committee
            </li>
          </Link>
          <Link to="/external">
            <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
              External Activities Committee
            </li>
          </Link>
          <Link to="/social">
            <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
              Social Service Committee
            </li>
          </Link>
          <Link to="/photography">
            <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
              Photography Committee
            </li>
          </Link>
          <Link to="/environment">
            <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
              Environment/Sustainability Committee
            </li>
          </Link>
          <Link to="/campusgreening">
            <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
              Campus Greening Committee
            </li>
          </Link>
          <Link to="/safety">
            <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
              Safety and Security Committee
            </li>
          </Link>
          <Link to="/health">
            <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
              Health Committee
            </li>
          </Link>
          <Link to="/placement">
            <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
              Placement and Internship Committee
            </li>
          </Link>
          <Link to="/grievance">
            <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
              Grievance and Redressal Committee
            </li>
          </Link>
          <Link to="/hostel">
            <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
              Hostel Committee
            </li>
          </Link>
          <Link to="/innovation">
            <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
              Innovation and Incubation Committee
            </li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default DesktopCommities
