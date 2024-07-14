import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const dummyData = [
  {
    id: 'E001',
    category: 'Maintenance',
    date: '2024-07-10',
    status: 'Resolved',
    description: 'This complaint is related to maintenance of facilities.',
  },
  {
    id: 'P002',
    category: 'Repair',
    date: '2024-07-11',
    status: 'Pending',
    description: 'This complaint is regarding repairs needed for equipment.',
  },
  {
    id: 'C003',
    category: 'Hygiene',
    date: '2024-07-12',
    status: 'In Progress',
    description: 'This complaint is related to hygiene standards in the area.',
  },
  {
    id: 'H004',
    category: 'Maintenance',
    date: '2024-07-13',
    status: 'Resolved',
    description: 'This complaint is related to maintenance of infrastructure.',
  },
  {
    id: 'I005',
    category: 'Support',
    date: '2024-07-14',
    status: 'Pending',
    description:
      'This complaint is regarding support needed for a specific issue.',
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
