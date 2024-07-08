import React from 'react'
import { Link } from 'react-router-dom'

const DesktopCommities = () => {
  return (
<<<<<<< HEAD
    <div className="min-h-screen h-full sm:hidden md:block lg:block xl:block w-52 bg-gray-800">
=======
    <div className='min-h-screen h-full sm:hidden md:block fixed top-0  lg:block xl:block w-56 bg-gray-800'>
>>>>>>> d829b227a3465cf5d0d1077fcbe85bf2de1efb50
      <div className="flex flex-row gap-2">
        <img
          src="https://hub.rgukt.ac.in/hub/static/images/logo.png"
          className="h-9 mt-2 ml-3 rounded-full"
          alt="RGUKT Logo"
        />
         <span className="text-white text-[22px] pl-2 pt-2 font-serif font-bold">
        Commities
      </span>
      </div>
     
      <div className="overflow-y-auto h-full">
        <ul className="list-none px-2 py-5">
          <Link to="/academic">
            <li className="m-2 list-none hover:bg-blue-200  truncate hover:text-black text-gray-100 cursor-pointer rounded-md">
            Academic Committee
            </li>
          </Link>
          <Link to="/campus">
            <li className="m-2 list-none hover:bg-blue-200 truncate hover:text-black text-gray-100 cursor-pointer rounded-md">
            Campus Amenities Committee
            </li>
          </Link>
          <Link to="/mess">
            <li className="m-2 list-none hover:bg-blue-200 truncate hover:text-black text-gray-100 cursor-pointer rounded-md">
            Mess Advisory Committee
            </li>
          </Link>
          <Link to="/career">
            <li className="m-2 list-none hover:bg-blue-200 truncate hover:text-black text-gray-100 cursor-pointer rounded-md">
            Career Guidance Committee
            </li>
          </Link>
          <Link to="/sports">
            <li className="m-2 list-none hover:bg-blue-200 truncate hover:text-black text-gray-100 cursor-pointer rounded-md">
            Sports Committee
            </li>
          </Link>
          <Link to="/cultural">
            <li className="m-2 list-none hover:bg-blue-200 truncate hover:text-black  text-gray-100 cursor-pointer rounded-md">
            Cultural Committee
            </li>
          </Link>
          <Link to="/educational">
          <li className="m-2 list-none hover:bg-blue-200 truncate hover:text-black text-gray-100 cursor-pointer rounded-md">
          Educational Opportunities Committee
          </li>
          </Link>
          <Link to="/external"> 
            <li className="m-2 list-none hover:bg-blue-200 truncate hover:text-black text-gray-100 cursor-pointer rounded-md">
            External Activities Committee
            </li>
          </Link>
          <Link to="/social">
          <li className="m-2 list-none hover:bg-blue-200 truncate hover:text-black text-gray-100 cursor-pointer rounded-md">
          Social Service Committee
          </li>
          </Link>
         <Link to="/photography">
         <li className="m-2 list-none hover:bg-blue-200 truncate hover:text-black text-gray-100 cursor-pointer rounded-md">
          Photography Committee
          </li>
         </Link>
         <Link to="/environment">
         <li className="m-2 list-none hover:bg-blue-200 truncate hover:text-black text-gray-100 cursor-pointer rounded-md">
          Environment/Sustainability Committee
          </li>
         </Link>
         <Link to="/campusgreeting">
         <li className="m-2 list-none hover:bg-blue-200 truncate hover:text-black text-gray-100 cursor-pointer rounded-md">
          Campus Greening Committee
          </li>
         </Link>
          <Link to="/safety">
          <li className="m-2 list-none hover:bg-blue-200 truncate hover:text-black text-gray-100 cursor-pointer rounded-md">
          Safety and Security Committee
          </li>
          </Link>
          <Link to="/health">
          <li className="m-2 list-none hover:bg-blue-200 truncate hover:text-black text-gray-100 cursor-pointer rounded-md">
          Health Committee
          </li>
          </Link>
          <Link to="/placement">
          <li className="m-2 list-none hover:bg-blue-200 truncate hover:text-black text-gray-100 cursor-pointer rounded-md">
          Placement and Internship Committee
          </li>
          </Link>
          <Link to="/grievance">
          <li className="m-2 list-none hover:bg-blue-200 truncate hover:text-black text-gray-100 cursor-pointer rounded-md">
          Grievance and Redressal Committee
          </li>
          </Link>
          <Link to="/hostel">
          <li className="m-2 list-none hover:bg-blue-200 truncate hover:text-black text-gray-100 cursor-pointer rounded-md">
          Hostel Committee
          </li>
          </Link>
          <Link to="/innovation">
          <li className="m-2 list-none hover:bg-blue-200 truncate hover:text-black text-gray-100 cursor-pointer rounded-md">
          Innovation and Incubation Committee
          </li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default DesktopCommities
