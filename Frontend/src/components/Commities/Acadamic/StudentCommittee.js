import React from 'react'
import AcademicHeader from './AcademicHeader'
import AcademicSidebar from './AcademicSidebar'
import ProfileCard from '../../ProfileCard'

const AcadamicStudentCommittee = () => {
  const Data = {
    name: 'Nikhil',
    ImageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtIGVupSyE17k0s5mH43ut12XoKYUgKCi6bQ&s',
    Designation: 'Student Incharge',
    Qualification: 'CHEM',
    Branch: 'CSE',
  }


//   const MakeApiCall=async()=>{
//     console.log("make the API call")
//     const url=`http://localhost:1024/api/v1/department//get/committemembers`
//     const object=JSON.stringify({committee_name:'Academic'});
//     const response = await fetch(url, {
//       method: "POST",
//       credentials: "include",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body:object,
//     }
//   );
//   console.log(response);
//   }
// useEffect(()=>{
//   MakeApiCall();
// },[])

  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <AcademicHeader name={'Academic Committee'} />
      <div className="flex w-full">
        <AcademicSidebar />
        <div className="relative md:left-40  lg:left-60 sm:left-0 z-[-1] flex flex-wrap justify-center items-center mt-10 md:w-[80%] sm:w-[100%]  ">
          <div className="mt-8 border border-[#c85cdb] rounded-md pb-4 lg:w-[80%] sm:w-[100%] sm:mx-8 lg:mx-0">
            <h1 className=" bg-[#c85cdb]  text-white text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl  text-center py-2">
              Computer Science and Engineering
            </h1>
            <div className="flex flex-wrap justify-center items-center  px-4">
              <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                <ProfileCard Data={Data} />
              </div>
              <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                <ProfileCard Data={Data} />
              </div>
              <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                <ProfileCard Data={Data} />
              </div>
              <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                <ProfileCard Data={Data} />
              </div>
            </div>
          </div>
          <div className="mt-8 border border-[#45d9b9] rounded-md pb-4 lg:w-[80%] sm:w-[100%] sm:mx-8 lg:mx-0">
            <h1 className="bg-[#45d9b9]  text-white text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl  text-center py-2">
              Electronics and Communications Engineering
            </h1>
            <div className="flex flex-wrap justify-center items-center px-4">
              <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                <ProfileCard Data={Data} />
              </div>
              <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                <ProfileCard Data={Data} />
              </div>
              <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                <ProfileCard Data={Data} />
              </div>
              <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                <ProfileCard Data={Data} />
              </div>
            </div>
          </div>
          <div className="mt-8 border border-[#eb692d] rounded-md pb-4 lg:w-[80%] sm:w-[100%] sm:mx-8 lg:mx-0">
            <h1 className=" bg-[#eb692d]  text-white text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl  text-center py-2">
              Electronical Engineering
            </h1>
            <div className="flex flex-wrap justify-center items-center px-4">
              <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                <ProfileCard Data={Data} />
              </div>
              <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                <ProfileCard Data={Data} />
              </div>
              <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                <ProfileCard Data={Data} />
              </div>
              <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                <ProfileCard Data={Data} />
              </div>
            </div>
          </div>
          <div className="mt-8 border border-[#bddc3f] rounded-md pb-4 lg:w-[80%] sm:w-[100%] sm:mx-8 lg:mx-0">
            <h1 className=" bg-[#bddc3f]  text-white text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl  text-center py-2">
              Civil Engineering
            </h1>
            <div className="flex flex-wrap justify-center items-center px-4">
              <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                <ProfileCard Data={Data} />
              </div>
              <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                <ProfileCard Data={Data} />
              </div>
              <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                <ProfileCard Data={Data} />
              </div>
              <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                <ProfileCard Data={Data} />
              </div>
            </div>
          </div>
          <div className="mt-8 border border-[#e33244] rounded-md pb-4 lg:w-[80%] sm:w-[100%] sm:mx-8 lg:mx-0">
            <h1 className=" bg-[#e33244]  text-white text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl  text-center py-2">
              Mechanical Engineering
            </h1>
            <div className="flex flex-wrap justify-center items-center px-4">
              <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                <ProfileCard Data={Data} />
              </div>
              <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                <ProfileCard Data={Data} />
              </div>
              <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                <ProfileCard Data={Data} />
              </div>
              <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                <ProfileCard Data={Data} />
              </div>
            </div>
          </div>
          <div className="mt-8 border border-[#1d4872] rounded-md pb-4 lg:w-[80%] sm:w-[100%] sm:mx-8 lg:mx-0">
            <h1 className=" bg-[#1d4872]  text-white text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl  text-center py-2">
              Chemical Engineering
            </h1>
            <div className="flex flex-wrap justify-center items-center px-4">
              <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                <ProfileCard Data={Data} />
              </div>
              <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                <ProfileCard Data={Data} />
              </div>
              <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                <ProfileCard Data={Data} />
              </div>
              <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                <ProfileCard Data={Data} />
              </div>
            </div>
          </div>
          <div className="mt-8 border border-[#e81791] rounded-md pb-4 lg:w-[80%] sm:w-[100%] sm:mx-8 lg:mx-0 mb-4">
            <h1 className=" bg-[#e81791]  text-white text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl  text-center py-2">
              Metallurgical and Material Engineering
            </h1>
            <div className="flex flex-wrap justify-center items-center px-4">
              <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                <ProfileCard Data={Data} />
              </div>
              <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                <ProfileCard Data={Data} />
              </div>
              <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                <ProfileCard Data={Data} />
              </div>
              <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                <ProfileCard Data={Data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AcadamicStudentCommittee
