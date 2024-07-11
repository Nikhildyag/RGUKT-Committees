import React from 'react'

const CommitteeCard = ({ data }) => {
  const { rolesAndResponsibilities } = data
  console.log(rolesAndResponsibilities)
  return (
    <div className="flex-1 p-6 sm:relative md:left-60 sm:left-0 z-[-1] ml-2">
      <div className="mb-8 w-full md:w-3/4 break-words px-3">
        <div className="flex  flex-row justify-center md:mt-[5%] gap-3 sm:flex-col sm:mt-[14%] md:flex-row">
          <button className="w-[12em] h-[3em] bg-blue-500 text-white rounded-md">
            Submit Feedback
          </button>
          <button className="w-[12em] h-[3em] bg-orange-400 text-white rounded-md">
            Submit Complaint
          </button>
        </div>
        <h1 className="text-3xl font-bold mb-4 mt-8 text-red-800">
          {` Welcome to RGUKT Basar's ${data.name}`}
        </h1>
        <section id="purpose">
          <h3 className="text-2xl font-semibold mb-2 break-words bg-green-900 w-fit text-white px-2">
            Purpose:
          </h3>
          <p className="break-words">{data.purPose}</p>
        </section>
      </div>
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4 bg-green-900 w-fit text-white px-2">
          Roles And Responsibilites
        </h2>
        <div className="mb-4">
          <ul className="list-disc list-inside">
            {rolesAndResponsibilities.map((eachrole) => (
              <li>{eachrole}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default CommitteeCard
