import React, { useState } from 'react'

const CampusAmenitiesForm = () => {
  const [issueCategory, setIssueCategory] = useState('')
  const [otherCategory, setOtherCategory] = useState('')

  const handleIssueCategoryChange = (e) => {
    setIssueCategory(e.target.value)
  }

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Campus Amenities Committee Feedback/Grievance Form
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
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="issueCategory"
          >
            Issue Category
          </label>
          <select
            id="issueCategory"
            name="issueCategory"
            value={issueCategory}
            onChange={handleIssueCategoryChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a category</option>
            <option value="Maintenance of campus facilities">
              Maintenance of campus facilities
            </option>
            <option value="Infrastructure issues">Infrastructure issues</option>
            <option value="Classroom-related issues">
              Classroom-related issues
            </option>
            <option value="Common area issues">Common area issues</option>
            <option value="Campus beautification projects">
              Campus beautification projects
            </option>
            <option value="Timely repairs">Timely repairs</option>
            <option value="Other">Other</option>
          </select>
        </div>
        {issueCategory === 'Other' && (
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
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Describe the issue or suggestion"
            rows="5"
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="location"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Specific location on campus"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="urgencyLevel"
          >
            Urgency Level
          </label>
          <select
            id="urgencyLevel"
            name="urgencyLevel"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image"
          >
            Upload Image (Optional)
          </label>
          <input
            type="file"
            id="image"
            name="image"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="contactMethod"
          >
            Preferred Contact Method
          </label>
          <select
            id="contactMethod"
            name="contactMethod"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Email">Email</option>
            <option value="Phone">Phone</option>
          </select>
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

export default CampusAmenitiesForm
