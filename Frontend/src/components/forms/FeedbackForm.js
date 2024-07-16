import React from 'react'
import AcademicHeader from '../Commities/Acadamic/AcademicHeader'
import AcademicSidebar from '../Commities/Acadamic/AcademicSidebar'
import Header from '../Header'
import DesktopCommities from '../DesktopCommities'

const AcademicCommiteeForm = () => {
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
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <Header />
      <div className="flex w-full">
        <DesktopCommities />
      </div>
      <div className="lg:mt-24 sm:w-[90%] sm:ml-[5%]  sm:mt-24 sm:px-4 lg:w-[70%] rounded-lg lg:ml-[24%]  md:w-[70%] md:ml-[23%] md:mt-20  flex items-center mb-10  bg-[#0d1d3b] pb-9">
        <div className="flex flex-col lg:flex-row items-center ">
          <div className="bg-transparent rounded-lg">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/complaint-resolution-specialist-handling-customer-complaints-and-working-to-resolve-them-8978982-7328703.png?f=webp"
              alt="Complaint"
              className=" lg:w-[80em] lg:h-[30em] md:w-[80em] md:h-[25em] sm:w-[60em] sm:h-[20em] "
            />
          </div>
          <div className="max-w-lg lg:w-[100%] mx-auto sm:mx-4 md:mt-0  lg:mt-10 sm:mt-2 px-5  bg-[#223b5d] rounded-lg shadow-md  py-6 ">
            <h1 className=" sm:text-md text-base md:text-lg lg:text-xl font-bold mb-6 text-center text-white">
              Feedback Form
            </h1>
            <form>
              <div className="mb-4">
                <label
                  className="block text-gray-200 text-sm font-bold mb-2"
                  htmlFor="idNumber"
                >
                  ID Number
                </label>
                <input
                  type="text"
                  id="idNumber"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-200 text-sm font-bold mb-2"
                  htmlFor="year"
                >
                  Year
                </label>
                <input
                  type="text"
                  id="year"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
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
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
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
  )
}

export default AcademicCommiteeForm
