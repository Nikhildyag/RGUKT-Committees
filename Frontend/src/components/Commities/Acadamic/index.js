import React from 'react'
import CommityHeader from '../../CommityHeader'
import { Link } from 'react-router-dom'

const Acadamic = () => {
  return (
    <>
    <CommityHeader/>
    <div className='flex'>
      <div className='min-h-screen h-full sm:hidden md:block fixed top-0  lg:block xl:block w-56 bg-gray-800'>
        <div className="flex flex-row gap-2">
          <img
            src="https://hub.rgukt.ac.in/hub/static/images/logo.png"
            className="h-9 mt-2 ml-3 rounded-full"
            alt="RGUKT Logo"
          />
          <span className="text-white text-[22px] pl-2 pt-2 font-serif font-bold">
          Acadamic Commity
        </span>
        </div>
        <div className="overflow-y-auto h-full">
          <ul className="list-none px-2 py-5">
            <Link to="/academic">
              <li className="m-2 list-none hover:bg-blue-200  truncate hover:text-black text-gray-100 cursor-pointer rounded-md">
              Central Authority
              </li>
            </Link>
            <Link to="/campusamenties">
              <li className="m-2 list-none hover:bg-blue-200 truncate hover:text-black text-gray-100 cursor-pointer rounded-md">
              Faculty Incharge
              </li>
            </Link>
            <li className="m-2 list-none hover:bg-blue-200 truncate hover:text-black text-gray-100 cursor-pointer rounded-md">
              Students Commity
              </li>
          </ul>
        </div>
      </div>
        <div className="flex-1 p-6 sm:relative md:left-60 sm:left-0 z-[-1] ">
          <div className="mb-8 ">
            <h1 className="marquee text-3xl font-bold mb-4">
              Welcome to RGUKT Basar's Acadamic Commity
            </h1>
          <section className='' id='purpose'>
          <h3 className="text-2xl font-semibold mb-2">Purpose:</h3>
           <p>
             The Academic Committee at RGUKT Basar is dedicated to ensuring academic excellence and fostering an environment that promotes intellectual growth and development among students. The committee is committed to continuously improving the academic framework, supporting students in their educational journey, and maintaining high standards of teaching and learning.
           </p>
          </section>
          </div>
          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Roles And Responsibilites</h2> 
            <div className="mb-4">
              <ul className="list-disc list-inside">
                <li>Monitor academic performance and provide support to struggling students.</li>
                <li>Organize academic workshops, seminars, and guest lectures</li>
                <li>Collect feedback on courses and suggest improvements.</li>
                <li>Coordinate with faculty on academic policies and curriculum development.</li>
              </ul>
            </div>
          </section>
          <section id='centralauthority' className='flex flex-col w-[80%] items-center'> 
              <img src='https://www.rgukt.ac.in/assets/images/staff/srujana.jpg' alt='' className='rounded-[50%] h-24 w-24'/> 
              <h1 className='text-2xl font-semibold'>Srujana Madam</h1>
              <h2 className='text-xl font-medium'>Central Authority</h2>
              <p>Qualifications</p>
              <p>Branch</p>
          </section>
          <section id='centralauthority' className='flex flex-col w-[80%] items-center'> 
              <img src='https://www.rgukt.ac.in/assets/images/staff/srujana.jpg' alt='' className='rounded-[50%] h-24 w-24'/> 
              <h1 className='text-2xl font-semibold'>Mahesh sir</h1>
              <h2 className='text-xl font-medium'>faculty incarge</h2>
              <p>Qualifications</p>
              <p>Branch</p>
          </section>
          <section className='flex sm:flex-col md:flex-row sm:items-center md:justify-between w-[80%]'>
            <div>
            <img src='https://www.rgukt.ac.in/assets/images/staff/srujana.jpg' alt='' className='rounded-[50%] h-24 w-24'/> 
              <h1 className='text-2xl font-semibold'>Mahesh sir</h1>
              <h2 className='text-xl font-medium'>faculty incarge</h2>
              <p>Qualifications</p>
              <p>Branch</p>
            </div>
            <div>
            <img src='https://www.rgukt.ac.in/assets/images/staff/srujana.jpg' alt='' className='rounded-[50%] h-24 w-24'/> 
              <h1 className='text-2xl font-semibold'>Mahesh sir</h1>
              <h2 className='text-xl font-medium'>faculty incarge</h2>
              <p>Qualifications</p>
              <p>Branch</p>
            </div>
            <div>
            <img src='https://www.rgukt.ac.in/assets/images/staff/srujana.jpg' alt='' className='rounded-[50%] h-24 w-24'/> 
              <h1 className='text-2xl font-semibold'>Mahesh sir</h1>
              <h2 className='text-xl font-medium'>faculty incarge</h2>
              <p>Qualifications</p>
              <p>Branch</p>
            </div>
            <div>
            <img src='https://www.rgukt.ac.in/assets/images/staff/srujana.jpg' alt='' className='rounded-[50%] h-24 w-24'/> 
              <h1 className='text-2xl font-semibold'>Mahesh sir</h1>
              <h2 className='text-xl font-medium'>faculty incarge</h2>
              <p>Qualifications</p>
              <p>Branch</p>
            </div>
          </section>
        </div>
    </div>
    </>
  )
}
export default Acadamic