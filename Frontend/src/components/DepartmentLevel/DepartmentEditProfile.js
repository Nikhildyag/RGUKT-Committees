import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const DepartmentEditProfile = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [userId, setuserId] = useState('')
  const [password, setPassword] = useState('')
  const handleEdit = async (e) => {
    e.preventDefault()
    console.log('submit')
    if (!username || !password || !userId) {
      toast.error('fill all the details')
      return
    }
    console.log('submit')
    const data = {
      fullName: username,
      Id_number: userId,
      password,
    }
    const userDetails = JSON.stringify(data)
    const url = 'http://localhost:1024/api/v1/department/update'
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: userDetails,
      })
      if (!response.ok) {
        throw new Error(response, 'Network response was not ok')
      }
      toast.success('successfully updated your profile')
      setTimeout(() => {
        navigate('/departments')
      }, 1500)
    } catch (error) {
      alert(error)
      console.log(error)
    }
  }
  return (
    <div>
      <ToastContainer />
      <div className="flex items-center justify-center h-screen ">
        <div className="w-full max-w-xs md:max-w-2xl px-4 py-2 lg:max-w-3xl bg-white rounded-lg  flex flex-col md:flex-row items-center sm:mb-[5%] sm:mt-[10%]  md:mt-[0%]">
          <div className="flex justify-center mb-4 md:mb-0 md:mr-4">
            <div className="h-fit w-full flex items-center justify-center">
              <img
                src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-system-update_516790-1241.jpg?w=740"
                alt="this is login page logo"
                className="w-[120%] h-[100%] sm:w-[120%] sm:h-[80%] sm:mt-[15%] "
              />
            </div>
          </div>

          {/* Form */}
          <div className="flex flex-col items-center w-full">
            <h2 className="text-center lg:text-xl md:text-xl sm:text-lg font-semibold text-gray-700 mb-1">
              Edit profile
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
              <div className="mb-6 w-full">
                <label
                  htmlFor="Id"
                  className="block text-sm font-medium text-gray-700"
                >
                  UserId
                </label>
                <input
                  type="text"
                  id="Id"
                  onChange={(e) => setuserId(e.target.value)}
                  value={userId}
                  placeholder="Enter userId"
                  className="w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>
              <div className="mb-6 w-full">
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
  )
}

export default DepartmentEditProfile
