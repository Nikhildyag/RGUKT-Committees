import React, { useState } from "react";

const MessAdvisoryForm = () => {
  const [isAnonymous, setIsAnonymous] = useState(false);

  const handleAnonymousChange = (e) => {
    setIsAnonymous(e.target.value === "Anonymous");
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Mess Advisory Committee Feedback Form
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
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="studentId"
              >
                Student Id
              </label>
              <input
                type="text"
                id="studentId"
                name="studentId"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Student Id"
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
            htmlFor="complaints"
          >
            Complaints
          </label>
          <textarea
            id="complaints"
            name="complaints"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your complaints related to food service"
            rows="3"
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
  );
};

export default MessAdvisoryForm;
