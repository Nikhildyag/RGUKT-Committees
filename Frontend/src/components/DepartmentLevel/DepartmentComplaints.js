import React from 'react'
import { IoEyeOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const DepartmentComplaints = () => {
  const dummyData = [
    {
      id: 'E001',
      category: 'Maintenance',
      date: '2024-07-10',
      status: 'Resolved',
    },
    {
      id: 'P002',
      category: 'Repair',
      date: '2024-07-11',
      status: 'Pending',
    },
    {
      id: 'C003',
      category: 'Hygiene',
      date: '2024-07-12',
      status: 'In Progress',
    },
    {
      id: 'H004',
      category: 'Maintenance',
      date: '2024-07-13',
      status: 'Resolved',
    },
    {
      id: 'I005',
      category: 'Support',
      date: '2024-07-14',
      status: 'Pending',
    },
  ]

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
            {dummyData.map((complaint) => (
              <tr key={complaint.id} className="bg-gray-50 odd:bg-gray-100">
                <td className="w-1/6 sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 text-left py-3 px-4">
                  <div className="flex items-center">
                    <Link to={`/department/complaint/${complaint.id}`}>
                      <IoEyeOutline className="text-blue-500 hover:text-blue-700 mt-1" />
                    </Link>
                    <span className="ml-2">{complaint.id}</span>
                  </div>
                </td>
                <td className="w-3/6 sm:w-3/6 md:w-3/6 lg:w-3/6 xl:w-3/6 text-left py-3 px-4">
                  {complaint.category}
                </td>
                <td className="w-1/6 sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 text-left py-3 px-4">
                  {complaint.date}
                </td>
                <td className="w-1/6 sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 text-left py-3 px-4">
                  {complaint.status}
                </td>
              </tr>
            ))}
            {dummyData.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-4">
                  No complaints found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DepartmentComplaints
