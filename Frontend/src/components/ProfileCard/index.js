import React from 'react'

const ProfileCard = ({ Data }) => {
  const { name, ImageUrl, Designation, Qualification, Branch } = Data
  return (
    <div className="flex justify-center mt-8 md:mt-10">
      <div className="max-w-xs md:max-w-lg">
        <div className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow-md">
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={ImageUrl}
            alt="Profile"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {Designation}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {Qualification}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {Branch}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
