import React from 'react'

const Homepage = () => {
  return (
    <div className="flex flex-col items-center p-5">
      <h1 className="text-[black]  font-bold font-serif">Type Users</h1>
      <div className="h-24 w-24 bg-gray-200 border-none rounded-md m-1 flex flex-col items-center justify-center">
        Students
      </div>
      <div className="h-24 w-24 bg-gray-200 border-none rounded-md m-1 flex flex-col items-center justify-center">
        Department Heads
      </div>
      <div className="h-24 w-24 bg-gray-200 border-none rounded-md flex flex-col items-center justify-center">
        Central Authorities
      </div>
    </div>
  )
}

export default Homepage
