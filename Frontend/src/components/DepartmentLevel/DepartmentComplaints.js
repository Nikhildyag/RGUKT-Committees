import React, { useEffect, useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const DepartmentComplaints = () => {
  const [complaints, setcomplainte] = useState();
  const [complatsReady, setcomplantsReady] = useState();

  const fetchComplaints = async () => {
    const url =
      "http://localhost:1024/api/v1/complaints/get/ComplaintsForDepartment";
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
      setcomplainte(json.complaints);
      setcomplantsReady(true);
    } catch (error) {
      console.log(error);
    }
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  useEffect(() => {
    fetchComplaints();
  }, []);
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full mt-16">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow overflow-hidden rounded-lg border-b border-gray-200">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="w-1/6 sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 text-left py-3 px-4 uppercase font-semibold text-sm">
                ID
              </th>
              <th className="w-3/6 sm:w-3/6 md:w-3/6 lg:w-3/6 xl:w-3/6 text-left py-3 px-4 uppercase font-semibold text-sm">
                Category
              </th>
              <th className="w-1/6 sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 text-left py-3 px-4 uppercase font-semibold text-sm">
                Date
              </th>
              <th className="w-1/6 sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 text-left py-3 px-4 uppercase font-semibold text-sm">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {complatsReady &&
              complaints.map((complaint) => (
                <tr key={complaint.id} className="bg-gray-50 odd:bg-gray-100">
                  <td className="w-1/6 sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 text-left py-3 px-4">
                    <div className="flex items-center">
                      <Link to={`/department/complaint/${complaint._id}`}>
                        <IoEyeOutline className="text-blue-500 hover:text-blue-700 mt-1" />
                      </Link>
                      <span className="ml-2">{complaint.id}</span>
                    </div>
                  </td>
                  <td className="w-3/6 sm:w-3/6 md:w-3/6 lg:w-3/6 xl:w-3/6 text-left py-3 px-4">
                    {complaint.category}
                  </td>
                  <td className="w-1/6 sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 text-left py-3 px-4">
                    {formatDate(complaint.createdAt)}
                  </td>
                  <td className="w-1/6 sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 text-left py-3 px-4">
                    {complaint.status}
                  </td>
                </tr>
              ))}
            {complatsReady && complaints.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-4">
                  No complaints found
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div>
          <button className="bg-blue-600">prev</button>
          <button>next</button>
        </div>
      </div>
    </div>
  );
};

export default DepartmentComplaints;
