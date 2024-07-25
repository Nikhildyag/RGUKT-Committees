import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Homepage from "../Home";
import Cookies from 'js-cookie'
import { toast, ToastContainer } from "react-toastify"; // Import ToastContainer and toast
import "react-toastify/dist/ReactToastify.css";

const DepartmentLoginform = () => {
  const username = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.current.value || !password.current.value) {
      toast.error("All fields are required");
    }
    const userdetails = {
      username: username.current.value,
      password: password.current.value,
    };
    const data1 = JSON.stringify(userdetails);
    const url = "http://localhost:1024/api/v1/department/login";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: data1,
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      const member = data.member;
      localStorage.setItem("department", JSON.stringify(member));
      document.cookie = `departmentToken=${data.departmentToken}; Secure; SameSite=None; Path=/`;
     Cookies.set('Department_jwt_token', data.departmentToken, {expires: 100000000})
      //alert('user logged in')
      toast.success("User logged in successfully");
      setTimeout(() => {
        navigate("/departments");
      }, 1000);
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage(true);
    }
  };

  return (
    <div className="relative">
      <ToastContainer />
      <div className="opacity-25">
        <Homepage />
      </div>

      <div className="absolute top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center bg-gray-950 bg-opacity-75 h-screen">
        <div className="relative w-full max-w-xs md:max-w-2xl px-4 py-2 lg:max-w-3xl bg-white rounded-lg shadow-md flex flex-col md:flex-row items-center sm:mb-[5%] md:mt-[6%]">
          {/* Close Button */}
          <button
            onClick={() => navigate("/")}
            className="absolute top-0 right-0 w-8 h-8 flex items-center justify-center bg-white text-black rounded-full border border-gray-300 hover:bg-blue-500 hover:text-white transition-colors"
          >
            ✖
          </button>

          {/* Logo */}
          <div className="flex justify-center mb-4 md:mb-0 md:mr-4">
            <div className="h-fit w-full flex items-center justify-center">
              <img
                src="https://thumbs.dreamstime.com/b/online-registration-illustration-design-concept-websites-landing-pages-mobile-applications-posters-banners-241322799.jpg"
                alt="this is login page logo"
                className="w-[120%] h-[100%] "
              />
            </div>
          </div>

          {/* Form */}
          <div className="flex flex-col items-center w-full">
            <h2 className="text-center text-2xl font-semibold text-gray-700 mb-1">
              Department Login
            </h2>
            <form onSubmit={handleSubmit} className="w-full px-6 pt-1 pb-2">
              <div className="mb-3 w-full">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <input
                  ref={username}
                  type="text"
                  id="username"
                  placeholder="Enter username"
                  className="w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>
              <div className="mb-6 w-full">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  ref={password}
                  type="password"
                  id="password"
                  placeholder="Enter password"
                  className="w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>
              {errorMessage && (
                <p className="text-sm text-red-500 mb-2">
                  Username and password didn't match.
                </p>
              )}
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Login
              </button>
            </form>
            {/* Additional Login Options */}
            <div className="flex justify-between w-full mt-4">
              <p className="text-sm">
                Login as{" "}
                <Link
                  to="/department/centralauthorityloginForm"
                  className="text-blue-500 hover:underline"
                >
                  Central Authority
                </Link>
              </p>
              <p className="text-sm">
                Login as{" "}
                <Link
                  to="/facultyinchargeloginForm"
                  className="text-blue-500 hover:underline"
                >
                  Faculty Incharge
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentLoginform;
