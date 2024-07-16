import React, { useState } from 'react'
import { FaAngleDown, FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const FicSidebar = () => {
  const [isChatboxOpen, setIsChatboxOpen] = useState(false)

  const toggleChatboxMenu = () => {
    setIsChatboxOpen(!isChatboxOpen)
  }
  return (
    <div className="min-h-screen h-full sm:hidden md:block fixed top-0 lg:block xl:block w-2/12 bg-[#ede6e5] shadow-lg mt-14">
      <div className="overflow-y-auto h-full">
        <ul className="list-none px-4 py-5 text-sm sm:text-base md:text-md lg:text-md xl:text-md">
          <Link to="/central/facultyIncharge">
            <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
              Faculty Incharge
            </li>
          </Link>
          <Link to="/central/centralauthority">
            <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
              Central Authority
            </li>
          </Link>
          <Link to="/central/studentcommittee">
            <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
              Department Committees
            </li>
          </Link>
          <li
            className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2 flex items-center"
            onClick={toggleChatboxMenu}
          >
            <span>ChatBox</span>
            {isChatboxOpen ? (
              <FaAngleDown className="ml-2" />
            ) : (
              <FaAngleRight className="ml-2" />
            )}
          </li>
          {isChatboxOpen && (
            <ul className="ml-4">
              <Link to="/central/csechatbox">
                <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
                  CSE ChatBox
                </li>
              </Link>
              <Link to="/central/ecechatbox">
                <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
                  ECE ChatBox
                </li>
              </Link>
              <Link to="/central/eeechatbox">
                <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
                  EEE ChatBox
                </li>
              </Link>
              <Link to="/central/civilchatbox">
                <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
                  Civil ChatBox
                </li>
              </Link>
              <Link to="/central/mechchatbox">
                <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
                  Mech ChatBox
                </li>
              </Link>
              <Link to="/central/chemchatbox">
                <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
                  Chem ChatBox
                </li>
              </Link>
              <Link to="/central/mmechatbox">
                <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
                  MME ChatBox
                </li>
              </Link>
            </ul>
          )}
          <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
            Feedback
          </li>
          <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
            Add Notice
          </li>
        </ul>
      </div>
    </div>
  )
}

export default FicSidebar
