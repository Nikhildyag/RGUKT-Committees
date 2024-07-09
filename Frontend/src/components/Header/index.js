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
          <img
            src="https://hub.rgukt.ac.in/hub/static/images/logo.png"
            className="h-8 rounded-[50%]"
            alt="RGUKT LOGO"
          />
        </div>
        <button
          onClick={toggleMenu}
          className="text-white text-2xl sm:block md:hidden focus:outline-none"
        >
          <FaBars />
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 h-full bg-[#426CAD] transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } w-64 p-4`}
        ref={menuRef}
      >
        <div className="w-full mt-4">
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
                className="flex items-center justify-between w-full text-left px-2 py-1 focus:outline-none"
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
          <Link to="/academic">
            <li className="text-white">
              Academic Committee
            </li>
          </Link>
          <Link to="/campusamenties">
            <li className="text-white">
              Campus Amenities Committee
            </li>
          </Link>
          <Link to="/mess">
            <li className="text-white">
              Mess Advisory Committee
            </li>
          </Link>
          <Link to="/career">
            <li className="text-white">
              Career Guidance Committee
            </li>
          </Link>
          <Link to="/sports">
            <li className="text-white">
              Sports Committee
            </li>
          </Link>
          <Link to="/cultural">
            <li className="text-white">
              Cultural Committee
            </li>
          </Link>
          <Link to="/educational">
            <li className="text-white">
              Educational Opportunities Committee
            </li>
          </Link>
          <Link to="/external">
            <li className="text-white">
              External Activities Committee
            </li>
          </Link>
          <Link to="/social">
            <li className="text-white">
              Social Service Committee
            </li>
          </Link>
          <Link to="/photography">
            <li className="text-white">
              Photography Committee
            </li>
          </Link>
          <Link to="/environment">
            <li className="text-white">
              Environment/Sustainability Committee
            </li>
          </Link>
          <Link to="/campusgreeting">
            <li className="text-white">
              Campus Greening Committee
            </li>
          </Link>
          <Link to="/safety">
            <li className="text-white">
              Safety and Security Committee
            </li>
          </Link>
          <Link to="/health">
            <li className="text-white">
              Health Committee
            </li>
          </Link>
          <Link to="/placement">
            <li className="text-white">
              Placement and Internship Committee
            </li>
          </Link>
          <Link to="/grievance">
            <li className="text-white">
              Grievance and Redressal Committee
            </li>
          </Link>
          <Link to="/hostel">
            <li className="text-white">
              Hostel Committee
            </li>
          </Link>
          <Link to="/innovation">
            <li className="text-white">
              Innovation and Incubation Committee
            </li>
          </Link>
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
