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
      (!dropdownRef.current || !dropdownRef.current.contains(event.target))
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
          <button
            onClick={toggleMenu}
            className="text-white text-2xl sm:block md:hidden focus:outline-none"
          >
            <FaBars />
          </button>
        </div>
        <div className="flex gap-5">
          <Link to="/">
            <button className="text-white sm:hidden md:block">Home</button>
          </Link>
          <button className="text-white">Login</button>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full bg-white transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } w-64`}
        ref={menuRef}
      >
        <div className="flex flex-row bg-[#426CAD] p-0 h-[3.5em]">
          <img
            src="https://hub.rgukt.ac.in/hub/static/images/logo.png"
            className="h-9 mt-2 ml-3 rounded-[50%]"
            alt="RGUKT Logo"
          />
        </div>
        <div className="w-full mt-4">
          <ul className="flex flex-col ">
            <li className="text-white">
              <Link
                to="/"
                className=" text-black block px-2 py-2 hover:bg-[#6a2121] hover:text-white hover:rounded-lg"
              >
                Home
              </Link>
            </li>
            <li
              className="py-1  text-black  text-white relative"
              ref={dropdownRef}
            >
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
                } ml-2 bg-white rounded`}
              >
                <li className="text-white">
                  <Link to="/academic" className="block  text-black ">
                    Academics
                  </Link>
                </li>
                <li className="text-white">
                  <Link
                    to="/committees/sports"
                    className="block py-1  text-black "
                  >
                    Sports
                  </Link>
                </li>
                <Link to="/academic">
                  <li className=" text-black ">Academic Committee</li>
                </Link>
                <Link to="/campusamenties">
                  <li className=" text-black ">Campus Amenities Committee</li>
                </Link>
                <Link to="/mess">
                  <li className=" text-black ">Mess Advisory Committee</li>
                </Link>
                <Link to="/career">
                  <li className=" text-black ">Career Guidance Committee</li>
                </Link>
                <Link to="/sports">
                  <li className=" text-black ">Sports Committee</li>
                </Link>
                <Link to="/cultural">
                  <li className=" text-black ">Cultural Committee</li>
                </Link>
                <Link to="/educational">
                  <li className=" text-black ">
                    Educational Opportunities Committee
                  </li>
                </Link>
                <Link to="/external">
                  <li className=" text-black ">
                    External Activities Committee
                  </li>
                </Link>
                <Link to="/social">
                  <li className=" text-black ">Social Service Committee</li>
                </Link>
                <Link to="/photography">
                  <li className=" text-black ">Photography Committee</li>
                </Link>
                <Link to="/environment">
                  <li className=" text-black ">
                    Environment/Sustainability Committee
                  </li>
                </Link>
                <Link to="/campusgreeting">
                  <li className=" text-black ">Campus Greening Committee</li>
                </Link>
                <Link to="/safety">
                  <li className=" text-black ">
                    Safety and Security Committee
                  </li>
                </Link>
                <Link to="/health">
                  <li className=" text-black ">Health Committee</li>
                </Link>
                <Link to="/placement">
                  <li className=" text-black ">
                    Placement and Internship Committee
                  </li>
                </Link>
                <Link to="/grievance">
                  <li className=" text-black ">
                    Grievance and Redressal Committee
                  </li>
                </Link>
                <Link to="/hostel">
                  <li className=" text-black ">Hostel Committee</li>
                </Link>
                <Link to="/innovation">
                  <li className=" text-black ">
                    Innovation and Incubation Committee
                  </li>
                </Link>
              </ul>
            </li>
            <li className=" text-black ">
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
