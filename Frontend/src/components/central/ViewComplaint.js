import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const dummyData = [
  { id: '001', category: 'Maintenance', date: '2024-07-14', status: 'Open' },
  { id: '002', category: 'Security', date: '2024-07-13', status: 'Closed' },
  { id: '003', category: 'Electricity', date: '2024-07-12', status: 'Open' },
  {
    id: '004',
    category: 'Water Supply',
    date: '2024-07-11',
    status: 'In Progress',
  },
  { id: '005', category: 'Internet', date: '2024-07-10', status: 'Open' },
  {
    id: '006',
    category: 'Cleanliness',
    date: '2024-07-09',
    status: 'Closed',
  },
  {
    id: '007',
    category: 'Food Quality',
    date: '2024-07-08',
    status: 'In Progress',
  },
  { id: '008', category: 'Noise', date: '2024-07-07', status: 'Open' },
  {
    id: '009',
    category: 'Infrastructure',
    date: '2024-07-06',
    status: 'Closed',
  },
  {
    id: '010',
    category: 'Transport',
    date: '2024-07-05',
    status: 'In Progress',
  },
]
const ViewComplaint = () => {
  const { complaintId } = useParams()
  const [complaint, setComplaint] = useState(null)

  useEffect(() => {
    const fetchComplaint = () => {
      const foundComplaint = dummyData.find((c) => c.id === complaintId)
      setComplaint(foundComplaint)
    }

    fetchComplaint()
  }, [complaintId])

  const handleStatusChange = (e) => {
    const newStatus = e.target.value
    setComplaint((prevComplaint) => ({
      ...prevComplaint,
      status: newStatus,
    }))
  }

  if (!complaint) {
    return <div className="text-center mt-4">Loading...</div>
  }
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
                <span className="font-medium">ID:</span> {complaint.id}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-medium">Category:</span>{' '}
                {complaint.category}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-medium">Date:</span> {complaint.date}
              </p>
              <div className="text-sm text-gray-600 mb-2">
                <span className="font-medium">Status:</span>{' '}
                <select
                  className="border border-gray-300 rounded px-2 py-1 mt-1"
                  value={complaint.status}
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewComplaint
