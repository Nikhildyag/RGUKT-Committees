import React from 'react'

const notFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <img
        src="https://cdni.iconscout.com/illustration/premium/thumb/404-page-8949500-7314218.png?f=webp"
        alt="Not Found"
        className="w-full max-w-sm mb-4"
      />
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 text-center">
        Oops!! Page Not Found
      </h1>
      <p className="text-gray-600 text-center text-sm md:text-base">
        Please check your path  or check your Network Settings network settings and try again.
      </p>
    </div>
  )
}

export default notFound
