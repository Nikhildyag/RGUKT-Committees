import React, { useState } from 'react'

const CulturalCommitteeForm = () => {
  const [category, setCategory] = useState('')
  const [otherCategory, setOtherCategory] = useState('')

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
    if (e.target.value !== 'other') {
      setOtherCategory('')
    }
  }

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Cultural Committee Feedback Form
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
            htmlFor="category"
          >
            Feedback Category
          </label>
          <select
            id="category"
            name="category"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={category}
            onChange={handleCategoryChange}
          >
            <option value="">Select Category</option>
            <option value="events">Cultural Events and Competitions</option>
            <option value="talent">
              Talent Showcase (Music, Dance, Drama, Literary)
            </option>
            <option value="diversity">
              Diversity and Cultural Heritage Celebration
            </option>
            <option value="inclusivity">
              Inclusivity and Cultural Exchange
            </option>
            <option value="other">Other</option>
          </select>
        </div>
        {category === 'other' && (
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
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Specify other category"
              value={otherCategory}
              onChange={(e) => setOtherCategory(e.target.value)}
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

export default CulturalCommitteeForm
