import React, { useState } from 'react'
import { FaBars, FaAngleDown, FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <nav className="bg-[#426CAD] p-4 md:hidden">
      <div className="flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <img
            src="https://hub.rgukt.ac.in/hub/static/images/logo.png"
            className="h-8 rounded-[50%] "
            alt="RGUKT LOGO"
          />
        </div>
        <button
          onClick={toggleMenu}
          className="text-white text-2xl focus:outline-none"
        >
          <FaBars />
        </button>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} w-full mt-4`}>
        <ul className="flex flex-col">
          <li className="text-white">
            <Link
              to="/home"
              className="block px-2 py-2 hover:bg-[#6a2121] hover:text-white hover:rounded-lg"
            >
              Home
            </Link>
          </li>
          <li className="text-white relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center justify-between w-full text-left px-2 py-1 focus:outline-none"
            >
              <span className="mr-2 ">Committees</span>
              {isDropdownOpen ? <FaAngleDown /> : <FaAngleRight />}
            </button>
            <ul
              className={`${
                isDropdownOpen ? 'block' : 'hidden'
              }  ml-2 bg-[#426CAD] rounded`}
            >
              <li className="text-white">
                <Link to="/committees/academics" className="block ">
                  Academics
                </Link>
              </li>
              <li className="text-white">
                <Link to="/committees/sports" className="block py-1">
                  Sports
                </Link>
              </li>
              <li className="text-white">
                <Link to="/committees/sports" className="block py-1">
                  Sports
                </Link>
              </li>
              <li className="text-white">
                <Link to="/committees/sports" className="block py-1">
                  Sports
                </Link>
              </li>
              <li className="text-white">
                <Link to="/committees/sports" className="block py-1">
                  Sports
                </Link>
              </li>
            </ul>
          </li>
          <li className="text-white">
            <Link to="/login" className="block px-2 py-1">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
