import React from 'react'
import CommityHeader from '../../CommityHeader'
import { Link } from 'react-router-dom'

const Acadamic = () => {
  return (
    <>
    <CommityHeader/>
    <div className='flex'>
    <div className='min-h-screen h-full sm:hidden md:block fixed top-0  lg:block xl:block w-56 bg-gray-800'>
      <div className="flex flex-row gap-2">
        <img
          src="https://hub.rgukt.ac.in/hub/static/images/logo.png"
          className="h-9 mt-2 ml-3 rounded-full"
          alt="RGUKT Logo"
        />
         <span className="text-white text-[22px] pl-2 pt-2 font-serif font-bold">
        Acadamic Commity
      </span>
      </div>
      <div className="overflow-y-auto h-full">
        <ul className="list-none px-2 py-5">
          <Link to="/academic">
            <li className="m-2 list-none hover:bg-blue-200  truncate hover:text-black text-gray-100 cursor-pointer rounded-md">
            Academic Committee
            </li>
          </Link>
          <Link to="/campusamenties">
            <li className="m-2 list-none hover:bg-blue-200 truncate hover:text-black text-gray-100 cursor-pointer rounded-md">
            Campus Amenities Committee
            </li>
          </Link>
        </ul>
      </div>
    </div>
    </div>
    </>
  )
}
export default Acadamic