import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify"; // Import ToastContainer and toast
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../helper";

const ViewComplaint = () => {
  const { complaintId } = useParams();
  const [remarks, setRemarks] = useState();
  const [complaint, setComplaint] = useState(null);
  const [status, setStatus] = useState("pending");
  const navigate = useNavigate();
  useEffect(() => {
    const fetchComplaint = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/api/v1/complaints/get/particularComplaintForCentral/${complaintId}`,
          {
            method: "GET",
            credentials: "include", // Include credentials (cookies)
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await response.json();
        console.log(json.complaint);
        setComplaint(json.complaint);
        setStatus(json.complaint.status);
      } catch (error) {
        console.log(error);
      }
    };
    fetchComplaint();
  }, [complaintId]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    setStatus(newStatus);
  };

  const submitComplaint = async (e) => {
    e.preventDefault();
    if (!status || !remarks) {
      toast.error("All fields are required");
      return;
    }
    const data = {
      status,
      centralRemarks: remarks,
      complaint_id: complaintId,
    };
    const complaintDetails = JSON.stringify(data);
    try {
      const response = await fetch(
        `${BASE_URL}/api/v1/complaints/update-complaintForCentral`,
        {
          method: "POST",
          credentials: "include", // Include credentials (cookies)
          headers: {
            "Content-Type": "application/json",
          },
          body: complaintDetails,
        }
      );
      //console.log(response)
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();
      toast.success("Status updated successfully");
      setTimeout(() => {
        navigate("/centralAuthorityHome");
      }, 1200);

      console.log(json);
    } catch (error) {
      console.log(error);
    }
  };

  if (!complaint) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full max-w-screen">
      <ToastContainer />
      <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">
        Complaint Details
      </h2>
      <div className="bg-[#0d1d3b] rounded-lg shadow-lg overflow-hidden sm:rounded-lg border border-gray-300 hover:border-blue-500 transition duration-300">
        <div className="p-4">
          <div className="flex flex-col   px-4">
            <div className="py-2 ">
              <p className="text-sm md:text-md text-white mb-2">
                <span className="md:text-md">ID:</span> {complaint._id}
              </p>
              <p className="text-sm md:text-md text-white mb-2">
                <span className="md:text-md">Year:</span> {complaint.year}
              </p>
              <p className="text-sm md:text-md text-white mb-2">
                <span className="md:text-md">Department:</span>{" "}
                {complaint.department}
              </p>
              <p className="text-sm md:text-md text-white mb-2">
                <span className="md:text-md">Category:</span>{" "}
                {complaint.category}
              </p>
              <p className="text-sm md:text-md text-white mb-2">
                <span className="md:text-md font-medium">Date:</span>{" "}
                {formatDate(complaint.createdAt)}
              </p>
              <div className="text-sm md:text-md text-white mb-2">
                <span className="md:text-md">Status:{` `}</span>
                <select
                  className="border border-gray-300 rounded px-2 py-1 mt-1 ml-0 md:text-md text-black"
                  value={status}
                  onChange={handleStatusChange}
                >
                  <option value="pending">Pending</option>
                  <option value="resolved">Resolved</option>
                </select>
              </div>
            </div>
            <div className="pb-2">
              <p className="text-sm md:text-md text-white">
                <span className="md:text-md">Description:</span>{" "}
                {complaint.description}
              </p>
            </div>
            <div className="text-sm flex flex-col mb-4 md:text-md">
              <label className="text-white">Remarks:</label>
              <textarea
                className="w-auto px-2 py-2 my-2  text-black"
                onChange={(e) => setRemarks(e.target.value)}
                placeholder="Remarks to be raised to central authority"
                value={remarks}
              ></textarea>
            </div>
            <div className="mb-4">
              <button
                type="submit"
                onClick={submitComplaint}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md md:text-md"
              >
                Update Status
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewComplaint;
