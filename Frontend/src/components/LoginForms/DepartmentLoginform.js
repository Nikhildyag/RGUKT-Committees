import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DesktopCommities from "../DesktopCommities";
import Header from "../Header";

const DepartmentLoginform = () => {
  const username = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userdetails = {
      username: username.current.value,
      password: password.current.value,
    };
    const data1 = JSON.stringify(userdetails);
    const url = "http://localhost:1024/api/v1/department/login";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: data1,
    });
    const data = await response.json();
    if (response.ok === true) {
      document.cookie = `departmentToken=${data.departmentToken}; Secure; SameSite=None; Path=/`;
      navigate("/departments");
    } else {
      console.log(errorMessage);
      setErrorMessage(true);
      //console.log(response.ok);
    }
  };
  return (
    <>
      <div className="flex flex-col h-screen overflow-x-hidden overflow-y-auto">
        <Header />
        <div className="flex flex-1 overflow-auto sm:max-w-full md:max-w-3/4 overflow-x-hidden">
          <DesktopCommities className="md:w-1/4 min-h-full overflow-auto sm:max-w-0 w-full inset-0" />
          <div className="h-screen flex justify-center relative w-[80%] left-64 items-center  bg-teal-500">
            <div className="w-full md:w-[800px] flex flex-row bg-white shadow-2xl border-2 border-black-400 p-6 rounded-lg">
              <div className="ml-5">
                <img
                  src="https://thumbs.dreamstime.com/b/online-registration-illustration-design-concept-websites-landing-pages-mobile-applications-posters-banners-241322799.jpg"
                  alt="this is login page logo"
                  className="w-[120%] h-[100%]"
                />
              </div>
              <form onSubmit={handleSubmit} className="w-full">
                <div className="my-5 ml-3">
                  <div className="flex flex-col mt-3">
                    <label className="mb-3 font-normal ml-1">Username</label>
                    <input
                      ref={username}
                      type="input"
                      placeholder="Enter username"
                      className="w-[80%] h-10 border-2 border-gray-300 pl-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                    />
                  </div>
                  <div className="flex flex-col mt-3">
                    <label className="mb-3 font-normal ml-1">Password</label>
                    <input
                      ref={password}
                      type="password"
                      placeholder="Enter password"
                      className="w-[80%] h-10 border-2 border-gray-300 pl-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                    />
                  </div>
                  {errorMessage && (
                    <h3 className="text-red-500 pt-2">
                      username and password did'nt match
                    </h3>
                  )}
                  <button className="bg-teal-500 hover:bg-teal-700 w-[80%] text-center rounded-md my-4 h-10 text-white text-lg">
                    Login
                  </button>
                  <p className="text-left">
                    are you
                    <Link
                      to="/department/centralauthorityloginForm"
                      className="text-teal-500 hover:underline"
                    >
                      CentralAuthority
                    </Link>
                  </p>
                  <p className="text-left">
                    Are you ?
                    <Link
                      to="/facultyinchargeloginForm"
                      className="text-teal-500 hover:underline"
                    >
                      facultyincarge
                    </Link>
                  </p>
                  <p className="text-left">
                    Are you ?
                    <Link
                      to="/departmentloginform"
                      className="text-teal-500 hover:underline"
                    >
                      Departmentmember
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DepartmentLoginform;
