import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaAngleDown, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const menuRef = useRef(null);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      (!dropdownRef.current || !dropdownRef.current.contains(event.target))
    ) {
      setIsOpen(false);
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
        className={`fixed top-0 left-0 h-full bg-[#426CAD] transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } w-64 p-4`}
        ref={menuRef}
      >
        <div className="w-full mt-4">
          <ul className="flex flex-col">
            <li className="text-white">
              <Link
                to="/"
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
                  isDropdownOpen ? "block" : "hidden"
                } ml-2 bg-[#426CAD] rounded`}
              >
                <li className="text-white">
                  <Link to="/academic" className="block">
                    Academics
                  </Link>
                </li>
                <li className="text-white">
                  <Link to="/sports" className="block py-1">
                    Sports Committee
                  </Link>
                </li>
                <li className="text-white">
                  <Link to="/campusamenties" className="block">
                    Campus Amenities Committee
                  </Link>
                </li>
                <li className="text-white">
                  <Link to="/mess" className="block py-1">
                    Mess Advisory Committee
                  </Link>
                </li>
                <li className="text-white">
                  <Link to="/hostel" className="block">
                    Hostel Committee
                  </Link>
                </li>
                <li className="text-white">
                  <Link to="/career" className="block py-1">
                    Career Guidance Committee
                  </Link>
                </li>
                <li className="text-white">
                  <Link to="/innovation" className="block">
                    Innovation and Incubation Committee
                  </Link>
                </li>
                <li className="text-white">
                  <Link to="/cultural" className="block py-1">
                    Cultural Committee
                  </Link>
                </li>
                <li className="text-white">
                  <Link to="/educational" className="block">
                    Educational Opportunities Committee
                  </Link>
                </li>
                <li className="text-white">
                  <Link to="/external" className="block py-1">
                    External Activities Committee
                  </Link>
                </li>
                <li className="text-white">
                  <Link to="/grievance" className="block">
                    Grievance and Redressal Committee
                  </Link>
                </li>
                <li className="text-white">
                  <Link to="/social" className="block py-1">
                    Social Service Committee
                  </Link>
                </li>
                <li className="text-white">
                  <Link to="/photography" className="block">
                    Photography Committee
                  </Link>
                </li>
                <li className="text-white">
                  <Link to="/environment" className="block py-1">
                    Environment/Sustainability Committee
                  </Link>
                </li>
                <li className="text-white">
                  <Link to="/campusgreeting" className="block">
                    Campus Greening Committee
                  </Link>
                </li>
                <li className="text-white">
                  <Link to="/safety" className="block py-1">
                    Safety and Security Committee
                  </Link>
                </li>
                <li className="text-white">
                  <Link to="/health" className="block">
                    Health Committee
                  </Link>
                </li>
                <li className="text-white">
                  <Link to="/placement" className="block py-1">
                    Placement and Internship Committee
                  </Link>
                </li>
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
  );
};

export default Header;
