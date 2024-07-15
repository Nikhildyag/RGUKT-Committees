import React, { useState } from 'react'

const SportsCommitteeForm = () => {
  const [isAnonymous, setIsAnonymous] = useState(false)
  const [name, setName] = useState('')
  const [studentId, setStudentId] = useState('')
  const [year, setYear] = useState('')
  const [branch, setBranch] = useState('')
  const [ground, setGround] = useState('')
  const [category, setCategory] = useState('')
  const [otherCategory, setOtherCategory] = useState('')
  const [message, setMessage] = useState('')

  const handleAnonymousChange = (e) => {
    setIsAnonymous(e.target.value === 'Anonymous')
  }

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value
    setCategory(selectedCategory)
    // Reset otherCategory when selecting a different category
    if (selectedCategory !== 'Other') {
      setOtherCategory('')
    }
  }

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Sports Committee Feedback Form
      </h1>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Submission Type
          </label>
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="anonymous"
              name="submissionType"
              value="Anonymous"
              onChange={handleAnonymousChange}
              className="mr-2"
            />
            <label htmlFor="anonymous" className="text-gray-700 mr-4">
              Anonymous
            </label>
            <input
              type="radio"
              id="notAnonymous"
              name="submissionType"
              value="NotAnonymous"
              onChange={handleAnonymousChange}
              className="mr-2"
              defaultChecked
            />
            <label htmlFor="notAnonymous" className="text-gray-700">
              Not Anonymous
            </label>
          </div>
        </div>
        {!isAnonymous && (
          <>
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
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
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
          </>
        )}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="year"
          >
            Year
          </label>
          <select
            id="year"
            name="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Year</option>
            <option value="1st Year">1st Year</option>
            <option value="2nd Year">2nd Year</option>
            <option value="3rd Year">3rd Year</option>
            <option value="4th Year">4th Year</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="branch"
          >
            Branch
          </label>
          <select
            id="branch"
            name="branch"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Branch</option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="EEE">EEE</option>
            <option value="ME">ME</option>
            <option value="CE">CE</option>
            <option value="MME">MME</option>
            <option value="CHEM">CHEM</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="ground"
          >
            Ground
          </label>
          <select
            id="ground"
            name="ground"
            value={ground}
            onChange={(e) => setGround(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Ground</option>
            <option value="shatavahana">Shatavahana Ground</option>
            <option value="football">Kakatiya Ground</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="category"
          >
            Feedback Category
          </label>
          <select
            id="category"
            name="category"
            value={category}
            onChange={handleCategoryChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Category</option>
            <option value="sports_events">
              Inter-house/Inter-college Sports Events
            </option>
            <option value="facilities">Sports Facilities and Equipment</option>
            <option value="talent_identification">Talent Identification</option>
            <option value="physical_fitness">
              Promotion of Physical Fitness
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
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your feedback or suggestions"
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

export default SportsCommitteeForm
