import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FacultyIchargeLevel from '.'

const FacultyNoticeSend = () => {
  const [subject, setSubject] = useState('')
  const [description, setDescription] = useState()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!subject || !description) {
      alert('fill all the fields')
      return
    }
    const noticeDetails = {
      subject: subject,
      description: description,
    }
    const data1 = JSON.stringify(noticeDetails)
    const url = 'http://localhost:1024/api/v1/notices/create-notice'

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: data1,
      })

      if (!response.ok) {
        throw new Error('Login failed')
      }

      const data = await response.json()
      console.log(data)
      alert('Notice submitted successfylly')
      navigate('/facultyInchargeHome')
    } catch (error) {
      console.error('Login error:', error)
    }
  }

  return (
    <div>
      <div className="flex items-center justify-center  h-screen">
        <div className="relative w-full max-w-xs md:max-w-2xl px-4 py-2 lg:max-w-3xl bg-white rounded-lg shadow-md flex flex-col md:flex-row items-center sm:mb-[5%] md:mt-[6%]">
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
              Notice Details
            </h2>
            <form onSubmit={handleSubmit} className="w-full px-6 pt-1 pb-2">
              <div className="mb-3 w-full">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  type="text"
                  id="subject"
                  placeholder="Enter Subject"
                  className="w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>
              <div className="mb-6 w-full">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  type="text"
                  id="description"
                  placeholder="Enter description"
                  className="w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FacultyNoticeSend
