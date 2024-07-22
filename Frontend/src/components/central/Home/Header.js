import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { FaAngleDown, FaAngleRight } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify' // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)
  const dropdownRef = useRef(null)
  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])
  const Logout = async () => {
    const url = 'http://localhost:1024/api/v1/central/logout'
    try {
      const response = await fetch(url, {
        method: 'GET',
        credentials: 'include', // Include credentials (cookies)
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      toast.success('User logged out successfully')
      setTimeout(() => {
        navigate('/')
      }, 1000)
    } catch (error) {
      console.log(error)
    }
  }
  const [isChatboxOpen, setIsChatboxOpen] = useState(false)

  const toggleChatboxMenu = () => {
    setIsChatboxOpen(!isChatboxOpen)
  }

  return (
    <nav className="bg-[#426CAD] p-4 fixed top-0 left-0 z-10 right-0 w-full">
      <ToastContainer />
      <div className="flex justify-between items-center">
        <div className="text-white text-lg font-bold lg:hidden sm:block">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl sm:block md:hidden focus:outline-none"
          >
            <FaBars />
          </button>
        </div>
        <div className="hidden md:block text-white">Central Members</div>
        <div className="flex gap-5 text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg">
          <Link to="/centralAuthorityHome">
            <button className="relative text-white underline-transition transition duration-300 ease-in-out sm:hidden md:block">
              Home
            </button>
          </Link>
          <Link to="/centraleditprofile">
            <button className="relative text-white underline-transition transition duration-300 ease-in-out sm:hidden md:block">
              Edit Profile
            </button>
          </Link>
          <button
            onClick={Logout}
            className="relative text-white underline-transition transition duration-300 ease-in-out"
          >
            Logout
          </button>
        </div>
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
                to="/"
                className="block px-2 py-2 hover:bg-[#6a2121] hover:text-white hover:rounded-lg"
              >
                Home
              </Link>
            </li>
            <li className="text-white">
              <Link
                to="/central/facultyIncarge"
                className="block px-2 py-2 hover:bg-[#6a2121] hover:text-white hover:rounded-lg"
              >
                Faculty Incharge
              </Link>
            </li>

            <li className="text-white">
              <Link
                to="/central/centralauthority"
                className="block px-2 py-2 hover:bg-[#6a2121] hover:text-white hover:rounded-lg"
              >
                Central Authority
              </Link>
            </li>
            <li className="text-white">
              <Link
                to="/central/studentcommittee"
                className="block px-2 py-2 hover:bg-[#6a2121] hover:text-white hover:rounded-lg"
              >
                Department Commities
              </Link>
            </li>
            <li className="text-white">
              <Link
                to="/centralmemberschatbox"
                className="block px-2 py-2 hover:bg-[#6a2121] hover:text-white hover:rounded-lg"
              >
                Chat with Central members
              </Link>
            </li>
            <li
              className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2 flex items-center"
              onClick={toggleChatboxMenu}
            >
              <span className="text-white">View ChatBoxes</span>
              {isChatboxOpen ? (
                <FaAngleDown className="ml-2" />
              ) : (
                <FaAngleRight className="ml-2" />
              )}
            </li>
            {isChatboxOpen && (
              <ul className="ml-4 text-white">
                <Link to="/central/csechatbox">
                  <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-white cursor-pointer rounded-md py-2">
                    CSE ChatBox
                  </li>
                </Link>
                <Link to="/central/ecechatbox">
                  <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-white cursor-pointer rounded-md py-2">
                    ECE ChatBox
                  </li>
                </Link>
                <Link to="/central/eeechatbox">
                  <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-white cursor-pointer rounded-md py-2">
                    EEE ChatBox
                  </li>
                </Link>
                <Link to="/central/civilchatbox">
                  <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-white cursor-pointer rounded-md py-2">
                    Civil ChatBox
                  </li>
                </Link>
                <Link to="/central/mechchatbox">
                  <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-white cursor-pointer rounded-md py-2">
                    Mech ChatBox
                  </li>
                </Link>
                <Link to="/central/chemchatbox">
                  <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-white cursor-pointer rounded-md py-2">
                    Chem ChatBox
                  </li>
                </Link>
                <Link to="/central/mmechatbox">
                  <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-white cursor-pointer rounded-md py-2">
                    MME ChatBox
                  </li>
                </Link>
                <li className="text-white">
                  <Link
                    to="/central/feedbacks"
                    className="block px-2 py-2 hover:bg-[#6a2121] hover:text-white hover:rounded-lg"
                  >
                    Feedbacks
                  </Link>
                </li>
              </ul>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
