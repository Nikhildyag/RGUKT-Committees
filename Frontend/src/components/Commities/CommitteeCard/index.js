import React from 'react'
import { Link } from 'react-router-dom'

const CommitteeCard = ({ data }) => {
  const { rolesAndResponsibilities, complaintForm } = data

  const clickButton = () => {
    console.log("submit complaint is clicked")
  }

  console.log(complaintForm)

  return (
    <div className=" p-6 sm:relative md:left-60 sm:left-0 z-0 ml-2 sm:mt-[2%]">
      <div className="mb-8 w-full md:w-3/4 break-words px-3">
        <h1 className="text-sm sm:text-base md:text-lg lg:text-3xl xl:text-3xl font-bold mb-4 mt-8 text-red-800">
          {` Welcome to RGUKT Basar's ${data.name}`}
        </h1>
        <div>
          <h3 className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl font-semibold mb-2 break-words bg-green-900 w-fit text-white px-2">
            Purpose:
          </h3>
          <p className="break-words text-sm sm:text-base md:text-md lg:text-lg xl:text-xl">
            {data.purPose}
          </p>
        </div>
      </div>
      <div className="mb-8 mx-3">
        <h2 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold mb-4 bg-green-900 w-fit text-white px-2">
          Roles And Responsibilites
        </h2>
        <div className="mb-4">
          <ul className="list-disc list-inside text-sm sm:text-base md:text-md lg:text-lg xl:text-xl">
            {rolesAndResponsibilities.map((eachrole, index) => (
              <li key={index}>{eachrole}</li>
            ))}
          </ul>
        </div>
        <div className="font-serif flex flex-row justify-center text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg w-[80%] md:mt-[5%] gap-3 sm:flex-col sm:items-center sm:mt-[14%] md:flex-row">
          <button className="w-[12em] h-[3em] bg-blue-500 text-white rounded-md">
            Submit Feedback
          </button>
           <Link to={complaintForm}>
           <button onClick={clickButton} className="w-[12em] h-[3em] bg-orange-400 text-white rounded-md cursor-pointer">
              Submit Complaint
            </button>
           </Link> 
        </div>
      </div>
    </div>
  )
}

export default CommitteeCard
