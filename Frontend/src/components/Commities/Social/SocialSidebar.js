import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaAngleDown, FaAngleRight } from 'react-icons/fa'

const SocialSidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const dropdownRef = useRef(null)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <div className="min-h-screen h-full sm:hidden md:block fixed top-0 lg:block xl:block w-2/12 bg-[#ece8e8] shadow-lg mt-14">
      <div className="overflow-y-auto h-full">
        <ul className="list-none px-4 py-5">
          <Link to="/social/facultyincarge">
            <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
              Faculty Incharge
            </li>
            <Link to="/social/centralaurhority">
              <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
                Central Authority
              </li>
            </Link>
          </Link>
          <li className="py-1  text-black relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="flex items-center justify-between w-full text-left px-2 py-1 focus:outline-none"
            >
              <span className="mr-2  text-black ">Committees</span>
              {isDropdownOpen ? <FaAngleDown /> : <FaAngleRight />}
            </button>
            <ul
              className={`${
                isDropdownOpen ? 'block' : 'hidden'
              } ml-2 bg-transparent rounded text-black`}
            >
              <li className=" text-black">
                <Link to="/academic" className="block  text-black ">
                  CSE
                </Link>
              </li>
              <li className=" text-black">
                <Link to="/sports" className="block py-1">
                  ECE
                </Link>
              </li>
              <li className=" text-black">
                <Link to="/campusamenties" className="block">
                  EEE
                </Link>
              </li>
              <li className=" text-black">
                <Link to="/mess" className="block py-1">
                  CE
                </Link>
              </li>
              <li className=" text-black">
                <Link to="/hostel" className="block">
                  ME
                </Link>
              </li>
              <li className=" text-black">
                <Link to="/career" className="block py-1">
                  CHE
                </Link>
              </li>
              <li className=" text-black">
                <Link to="/innovation" className="block">
                  MME
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SocialSidebar
