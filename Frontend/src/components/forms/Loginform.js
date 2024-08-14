import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Homepage from "../Home";
import { FaEye } from "react-icons/fa";
import Cookies from "js-cookie";
import { toast, ToastContainer } from "react-toastify"; // Import ToastContainer and toast
import "react-toastify/dist/ReactToastify.css";

const Loginform = () => {
  const navigate = useNavigate();
  const departmentInfo = Cookies.get("Department_jwt_token");
  const inchargeInfo = Cookies.get("Faculty_jwt_token");
  const centralInfo = Cookies.get("Central_jwt_token");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (departmentInfo) {
      navigate("/departments");
    } else if (centralInfo) {
      navigate("/centralAuthorityHome");
    } else if (inchargeInfo) {
      navigate("/facultyInchargeHome");
    }
  }, []);
  const username = useRef(null);
  const password = useRef(null);

  const [errorMessage, setErrorMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
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
      setIsLoading(false);
      const member = data.member;
      if (member.username.startsWith("central")) {
        localStorage.setItem("central", JSON.stringify(member));
        document.cookie = `centralToken=${data.centralToken}; Secure; SameSite=None; Path=/`;
        Cookies.set("Central_jwt_token", data.centralToken, {
          expires: 100000000,
        });
        toast.success("logged in successfully");
        setTimeout(() => {
          navigate("/centralAuthorityHome");
        }, 1000);
      } else if (member.username.endsWith("incharge")) {
        localStorage.setItem("incharge", JSON.stringify(member));
        document.cookie = `inchargeToken=${data.inchargeToken}; Secure; SameSite=None; Path=/`;
        Cookies.set("Faculty_jwt_token", data.inchargeToken, {
          expires: 100000000,
        });
        toast.success("logged in successfully");
        setTimeout(() => {
          navigate("/facultyInchargeHome");
        }, 1000);
      } else {
        localStorage.setItem("department", JSON.stringify(member));
        document.cookie = `departmentToken=${data.departmentToken}; Secure; SameSite=None; Path=/`;
        Cookies.set("Department_jwt_token", data.departmentToken, {
          expires: 100000000,
        });
        toast.success(" logged in successfully");
        setTimeout(() => {
          navigate("/departments");
        }, 1000);
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage(true);
      setIsLoading(false);
    }
  };
  console.log(isLoading);
  return (
    <div className="relative">
      <ToastContainer />
      <div className="opacity-25">
        <Homepage />
      </div>
     {!isLoading && <div className="absolute top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center bg-gray-950 bg-opacity-75 h-screen">
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
              Login
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
                <div className="flex justify-between items-center  border border-gray-300 rounded-md">
                <input
                    ref={password}
                    type={showPassword?'text':'password'}
                    id="password"
                    placeholder="Enter password"
                    className="w-full px-3 py-2 text-sm outline-none border-none border-[0px]"
                />
                <FaEye className="ml-2 text-gray-500 cursor-pointer h-[4vh] mr-2" onClick={()=>setShowPassword(!showPassword)} />
            </div>
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
          </div>
        </div>
      </div>}
      {isLoading && <div role="status">
        <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span class="sr-only">Loading...</span>
      </div>
      }
    </div>
  );
};

export default Loginform;
