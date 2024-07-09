import React from 'react'
import CommityHeader from '../../CommityHeader'
import { Link } from 'react-router-dom'

const Acadamic = () => {
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <CommityHeader />
      <div className="flex w-full">
        <div className="min-h-screen h-full sm:hidden md:block fixed top-0 lg:block xl:block w-2/12 bg-[#ece8e8] shadow-lg mt-14">
          <div className="overflow-y-auto h-full">
            <ul className="list-none px-4 py-5">
              <Link to="/academic">
                <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
                  Central Authority
                </li>
              </Link>
              <Link to="/campusamenties">
                <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
                  Faculty Incharge
                </li>
              </Link>
              <Link to="/mess">
                <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
                  Student Committee
                </li>
              </Link>
            </ul>
          </div>
        </div>

        <div className="flex-1 p-6 sm:relative md:left-60 sm:left-0 z-[-1] ml-2">
          <div className="mb-8 w-10/12 break-words">
            <h1 className="marquee text-3xl font-bold mb-4 mt-14 text-red-800">
              Welcome to RGUKT Basar's Academic Commity
            </h1>
            <section id="purpose">
              <h3 className="text-2xl font-semibold mb-2 break-words bg-green-900 w-fit text-white px-2">
                Purpose:
              </h3>
              <p className="break-words">
                The Academic Committee at RGUKT Basar is dedicated to ensuring
                academic excellence and fostering an environment that promotes
                intellectual growth and development among students. The
                committee is committed to continuously improving the academic
                framework, supporting students in their educational journey, and
                maintaining high standards of teaching and learning.
              </p>
            </section>
          </div>
          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 bg-green-900 w-fit text-white px-2">
              Roles And Responsibilites
            </h2>
            <div className="mb-4">
              <ul className="list-disc list-inside">
                <li>
                  Monitor academic performance and provide support to struggling
                  students.
                </li>
                <li>
                  Organize academic workshops, seminars, and guest lectures
                </li>
                <li>Collect feedback on courses and suggest improvements.</li>
                <li>
                  Coordinate with faculty on academic policies and curriculum
                  development.
                </li>
              </ul>
            </div>
          </section>
          <section
            id="centralauthority"
            className="flex flex-col w-[80%] items-center my-5 hover:bg-slate-300 hover:border-green-900"
          >
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl cursor-pointer">
              <img
                className="object-cover w-36 rounded-t-lg h-36 md:h-36 md:w-36 md:rounded-none md:rounded-s-lg px-2"
                src="https://www.rgukt.ac.in/assets/images/staff/srujana.jpg"
                alt="Faculty Img"
              />
              <div className="flex flex-col justify-between px-4 py-2 leading-normal w-[18em]">
                <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Mrs.Srujana
                </h1>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Faculty Incharge
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Qualifications
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Branch
                </p>
              </div>
            </div>
          </section>
          <section
            id="centralauthority"
            className="flex flex-col w-[80%] items-center my-5"
          >
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl cursor-pointer">
              <img
                className="object-cover w-36 rounded-t-lg h-36 md:h-36 md:w-36 md:rounded-none md:rounded-s-lg px-2"
                src="https://www.rgukt.ac.in/assets/images/staff/Mahesh_me.jpg"
                alt="Faculty Img"
              />
              <div className="flex flex-col justify-between px-4 py-2 leading-normal w-[18em]">
                <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Mr.Mahesh
                </h1>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Faculty Incharge
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Qualifications
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Branch
                </p>
              </div>
            </div>
          </section>
          <section className="flex sm:flex-col md:flex-row sm:items-center md:justify-between w-[80%] my-5 gap-2">
            <div>
              <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl cursor-pointer">
                <img
                  className="object-cover w-36 rounded-t-lg h-36 md:h-36 md:w-36 md:rounded-none md:rounded-s-lg px-2"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtIGVupSyE17k0s5mH43ut12XoKYUgKCi6bQ&s"
                  alt="Faculty Img"
                />
                <div className="flex flex-col justify-between px-4 py-2 leading-normal w-[18em]">
                  <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Nikhil
                  </h1>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Faculty Incharge
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Qualifications
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Branch
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl cursor-pointer">
                <img
                  className="object-cover w-36 rounded-t-lg h-36 md:h-36 md:w-36 md:rounded-none md:rounded-s-lg px-2"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtIGVupSyE17k0s5mH43ut12XoKYUgKCi6bQ&s"
                  alt="Faculty Img"
                />
                <div className="flex flex-col justify-between px-4 py-2 leading-normal w-[18em]">
                  <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Sathwika
                  </h1>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Faculty Incharge
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Qualifications
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Branch
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl cursor-pointer">
                <img
                  className="object-cover w-36 rounded-t-lg h-36 md:h-36 md:w-36 md:rounded-none md:rounded-s-lg px-2"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtIGVupSyE17k0s5mH43ut12XoKYUgKCi6bQ&s"
                  alt="Faculty Img"
                />
                <div className="flex flex-col justify-between px-4 py-2 leading-normal w-[18em]">
                  <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Ramesh
                  </h1>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Faculty Incharge
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Qualifications
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Branch
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl cursor-pointer">
                <img
                  className="object-cover w-36 rounded-t-lg h-36 md:h-36 md:w-36 md:rounded-none md:rounded-s-lg px-2"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtIGVupSyE17k0s5mH43ut12XoKYUgKCi6bQ&s"
                  alt="Faculty Img"
                />
                <div className="flex flex-col justify-between px-4 py-2 leading-normal w-[18em]">
                  <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Siddu
                  </h1>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Faculty Incharge
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Qualifications
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Branch
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Acadamic
