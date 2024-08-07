import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaAngleDown, FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { IoMdHome } from 'react-icons/io'
import { AiOutlineLogin } from 'react-icons/ai'
import { FaUser } from 'react-icons/fa6'
import {
  FaBook,
  FaBuilding,
  FaUtensils,
  FaBriefcase,
  FaFootballBall,
  FaPalette,
  FaGraduationCap,
  FaExternalLinkAlt,
  FaHandsHelping,
  FaCamera,
  FaLeaf,
  FaTree,
  FaShieldAlt,
  FaHeartbeat,
  FaClipboardList,
  FaGavel,
  FaHome,
  FaMedal,
  FaLightbulb,
} from 'react-icons/fa'
import '../../index.css'

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
        <div className="flex text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg">
          <Link to="/feedbackform">
            <button className="mr-5 rounded-md relative text-white underline-transition transition duration-300 ease-in-out">
              Feedback
            </button>
          </Link>
          <Link to="/">
            <button className="mr-5 sm:gap-0 sm:hidden md:block relative text-white underline-transition transition duration-300 ease-in-out">
              Home
            </button>
          </Link>
          <Link to="/login">
            <button className="mr-5 relative text-white underline-transition transition duration-300 ease-in-out">
              Login
            </button>
          </Link>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 h-full bg-[#ece8e8] transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } w-64 z-50`}
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
          <ul className="flex flex-col text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl">
            <Link
              to="/"
              className="block px-2 py-2 hover:bg-[#6a2121] hover:text-white hover:rounded-lg"
            >
              <div className="flex flex-row  cursor-pointer hover:px-2 hover:bg-[#800e08] hover:text-white rounded-md">
                <IoMdHome className="h-4 w-6 mt-1 text-amber-500 hover:animate-spin" />
                <li className="list-none hover:text-white truncate text-black">
                  Home
                </li>
              </div>
            </Link>

            <li className="py-1 px-2 text-black relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="flex items-center justify-between w-full text-left px-0 py-1 focus:outline-none"
              >
                <div className="flex flex-row  cursor-pointer hover:px-2 hover:bg-[#800e08] hover:text-white rounded-md">
                  <FaUser className="h-4 w-5 mt-1 text-purple-500 hover:animate-spin" />
                  <span className="ml-0">Committees</span>
                </div>

                {isDropdownOpen ? <FaAngleDown /> : <FaAngleRight />}
              </button>
              <ul
                className={`${
                  isDropdownOpen ? 'block' : 'hidden'
                } ml-2 bg-[#ece8e8] rounded text-black`}
              >
                <Link to="/academic">
                  <div className="flex flex-row mx-2 py-2 cursor-pointer hover:px-2 hover:bg-[#800e08] hover:text-white rounded-md">
                    <FaBook className="h-4 w-5 mt-1 text-blue-500 hover:animate-spin" />
                    <li className="list-none hover:text-white truncate text-black ml-2">
                      Academic Committee
                    </li>
                  </div>
                </Link>
                <Link to="/excellence">
                  <div className="flex flex-row mx-2 py-2 cursor-pointer hover:px-2 hover:bg-[#800e08] hover:text-white rounded-md">
                    <FaMedal className="h-4 w-5 mt-1 text-pink-500 hover:animate-spin" />
                    <li className="list-none hover:text-white truncate text-black ml-2">
                      Excellence Committee
                    </li>
                  </div>
                </Link>
                <Link to="/campusamenties">
                  <div className="flex flex-row mx-2 py-2 cursor-pointer hover:px-2 hover:bg-[#800e08] hover:text-white rounded-md">
                    <FaBuilding className="h-4 w-5 mt-1 text-green-500 hover:animate-bounce" />
                    <li className="list-none hover:text-white truncate text-black ml-2">
                      Campus Amenities Committee
                    </li>
                  </div>
                </Link>
                <Link to="/mess">
                  <div className="flex flex-row mx-2 py-2 cursor-pointer hover:px-2 hover:bg-[#800e08] hover:text-white rounded-md">
                    <FaUtensils className="h-4 w-5 mt-1 text-red-500 hover:animate-ping" />
                    <li className="list-none hover:text-white truncate text-black ml-2">
                      Mess Advisory Committee
                    </li>
                  </div>
                </Link>
                <Link to="/career">
                  <div className="flex flex-row mx-2 py-2 cursor-pointer hover:px-2 hover:bg-[#800e08] hover:text-white rounded-md">
                    <FaBriefcase className="h-4 w-5 mt-1 text-purple-500 hover:animate-pulse" />
                    <li className="list-none hover:text-white truncate text-black ml-2">
                      Career Guidance Committee
                    </li>
                  </div>
                </Link>
                <Link to="/sports">
                  <div className="flex flex-row mx-2 py-2 cursor-pointer hover:px-2 hover:bg-[#800e08] hover:text-white rounded-md">
                    <FaFootballBall className="h-4 w-5 mt-1 text-yellow-500 hover:animate-spin" />
                    <li className="list-none hover:text-white truncate text-black ml-2">
                      Sports Committee
                    </li>
                  </div>
                </Link>
                <Link to="/cultural">
                  <div className="flex flex-row mx-2 py-2 cursor-pointer hover:px-2 hover:bg-[#800e08] hover:text-white rounded-md">
                    <FaPalette className="h-4 w-5 mt-1 text-pink-500 hover:animate-bounce" />
                    <li className="list-none hover:text-white truncate text-black ml-2">
                      Cultural Committee
                    </li>
                  </div>
                </Link>
                <Link to="/educational">
                  <div className="flex flex-row mx-2 py-2 cursor-pointer hover:px-2 hover:bg-[#800e08] hover:text-white rounded-md">
                    <FaGraduationCap className="h-4 w-5 mt-1 text-teal-500 hover:animate-ping" />
                    <li className="list-none hover:text-white truncate text-black ml-2">
                      Educational Opportunites Committee
                    </li>
                  </div>
                </Link>
                <Link to="/external">
                  <div className="flex flex-row mx-2 py-2 cursor-pointer hover:px-2 hover:bg-[#800e08] hover:text-white rounded-md">
                    <FaExternalLinkAlt className="h-4 w-5 mt-1 text-orange-500 hover:animate-pulse" />
                    <li className="list-none hover:text-white truncate text-black ml-2">
                      External Activities Committee
                    </li>
                  </div>
                </Link>
                <Link to="/social">
                  <div className="flex flex-row mx-2 py-2 cursor-pointer hover:px-2 hover:bg-[#800e08] hover:text-white rounded-md">
                    <FaHandsHelping className="h-4 w-5 mt-1 text-blue-500 hover:animate-spin" />
                    <li className="list-none hover:text-white truncate text-black ml-2">
                      Social Service Committee
                    </li>
                  </div>
                </Link>
                <Link to="/photography">
                  <div className="flex flex-row mx-2 py-2 cursor-pointer hover:px-2 hover:bg-[#800e08] hover:text-white rounded-md">
                    <FaCamera className="h-4 w-5 mt-1 text-purple-500 hover:animate-bounce" />
                    <li className="list-none hover:text-white truncate text-black ml-2">
                      Photography Committee
                    </li>
                  </div>
                </Link>
                <Link to="/environment">
                  <div className="flex flex-row mx-2 py-2 cursor-pointer hover:px-2 hover:bg-[#800e08] hover:text-white rounded-md">
                    <FaLeaf className="h-4 w-5 mt-1 text-green-500 hover:animate-ping" />
                    <li className="list-none hover:text-white truncate text-black ml-2">
                      Environment/Sustainability Committee
                    </li>
                  </div>
                </Link>
                <Link to="/campusgreening">
                  <div className="flex flex-row mx-2 py-2 cursor-pointer hover:px-2 hover:bg-[#800e08] hover:text-white rounded-md">
                    <FaTree className="h-4 w-5 mt-1 text-brown-500 hover:animate-pulse" />
                    <li className="list-none hover:text-white truncate text-black ml-2">
                      Campus Greening Committee
                    </li>
                  </div>
                </Link>
                <Link to="/safety">
                  <div className="flex flex-row mx-2 py-2 cursor-pointer hover:px-2 hover:bg-[#800e08] hover:text-white rounded-md">
                    <FaShieldAlt className="h-4 w-5 mt-1 text-red-500 hover:animate-spin" />
                    <li className="list-none hover:text-white truncate text-black ml-2">
                      Safety and Security Committee
                    </li>
                  </div>
                </Link>
                <Link to="/health">
                  <div className="flex flex-row mx-2 py-2 cursor-pointer hover:px-2 hover:bg-[#800e08] hover:text-white rounded-md">
                    <FaHeartbeat className="h-4 w-5 mt-1 text-pink-500 hover:animate-bounce" />
                    <li className="list-none hover:text-white truncate text-black ml-2">
                      Health Committee
                    </li>
                  </div>
                </Link>
                <Link to="/placement">
                  <div className="flex flex-row mx-2 py-2 cursor-pointer hover:px-2 hover:bg-[#800e08] hover:text-white rounded-md">
                    <FaClipboardList className="h-4 w-5 mt-1 text-blue-500 hover:animate-ping" />
                    <li className="list-none hover:text-white truncate text-black ml-2">
                      Placement and Internship Committee
                    </li>
                  </div>
                </Link>
                <Link to="/grievance">
                  <div className="flex flex-row mx-2 py-2 cursor-pointer hover:px-2 hover:bg-[#800e08] hover:text-white rounded-md">
                    <FaGavel className="h-4 w-5 mt-1 text-purple-500 hover:animate-pulse" />
                    <li className="list-none hover:text-white truncate text-black ml-2">
                      Grievance and Redressal Committee
                    </li>
                  </div>
                </Link>
                <Link to="/hostel">
                  <div className="flex flex-row mx-2 py-2 cursor-pointer hover:px-2 hover:bg-[#800e08] hover:text-white rounded-md">
                    <FaHome className="h-4 w-5 mt-1 text-teal-500 hover:animate-spin" />
                    <li className="list-none hover:text-white truncate text-black ml-2">
                      Hostel Committee
                    </li>
                  </div>
                </Link>
                <Link to="/innovation">
                  <div className="flex flex-row mx-2 py-2 cursor-pointer hover:px-2 hover:bg-[#800e08] hover:text-white rounded-md">
                    <FaLightbulb className="h-4 w-5 mt-1 text-yellow-500 hover:animate-bounce" />
                    <li className="list-none hover:text-white truncate text-black ml-2">
                      Innovation and Incubation Committee
                    </li>
                  </div>
                </Link>
              </ul>
            </li>
            {/* <li className="text-black px-2">
              <Link to="/login">
                Login
              </Link>
            </li> */}

            <Link to="/login" className="block px-3 py-1">
              <div className="flex flex-row py-2 cursor-pointer hover:px-2 hover:bg-[#800e08] hover:text-white rounded-md">
                <AiOutlineLogin className="h-5 w-5 mt-1 mr-1 text-blue-500 hover:animate-bounce" />
                <li className="list-none hover:text-white truncate text-black ">
                  Login
                </li>
              </div>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
