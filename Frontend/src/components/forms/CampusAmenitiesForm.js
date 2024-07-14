import React, { useState } from "react";
import CampusAmentiesHeader from "../Commities/CampusAmenties/CampusAmentiesHeader";
import CampusAmentiesSidebar from "../Commities/CampusAmenties/CampusAmentiesSidebar";

const CampusAmenitiesForm = () => {
  const [issueCategory, setIssueCategory] = useState("");
  const [otherCategory, setOtherCategory] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [year, setYear] = useState("");
  const [branch, setBranch] = useState("");

  const handleIssueCategoryChange = (e) => {
    setIssueCategory(e.target.value);
  };

  const handleAnonymousChange = (e) => {
    setIsAnonymous(e.target.value === "Anonymous");
    // Reset fields when switching to anonymous
    if (e.target.value === "Anonymous") {
      setName("");
      setStudentId("");
      setYear("");
      setBranch("");
    }
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const handleBranchChange = (e) => {
    setBranch(e.target.value);
  };

  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <CampusAmentiesHeader name={"Campus Amenities Committee"} />
      <div className="flex w-full">
        <CampusAmentiesSidebar />
      </div>
      <div className="mt-16 sm:w-[100%] sm:px-6 lg:w-[118%] md:w-[116%] md:mt-12 flex items-center mb-10">
        <div className="max-w-lg mx-auto mt-10 p-6 bg-[#03193d] rounded-lg shadow-md border border-black">
          <h1 className="text-2xl font-bold mb-6 text-center text-white">
            Campus Amenities Committee Feedback/Grievance Form
          </h1>
          <form>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2">
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
                <label htmlFor="anonymous" className="text-white mr-4">
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
                <label htmlFor="notAnonymous" className="text-white">
                  Not Anonymous
                </label>
              </div>
            </div>
            {!isAnonymous && (
              <>
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-white text-sm font-bold mb-2"
                    htmlFor="studentId"
                  >
                    Student Id
                  </label>
                  <input
                    type="text"
                    id="studentId"
                    name="studentId"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Student Id"
                  />
                </div>
              </>
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
                onChange={handleYearChange}
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
                className="block text-white text-sm font-bold mb-2"
                htmlFor="branch"
              >
                Branch
              </label>
              <select
                id="branch"
                name="branch"
                value={branch}
                onChange={handleBranchChange}
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
                className="block text-white text-sm font-bold mb-2"
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
                <option value="Infrastructure issues">
                  Infrastructure issues
                </option>
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
            {issueCategory === "Other" && (
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
                className="block text-white text-sm font-bold mb-2"
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

export default CampusAmenitiesForm;
