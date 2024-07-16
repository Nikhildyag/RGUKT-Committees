import React, { useState } from 'react'

const CommitteeCard = ({ data }) => {
  const { rolesAndResponsibilities } = data
  const committee_name = data.name
  const categories = data.categories
  const [showForm, setShowForm] = useState(false)

  const [category, setCategory] = useState('')
  const [otherCategory, setOtherCategory] = useState('')
  const [year, setYear] = useState('')
  const [branch, setBranch] = useState('')
  const [isAnonymous, setIsAnonymous] = useState(false)
  const [studentId, setStudentId] = useState('')

  const handleAnonymousChange = (e) => {
    setIsAnonymous(e.target.value === 'anonymous')
  }

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
  }

  const handleYear = (e) => {
    setYear(e.target.value)
  }

  const handleBranch = (e) => {
    setBranch(e.target.value)
  }
  const handlesubmit = (e) => {
    e.preventDefault()
  }

  const DisplayForm = () => {
    setShowForm(!showForm)
  }

  return (
    <div>
      {!showForm ? (
        <>
          <div className="p-6 sm:relative md:left-40 sm:left-0 z-0 sm:mt-[2%]">
            <div className="mb-8 w-full md:w-3/4 break-words px-3">
              <h1 className="text-sm sm:text-base md:text-lg lg:text-3xl xl:text-3xl font-bold mb-4 mt-8 text-red-800">
                {` Welcome to RGUKT Basar's ${data.name}`}
              </h1>
              <div>
                <h3 className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl font-semibold mb-2 break-words bg-green-900 w-fit text-white px-2">
                  Purpose:
                </h3>
                <p className="break-words text-sm sm:text-base md:text-md lg:text-lg xl:text-xl">
                  {data.purPose}
                </p>
              </div>
            </div>
            <div className="mb-8 mx-3">
              <h2 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold mb-4 bg-green-900 w-fit text-white px-2">
                Roles And Responsibilities
              </h2>
              <div className="mb-4">
                <ul className="list-disc list-inside text-sm sm:text-base md:text-md lg:text-lg xl:text-xl">
                  {rolesAndResponsibilities.map((eachrole, index) => (
                    <li key={index}>{eachrole}</li>
                  ))}
                </ul>
              </div>
              <div className="font-serif flex flex-row justify-center text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg w-[80%] md:mt-[5%] gap-3 sm:flex-col sm:items-center sm:mt-[14%] md:flex-row">
                <button className="w-[12em] h-[3em] bg-blue-500 text-white rounded-md">
                  Submit Feedback
                </button>

                <button
                  className="w-[12em] h-[3em] bg-orange-400 text-white rounded-md cursor-pointer"
                  onClick={DisplayForm}
                >
                  Submit Complaint
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="p-6 sm:relative md:left-[22%] lg:left-[18%] sm:ml-[-9%] sm:mx-[-2%] z-0 md:mt-[-5%] lg:mt-[-10%]">
          <div className="max-w-[100%] overflow-x-hidden text-wrap">
            <div>
              <div className="lg:flex lg:justify-start sm:mt-[15%]">
                <button
                  onClick={DisplayForm}
                  className="px-3 py-1  bg-[#0d1d3b] text-white hover:text-blue-500 rounded-md"
                >
                  Home
                </button>
              </div>
            </div>
            <div className="lg:mt-1 sm:w-[100%]  sm:mt-5 sm:px-1 lg:w-[80%] rounded-lg lg:ml-[0%]  md:w-[70%] md:ml-[0%] md:mt-5  flex items-center mb-10  bg-[#0d1d3b] pb-9">
              <div className="flex flex-col lg:flex-row items-center ">
                {/* <button >back</button> */}
                <div className="bg-transparent rounded-lg ">
                  <img
                    src="https://cdni.iconscout.com/illustration/premium/thumb/complaint-resolution-specialist-handling-customer-complaints-and-working-to-resolve-them-8978982-7328703.png?f=webp"
                    alt="Complaint"
                    className=" lg:w-[80em] lg:h-[30em] md:w-[80em] md:h-[25em] sm:w-[60em] sm:h-[20em] "
                  />
                </div>
                <div className="max-w-lg lg:w-[100%] mx-auto sm:mx-3 md:mt-0  lg:mt-10 sm:mt-2 px-4  bg-[#223b5d] rounded-lg shadow-md  py-6 ">
                  <h1 className=" sm:text-md text-base md:text-lg lg:text-xl font-bold mb-6 text-center text-white">
                    {committee_name} Grievance Form
                  </h1>
                  <form onSubmit={handlesubmit}>
                    <div className="mb-4">
                      <label className="block text-white text-sm font-bold mb-2">
                        Identity
                      </label>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="anonymous"
                          name="identity"
                          value="anonymous"
                          checked={isAnonymous}
                          onChange={handleAnonymousChange}
                          className="mr-2"
                        />
                        <label htmlFor="anonymous" className="text-white mr-4">
                          Anonymous
                        </label>
                        <input
                          type="radio"
                          id="notAnonymous"
                          name="identity"
                          value="notAnonymous"
                          checked={!isAnonymous}
                          onChange={handleAnonymousChange}
                          className="mr-2"
                        />
                        <label htmlFor="notAnonymous" className="text-white">
                          Specify
                        </label>
                      </div>
                    </div>
                    {!isAnonymous && (
                      <div>
                        <div className="mb-4">
                          <label
                            className="block text-white text-sm font-bold mb-2"
                            htmlFor="name"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your Name"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            className="block text-white text-sm font-bold mb-2"
                            htmlFor="studentId"
                          >
                            Student ID
                          </label>
                          <input
                            type="text"
                            id="studentId"
                            name="studentId"
                            value={studentId}
                            onChange={(e) => setStudentId(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your Student ID"
                          />
                        </div>
                      </div>
                    )}
                    <div className="mb-4">
                      <label
                        className="block text-white font-bold mb-2"
                        htmlFor="studentId"
                      >
                        year
                      </label>
                      <select
                        id="year"
                        name="year"
                        value={year}
                        onChange={handleYear}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value=""> Select year</option>
                        <option value="E1">E1</option>
                        <option value="E2">E2</option>
                        <option value="E3">E3</option>
                        <option value="E4">E4</option>
                      </select>
                    </div>

                    <div className="mb-4">
                      <label
                        className="block text-white  font-bold mb-2"
                        htmlFor="otherCategory"
                      >
                        Department
                      </label>
                      <select
                        id="branch"
                        name="branch"
                        value={branch}
                        onChange={handleBranch}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value=""> Select branch</option>
                        <option value="cse">CSE</option>
                        <option value="ece">ECE</option>
                        <option value="eee">EEE</option>
                        <option value="chem">CE</option>
                        <option value="mech">ME</option>
                        <option value="chem">CHE</option>
                        <option value="mme">MME</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-white font-bold mb-2"
                        htmlFor="category"
                      >
                        Grievance Category
                      </label>
                      <select
                        id="category"
                        name="category"
                        value={category}
                        onChange={handleCategoryChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800"
                      >
                        <option value="">Select a category</option>
                        {categories.map((category) => (
                          <option value={category}>{category}</option>
                        ))}
                      </select>
                    </div>
                    {(category === 'Other' || category === 'other') && (
                      <div className="mb-4">
                        <label
                          className="block text-white  font-bold mb-2"
                          htmlFor="otherCategory"
                        >
                          Please specify
                        </label>
                        <input
                          type="text"
                          id="otherCategory"
                          name="otherCategory"
                          value={otherCategory}
                          onChange={(e) => setOtherCategory(e.target.value)}
                          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Specify your category"
                        />
                      </div>
                    )}
                    <div className="mb-4">
                      <label
                        className="block text-white  font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your Feedback or Grievance"
                        rows="5"
                      ></textarea>
                    </div>
                    <div className="flex items-center justify-center">
                      <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
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
      )}
    </div>
  )
}

export default CommitteeCard
