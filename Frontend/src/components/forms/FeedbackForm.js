import React from 'react'

const FeedbackForm = () => {
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
    'Technical Committee',
    'Library Committee',
    'Transportation Committee',
    'Security Committee',
    'Alumni Committee',
  ]

  return (
    <div className="min-h-screen flex items-center justify-center white">
      <div className="bg-[#223b5d] p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-center text-white">
          Feedback Form
        </h2>
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
  )
}

export default FeedbackForm
