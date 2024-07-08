import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaAngleDown, FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const menuRef = useRef(null)
  const dropdownRef = useRef(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setIsOpen(false)
      setIsDropdownOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <nav className="bg-[#426CAD] p-4 relative">
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
          className="text-white text-2xl  sm:block md:hidden focus:outline-none"
        >
          <FaBars />
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 h-full bg-[#426CAD]  sm:block md:hidden transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } w-64 p-4`}
        ref={menuRef}
      >
        <div className={`${isOpen ? 'block' : 'hidden'} w-full  mt-4`}>
          <ul className="flex flex-col">
            <li className="text-white">
              <Link
                to="/home"
                className="block px-2 py-2 hover:bg-[#6a2121] hover:text-white hover:rounded-lg"
              >
                Home
              </Link>
            </li>
            <li className="py-1 text-white relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="flex items-center justify-between  w-full text-left px-2 py-1 focus:outline-none"
              >
                <span className="mr-2">Committees</span>
                {isDropdownOpen ? <FaAngleDown /> : <FaAngleRight />}
              </button>
              <ul
                className={`${
                  isDropdownOpen ? 'block' : 'hidden'
                } ml-2 bg-[#426CAD] rounded`}
              >
                <li className="text-white">
                  <Link to="/committees/academics" className="block">
                    Academics
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
      </div>
    </nav>
  )
}

export default Header
