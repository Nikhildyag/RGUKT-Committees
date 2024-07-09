import React, { useState } from 'react'

const Form = () => {
  const [category, setCategory] = useState('')
  const [otherCategory, setOtherCategory] = useState('')
  const [year, setYear] = useState('')
  const [branch, setBranch] = useState('')
  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
  }
  const handleYear = (e) => {
    setYear(e.target.value)
  }
  const handleBranch = (e) => {
    setBranch(e.target.value)
  }

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Academic Committee Suggestion/Grievance Form
      </h1>
      <form>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
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
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="studentId"
          >
            Student_Id
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Id"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
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
            <option value="P1">P1</option>
            <option value="P2">P2</option>
            <option value="E1">E1</option>
            <option value="E2">E2</option>
            <option value="E3">E3</option>
            <option value="E4">E4</option>
          </select>
        </div>
        {(year === 'E1' || year === 'E2' || year === 'E3' || year === 'E4') && (
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="otherCategory"
            >
              Please specify
            </label>
            <select
              id="branch"
              name="branch"
              value={branch}
              onChange={handleBranch}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value=""> Select branch</option>
              <option value="P1">CSE</option>
              <option value="P2">ECE</option>
              <option value="E1">EEE</option>
              <option value="E2">CE</option>
              <option value="E3">ME</option>
              <option value="E4">CHE</option>
              <option value="E4">MME</option>
            </select>
          </div>
        )}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="category"
          >
            Suggestion/Grievance Category
          </label>
          <select
            id="category"
            name="category"
            value={category}
            onChange={handleCategoryChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a category</option>
            <option value="Monitor academic performance">
              Monitor academic performance
            </option>
            <option value="Academic workshops, seminars, and guest lectures">
              Academic workshops, seminars, and guest lectures
            </option>
            <option value="Course feedback and improvements">
              Course feedback and improvements
            </option>
            <option value="Academic policies and curriculum development">
              Academic policies and curriculum development
            </option>
            <option value="Other">Other</option>
          </select>
        </div>
        {category === 'Other' && (
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
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
            className="block text-gray-700 text-sm font-bold mb-2"
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
  )
}

export default Form
