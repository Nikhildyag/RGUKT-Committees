import React, { useEffect, useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import DepartmentHeader from "./DepartmentHeader";
import DepartmentSidebar from "./DepartmentSidebar";

const Departmentfeedbacks = () => {
  const [feedbacks, setfeedbacks] = useState([]);
  const [feedbacksReady, setfeedbacksReady] = useState(false);

  const fetchfeedbacks = async () => {
    const url =
      "http://localhost:1024/api/v1/feebacks/get/feedbacksForDepartment";
    try {
      const response = await fetch(url, {
        method: "GET",
        credentials: "include", // Include credentials (cookies)
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();
      console.log(json);
      setfeedbacks(json.feedbacks);
      setfeedbacksReady(true);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchfeedbacks();
  }, []);
  const formatDate = (dateString) => {
    console.log(dateString);
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    console.log(day, month, year);

    return `${day}/${month}/${year}`;
  };
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <DepartmentHeader />
      <div className="flex w-full">
        <DepartmentSidebar />
        <div className="relative h-screen w-full left-64 top-20">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-[80%] mt-[-1%] ml-5">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white shadow overflow-hidden rounded-lg border-b border-gray-200">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="w-1/6 sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 text-left py-3 px-4 uppercase font-semibold text-sm">
                      ID
                    </th>
                    <th className="w-3/6 sm:w-3/6 md:w-3/6 lg:w-3/6 xl:w-3/6 text-left py-3 px-4 uppercase font-semibold text-sm">
                      year
                    </th>
                    <th className="w-1/6 sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 text-left py-3 px-4 uppercase font-semibold text-sm">
                      Committe Name
                    </th>
                  </tr>
                </thead>
                {/* <tbody className="text-gray-700">
                    {feedbacksReady && feedbacks.map((feedback) => (
                        <tr key={feedback.id} className="bg-gray-50 odd:bg-gray-100">
                            <td className="w-1/6 sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 text-left py-3 px-4">
                            <div className="flex items-center">
                                <Link to={`/department/complaint/${feedback._id}`}>
                                  <IoEyeOutline className="text-blue-500 hover:text-blue-700 mt-1" />
                                </Link>
                                <span className="ml-2">{feedback.id}</span>
                            </div>
                            </td>
                            <td className="w-3/6 sm:w-3/6 md:w-3/6 lg:w-3/6 xl:w-3/6 text-left py-3 px-4">
                            {feedback.category}
                            </td>
                            <td className="w-1/6 sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 text-left py-3 px-4">
                            {formatDate(feedback.createdAt)}
                            </td>
                        </tr>
                        ))}
                        {feedbacksReady && feedbacks.length === 0 && (
                        <tr>
                            <td colSpan="4" className="text-center py-4">
                            No feedbacks found
                            </td>
                        </tr>
                        )}
                    </tbody> */}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Departmentfeedbacks;
