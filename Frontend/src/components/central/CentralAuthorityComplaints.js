import React from 'react'
import { IoEyeOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
const CentralAuthorityComplaints = () => {
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

export default CentralAuthorityComplaints
