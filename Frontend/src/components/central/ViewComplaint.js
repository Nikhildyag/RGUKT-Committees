import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
const ViewComplaint = () => {
  const { complaintId } = useParams()
  const [remarks, setRemarks] = useState();
  const [complaint, setComplaint] = useState(null)
  const [status, setStatus] = useState('pending');
  useEffect(() => {
    const fetchComplaint =async() => {
      try {
        const response = await fetch(
          `http://localhost:1024/api/v1/complaints//get/particularComplaintForCentral/${complaintId}`,
          {
            method: 'GET',
            credentials: 'include', // Include credentials (cookies)
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const json = await response.json()
        console.log(json.complaint)
        setComplaint(json.complaint)
        setStatus(json.complaint.status);
      } catch (error) {
        console.log(error)
      }
    }
    fetchComplaint()
  }, [complaintId])

  const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};


  const handleStatusChange = (e) => {
    const newStatus = e.target.value
    setStatus(newStatus)
  }

  const submitComplaint = async () => {
    const data = {
      status,
      centralRemarks:remarks,
      complaint_id:complaintId
    }
    const complaintDetails = JSON.stringify(data);
     try {
        const response = await fetch(
          `http://localhost:1024/api/v1/complaints/get/particularComplaintForCentral/${complaintId}`,
          {
            method: 'GET',
            credentials: 'include', // Include credentials (cookies)
            headers: {
              'Content-Type': 'application/json',
            },
            body:complaintDetails
          }
        )
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const json = await response.json()
        console.log(json.complaint)
        setComplaint(json.complaint)
        setStatus(json.complaint.status);
      } catch (error) {
        console.log(error)
      }
  }

  if (!complaint) {
    return <div className="text-center mt-4">Loading...</div>
  }
  console.log(status,remarks)
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full max-w-screen">
      <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">
        Complaint Details
      </h2>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden sm:rounded-lg border border-gray-300 hover:border-blue-500 transition duration-300">
        <div className="p-4">
          <div className="flex flex-col border-b border-gray-300 hover:bg-gray-100">
            <div className="py-2 border-b border-gray-300">
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-medium">ID:</span> {complaint._id}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-medium">Category:</span>{' '}
                {complaint.category}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-medium">Date:</span> {formatDate(complaint.createdAt)}
              </p>
              <div className="text-sm text-gray-600 mb-2">
                <span className="font-medium">Status:</span>
                <select
                  className="border border-gray-300 rounded px-2 py-1 mt-1"
                  value={status}
                  onChange={handleStatusChange}
                >
                  <option value="Pending">Pending</option>
                  <option value="Resolved">Resolved</option>
                  <option value="Raised to Central Authority">
                    Raised to Central Authority
                  </option>
                </select>
              </div>
            </div>
            <div className="py-2">
              <p className="text-sm text-gray-700">
                <span className="font-medium">Description:</span>{' '}
                {complaint.description}
              </p>
            </div>
            <div className="text-sm flex flex-col mb-4">
              <label>Remarks:</label>
              <textarea
                className="w-auto px-2 py-2 my-2 border border-blue-500"
                placeholder="Remarks to be raised to central authority"
                onChange={(e)=>setRemarks(e.target.value)}
              ></textarea>
            </div>
          </div>
           <button type='submit' onClick={submitComplaint} className='bg-gray-200'>submit complaint</button>
        </div>
      </div>
    </div>
  )
}

export default ViewComplaint
