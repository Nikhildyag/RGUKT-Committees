import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const PlacementSidebar = () => {
  const location = useLocation()
  const [activeLink, setActiveLink] = useState(location.pathname)

  const handleLinkClick = (path) => {
    setActiveLink(path)
  }

  return (
    <div className="min-h-screen h-full sm:hidden md:block fixed top-0 lg:block xl:block w-2/12 bg-[#ece8e8] shadow-lg mt-14">
      <div className="overflow-y-auto h-full">
        <ul className="list-none px-4 py-5">
          <Link
            to="/placement/facultyincarge"
            onClick={() => handleLinkClick('/placement/facultyincarge')}
          >
            <li
              className={`m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate cursor-pointer rounded-md py-2 ${
                activeLink === '/placement/facultyincarge'
                  ? 'bg-[#800e08] text-white px-2'
                  : 'text-black'
              }`}
            >
              Faculty Incharge
            </li>
          </Link>
          <Link
            to="/placement/centralaurhority"
            onClick={() => handleLinkClick('/placement/centralaurhority')}
          >
            <li
              className={`m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate cursor-pointer rounded-md py-2 ${
                activeLink === '/placement/centralaurhority'
                  ? 'bg-[#800e08] text-white px-2'
                  : 'text-black'
              }`}
            >
              Central Authority
            </li>
          </Link>
          <Link
            to="/placement/studentcommitte"
            onClick={() => handleLinkClick('/placement/studentcommitte')}
          >
            <li
              className={`m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate cursor-pointer rounded-md py-2 ${
                activeLink === '/placement/studentcommitte'
                  ? 'bg-[#800e08] text-white px-2'
                  : 'text-black'
              }`}
            >
              Department Committee
            </li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default PlacementSidebar
