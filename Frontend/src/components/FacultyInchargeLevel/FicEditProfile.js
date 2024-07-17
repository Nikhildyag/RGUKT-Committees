import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import FicComplaints from "./FicComplaints";

const FicEditProfile = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [department, setDepartment] = useState("");
  const [password, setPassword] = useState("");
  const handleEdit = async (e) => {
    e.preventDefault();
    console.log("submit");
    if (!username || !password || !department) {
      alert("fill all the details");
      return;
    }
    console.log("submit");
    const data = {
      fullName: username,
      department,
      password,
    };
    const userDetails = JSON.stringify(data);
    const url = "http://localhost:1024/api/v1/incharge/update";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: userDetails,
      });
      if (!response.ok) {
        throw new Error(response, "Network response was not ok");
      }
      const json = await response.json();
      console.log(json);
      alert("successfully updated your profile");
      navigate("/centralAuthorityHome");
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };
  return (
    <div className="relative">
      <div className="opacity-25">
        <FicComplaints />
      </div>

      <div className="absolute top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center bg-gray-950 bg-opacity-75 h-screen">
        <div className="relative w-full max-w-xs md:max-w-2xl px-4 py-2 lg:max-w-3xl bg-white rounded-lg shadow-md flex flex-col md:flex-row items-center sm:mb-[5%] md:mt-[6%]">
          {/* Close Button */}
          <button
            onClick={() => navigate("/facultyInchargeHome")}
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
            <h1 className="text-center text-2xl font-semibold text-green-500 mb-1">
              Faculty Incharge
            </h1>
            <h2 className="text-center text-xl font-semibold text-gray-700 mb-1">
              Enter Details to Edit
            </h2>
            <form onSubmit={handleEdit} className="w-full px-6 pt-1 pb-2">
              <div className="mb-3 w-full">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <input
                  value={username}
                  type="text"
                  id="username"
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username"
                  className="w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>
              <div className="mb-3 w-full">
                <label
                  htmlFor="department"
                  className="block text-sm font-medium text-gray-700"
                >
                  Department
                </label>
                <input
                  type="text"
                  id="department"
                  onChange={(e) => setDepartment(e.target.value)}
                  value={department}
                  placeholder="Enter department"
                  className="w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>
              <div className="mb-3 w-full">
                <label
                  htmlFor="new password"
                  className="block text-sm font-medium text-gray-700"
                >
                  New password
                </label>
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="Enter New Password"
                  className="w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                />
                <span className="text-red-500 text-[10px]">
                  *please remember it carefully you will not have forgot
                  password option
                </span>
              </div>
              {/* {errorMessage && (
                <p className="text-sm text-red-500 mb-2">
                  Username and password didn't match.
                </p>
              )} */}
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Edit
              </button>
            </form>
            {/* Additional Login Options */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FicEditProfile;
