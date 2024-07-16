<<<<<<< HEAD
import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const dropdownRef = useRef(null);
=======
import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)
  const dropdownRef = useRef(null)
  const navigate = useNavigate();
>>>>>>> f046688615b0422f48d589a4936f0f17554d0596

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
<<<<<<< HEAD
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
=======
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])
  const Logout = async() => {
    const url = 'http://localhost:1024/api/v1/central/logout'
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

>>>>>>> f046688615b0422f48d589a4936f0f17554d0596

  return (
    <nav className="bg-[#426CAD] p-4 fixed top-0 left-0 z-10 right-0 w-full">
      <div className="flex justify-between items-center">
        <div className="text-white text-lg font-bold lg:hidden sm:block">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl sm:block md:hidden focus:outline-none"
          >
            <FaBars />
          </button>
        </div>
<<<<<<< HEAD
        <div className="hidden md:block text-white">Central Committee</div>
        <button className="relative text-white underline-transition transition duration-300 ease-in-out">
=======
        <Link to="/academic" className="hidden md:block text-white">
          Academic Committee
        </Link>
        <button onClick={Logout} className="relative text-white underline-transition transition duration-300 ease-in-out">
>>>>>>> f046688615b0422f48d589a4936f0f17554d0596
          Logout
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 h-full bg-[#426CAD]  sm:block md:hidden transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } w-64 p-4`}
        ref={menuRef}
      >
        <div className={`${isOpen ? "block" : "hidden"} w-full  mt-4`}>
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
                to="/academic"
                className="block px-2 py-2 hover:bg-[#6a2121] hover:text-white hover:rounded-lg"
              >
                Academic Committee
              </Link>
            </li>
            <li className="text-white">
              <Link
                to="/academic/facultyincarge"
                className="block px-2 py-2 hover:bg-[#6a2121] hover:text-white hover:rounded-lg"
              >
                Faculty Incharge
              </Link>
            </li>

            <li className="text-white">
              <Link
                to="/academic/centralaurhority"
                className="block px-2 py-2 hover:bg-[#6a2121] hover:text-white hover:rounded-lg"
              >
                Central Authority
              </Link>
            </li>
            <li className="text-white">
              <Link
                to="/academic/studentcommitte"
                className="block px-2 py-2 hover:bg-[#6a2121] hover:text-white hover:rounded-lg"
              >
                Department Commities
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
