import React, { useState, useRef, useEffect } from 'react'
import { FaBars, } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

const DepartmentHeader = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen,setIsDropdownOpen] = useState(false)
  const menuRef = useRef(null)
  const dropdownRef = useRef(null)
  const navigate = useNavigate();

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
  },[])
  const Logout = async() => {
    const url = 'http://localhost:1024/api/v1/department/logout'
     try {
        const response = await fetch(url,
          {
            method: 'GET',
            credentials: 'include', // Include credentials (cookies)
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
       alert("logged out");
       navigate('/');
      } catch (error) {
        console.log(error)
      }
  }

  return (
    <nav className="bg-[#426CAD] fixed w-full top-0 left-0 right-0 p-4 z-10">
      <div className="flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl sm:block md:hidden focus:outline-none" >
            <FaBars />
          </button>
        </div>
        <div className="flex gap-5 text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg">
          <Link to="/departments">
            <button className="relative text-white underline-transition transition duration-300 ease-in-out sm:hidden md:block">
              Home
            </button>
          </Link>
           <Link to="/editProfile">
            <button className="relative text-white underline-transition transition duration-300 ease-in-out sm:hidden md:block">
              Edit Profile
            </button>
          </Link>
          <button onClick={Logout} className="relative text-white underline-transition transition duration-300 ease-in-out">
            Logout
          </button>
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
          <ul className="flex flex-col text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl ">
            <li className="text-white">
               <Link to="/departments"
                className=" text-black block px-2 py-2 ml-2   hover:bg-[#6a2121] hover:text-white hover:rounded-lg"
              >
                Home
              </Link>
            </li>
              <li className="text-white">
            <Link to="/department/facultyincharge"
                className=" text-black block px-2 py-2  ml-2 hover:bg-[#6a2121] hover:text-white hover:rounded-lg" >
               Faculty Incharge
              </Link>
            </li>
             <li className="text-white">
             <Link to="/chatbox"
                className=" text-black block px-2 py-2  ml-2  hover:bg-[#6a2121] hover:text-white hover:rounded-lg"
              >
               Chatbox
              </Link>
            </li>
             <li className="text-white">
              <Link to="/department/centralauthority"
                className=" text-black block px-2 py-2  ml-2 hover:bg-[#6a2121] hover:text-white hover:rounded-lg"
              >
               CentralAuthority
              </Link>
            </li>
             <li className="text-white">
              <Link to="/department/departmentmembers"
                className=" text-black block px-2 py-2 ml-2  hover:bg-[#6a2121] hover:text-white hover:rounded-lg"
              >
                Department Committtes
              </Link>
            </li>
             <li className="text-white">
              <Link to='/departmentfeedbacks'
                className=" text-black block px-2 py-2 ml-2  hover:bg-[#6a2121] hover:text-white hover:rounded-lg"
              >
                feebacks
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default DepartmentHeader
