import React from 'react'

const ProfileCard = ({Data}) => {
    const {name,ImageUrl,Designation,Qualification,Branch}=Data
  return (
    <div  className="flex flex-col mt-20 w-[80%] items-center my-5">
            <div className="flex sm:m-1 md:m-0 flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl cursor-pointer">
              <img
                className="object-cover w-36 rounded-t-lg h-36 md:h-36 md:w-36 md:rounded-none md:rounded-s-lg px-2"
                src={ImageUrl}
                alt="ProfileCard"
              />
              <div className="flex flex-col justify-between items-center px-4 py-2 leading-normal w-[18em]">
                <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                 {name}
                </h1>
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
  )
}

export default ProfileCard
