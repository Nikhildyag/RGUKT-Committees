import React, { useState } from 'react'

import Header from '../Header'
import DesktopCommities from '../DesktopCommities'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const AcademicCommiteeForm = () => {
  const [year, setYear] = useState('E1')
  const [branch, setBranch] = useState('cse')
  const [committee, setCommitte] = useState('Academic Committee')
  const [message, setMessage] = useState()
  const navigate = useNavigate()
  const committees = [
    'Academic Committee',
    'Campus Amenities Committee',
    'Mess Advisory Committee',
    'External Activities Committee',
    'Photography Committee',
    'Environment/Sustainability Committee',
    'Health Committee',
    'Placement and Internship Committee',
    'Grievance and Redressal Committee',
    'Hostel Committee',
    'Innovation and Incubation Committee',
    'Cultural Committee',
    'Sports Committee',
    'Campus Greening Committee',
    'Social Service Committee',
    'Sustainability Committee',
    'External Committee',
    'Campus Safety Committee',
  ]
  const submitFeedback = async (e) => {
    e.preventDefault()
    if (!year || !branch || !committee || !message) {
      toast.error('All the feilds are Required')
      return
    }
    const data = {
      committee_name: committee,
      year: year,
      department: branch,
      description: message,
    }
    const feedbackDetails = JSON.stringify(data)
    const url = 'http://localhost:1024/api/v1/feedbacks/create-feedback'
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: feedbackDetails,
      })
      if (!response.ok) {
        throw new Error('Error in the Response')
      }
      toast.success('Feedback submitted successfully')
      setTimeout(() => {
        navigate('/')
      }, 1500)
    } catch (error) {
      throw new Error(error)
    }
  }
  return (
    <div className="flex flex-col h-screen overflow-x-hidden overflow-y-auto">
      <ToastContainer />
      <Header />
      <div className="flex flex-1 overflow-auto sm:max-w-full md:max-w-3/4 overflow-x-hidden">
        <DesktopCommities className="md:w-1/4 min-h-full overflow-auto sm:max-w-0 w-full inset-0" />
        <div className=" h-fit py-[5%] lg:mt-16 sm:w-[90%] sm:ml-[5%]  sm:mt-12 sm:px-4 lg:w-[70%] rounded-lg lg:ml-[24%]  md:w-[70%] md:ml-[23%] md:mt-20  flex items-center mb-10  bg-[#0d1d3b] pb-9">
          <div className="flex flex-col lg:flex-row items-center ">
            <div className="bg-transparent rounded-lg]">
              <img
                src="https://png.pngtree.com/png-vector/20230808/ourmid/pngtree-suggestion-box-vector-png-image_6882474.png"
                alt="suggestion"
                className=" lg:w-[80em] lg:h-[30em] md:w-[80em] md:h-[25em] sm:w-[60em] sm:h-[20em] "
              />
            </div>
            <div className="max-w-lg lg:w-[100%] mx-auto sm:mx-4 md:mt-0 sm:mt-2 px-5  bg-[#223b5d] rounded-lg shadow-md  py-6 ">
              <h1 className=" sm:text-md text-base md:text-lg lg:text-xl font-bold mb-6 text-center text-white ">
                Feedback Form
              </h1>
              <form onSubmit={submitFeedback}>
                <div className="mb-4">
                  <label
                    className="block text-gray-200 text-sm font-bold mb-2"
                    htmlFor="year"
                  >
                    YEAR
                  </label>
                  <select
                    id="year"
                    onChange={(e) => setYear(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value="">Select Year</option>
                    <option value="E1">E1</option>
                    <option value="E2">E2</option>
                    <option value="E3">E3</option>
                    <option value="E4">E4</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-200 text-sm font-bold mb-2"
                    htmlFor="branch"
                  >
                    Branch
                  </label>
                  <select
                    id="branch"
                    onChange={(e) => setBranch(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value="">Select Department</option>
                    <option value="cse">CSE</option>
                    <option value="ece">ECE</option>
                    <option value="eee">EEE</option>
                    <option value="cevil">Cevil</option>
                    <option value="mech">Mech</option>
                    <option value="chem">Chem</option>
                    <option value="mme">MME</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-200 text-sm font-bold mb-2"
                    htmlFor="committee"
                  >
                    Committee
                  </label>
                  <select
                    id="committee"
                    onChange={(e) => setCommitte(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value="">Select Committee</option>
                    {committees.map((committee, index) => (
                      <option key={index} value={committee}>
                        {committee}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-200 text-sm font-bold mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Enter yout suggestion/feedback"
                    onChange={(e) => setMessage(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    rows="4"
                  ></textarea>
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AcademicCommiteeForm
