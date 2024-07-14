import React, { useState } from "react";
import AcademicHeader from "../Commities/Acadamic/AcademicHeader";
import AcademicSidebar from "../Commities/Acadamic/AcademicSidebar";

const AcademicCommitteForm = () => {
  const [category, setCategory] = useState("");
  const [otherCategory, setOtherCategory] = useState("");
  const [year, setYear] = useState("");
  const [branch, setBranch] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [studentId, setStudentId] = useState("");

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleYear = (e) => {
    setYear(e.target.value);
  };

  const handleBranch = (e) => {
    setBranch(e.target.value);
  };

  const handleAnonymousChange = (e) => {
    setIsAnonymous(e.target.value === "anonymous");
  };

  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <AcademicHeader name={"Academic Committee"} />
      <div className="flex w-full">
        <AcademicSidebar />
      </div>
      <div className="mt-16 sm:w-[100%] sm:px-6 lg:w-[118%] md:w-[116%] md:mt-12 flex items-center mb-10">
        <div className="max-w-lg mx-auto mt-10 p-6 bg-[#03193d] rounded-lg shadow-md border border-black">
          <h1 className="text-2xl font-bold mb-6 text-center text-white">
            Academic Committee Grievance Form
          </h1>
          <form>
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
                className="block text-white text-sm font-bold mb-2"
                htmlFor="year"
              >
                Year
              </label>
              <select
                id="year"
                name="year"
                value={year}
                onChange={handleYear}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select year</option>
                <option value="E1">E1</option>
                <option value="E2">E2</option>
                <option value="E3">E3</option>
                <option value="E4">E4</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="branch"
              >
                Branch
              </label>
              <select
                id="branch"
                name="branch"
                value={branch}
                onChange={handleBranch}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select branch</option>
                <option value="CSE">CSE</option>
                <option value="ECE">ECE</option>
                <option value="EEE">EEE</option>
                <option value="CE">CE</option>
                <option value="ME">ME</option>
                <option value="CHE">CHE</option>
                <option value="MME">MME</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
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
            {category === "Other" && (
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-bold mb-2"
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
                className="block text-white text-sm font-bold mb-2"
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
  );
};

export default AcademicCommitteForm;
