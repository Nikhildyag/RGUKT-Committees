import React, { useEffect, useState } from "react";
import CampusAmentiesHeader from "./CampusAmentiesHeader";
import CampusAmentiesSidebar from "./CampusAmentiesSidebar";
import ProfileCard from "../../ProfileCard";
import { BASE_URL } from "../../../helper";

const CampusAmentiesStudentCommittee = () => {
  const [students, setStudents] = useState([]);
  const [isDataReady, setIsdataready] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchStudentCommittees = async () => {
      setIsLoading(true);
      const data = {
        committee_name: "amenities",
      };
      const committee_details = JSON.stringify(data);
      try {
        const response = await fetch(
          `${BASE_URL}/api/v1/department/get/committeemembers`,
          {
            method: "POST",
            credentials: "include", // Include credentials (cookies)
            headers: {
              "Content-Type": "application/json",
            },
            body: committee_details,
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await response.json();
        setStudents(json.MembesArray);
        setIsLoading(false);
        setIsdataready(true);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };

    fetchStudentCommittees();
  }, []);
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <CampusAmentiesHeader name={"Academic Committee"} />
      <div className="flex w-full">
        <CampusAmentiesSidebar />
        {isDataReady && (
          <div className="relative md:left-40 lg:left-56 sm:left-0 z-[-1] flex flex-wrap justify-center items-center mt-10 md:w-[80%] sm:w-[100%]  ">
            <div className="mt-8 border border-[#c85cdb] rounded-md pb-4 lg:w-[80%] sm:w-[100%] sm:mx-8 lg:mx-0">
              <h1 className=" bg-[#c85cdb]  text-white text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl  text-center py-2">
                Computer Science and Engineering
              </h1>
              <div className="flex flex-wrap justify-center items-center  px-4">
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <ProfileCard Data={students[0]} />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <ProfileCard Data={students[1]} />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <ProfileCard Data={students[2]} />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <ProfileCard Data={students[3]} />
                </div>
              </div>
            </div>
            <div className="mt-8 border border-[#45d9b9] rounded-md pb-4 lg:w-[80%] sm:w-[100%] sm:mx-8 lg:mx-0">
              <h1 className="bg-[#45d9b9]  text-white text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl  text-center py-2">
                Electronics and Communications Engineering
              </h1>
              <div className="flex flex-wrap justify-center items-center px-4">
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <ProfileCard Data={students[4]} />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <ProfileCard Data={students[5]} />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <ProfileCard Data={students[6]} />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <ProfileCard Data={students[7]} />
                </div>
              </div>
            </div>
            <div className="mt-8 border border-[#eb692d] rounded-md pb-4 lg:w-[80%] sm:w-[100%] sm:mx-8 lg:mx-0">
              <h1 className=" bg-[#eb692d]  text-white text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl  text-center py-2">
                Electronical Engineering
              </h1>
              <div className="flex flex-wrap justify-center items-center px-4">
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <ProfileCard Data={students[8]} />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <ProfileCard Data={students[9]} />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <ProfileCard Data={students[10]} />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <ProfileCard Data={students[11]} />
                </div>
              </div>
            </div>
            <div className="mt-8 border border-[#bddc3f] rounded-md pb-4 lg:w-[80%] sm:w-[100%] sm:mx-8 lg:mx-0">
              <h1 className=" bg-[#bddc3f]  text-white text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl  text-center py-2">
                Mechanical Engineering
              </h1>
              <div className="flex flex-wrap justify-center items-center px-4">
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <ProfileCard Data={students[12]} />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <ProfileCard Data={students[13]} />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <ProfileCard Data={students[14]} />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <ProfileCard Data={students[15]} />
                </div>
              </div>
            </div>
            <div className="mt-8 border border-[#e33244] rounded-md pb-4 lg:w-[80%] sm:w-[100%] sm:mx-8 lg:mx-0">
              <h1 className=" bg-[#e33244]  text-white text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl  text-center py-2">
                Civil Engineering
              </h1>
              <div className="flex flex-wrap justify-center items-center px-4">
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <ProfileCard Data={students[16]} />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <ProfileCard Data={students[17]} />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <ProfileCard Data={students[18]} />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <ProfileCard Data={students[19]} />
                </div>
              </div>
            </div>
            <div className="mt-8 border border-[#1d4872] rounded-md pb-4 lg:w-[80%] sm:w-[100%] sm:mx-8 lg:mx-0">
              <h1 className=" bg-[#1d4872]  text-white text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl  text-center py-2">
                Metallurgical and Material Engineering
              </h1>
              <div className="flex flex-wrap justify-center items-center px-4">
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <ProfileCard Data={students[20]} />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <ProfileCard Data={students[21]} />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <ProfileCard Data={students[22]} />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <ProfileCard Data={students[23]} />
                </div>
              </div>
            </div>
            <div className="mt-8 border border-[#e81791] rounded-md pb-4 lg:w-[80%] sm:w-[100%] sm:mx-8 lg:mx-0 mb-4">
              <h1 className=" bg-[#e81791]  text-white text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl  text-center py-2">
                Chemical Engineering
              </h1>
              <div className="flex flex-wrap justify-center items-center px-4">
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <ProfileCard Data={students[24]} />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <ProfileCard Data={students[25]} />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <ProfileCard Data={students[26]} />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <ProfileCard Data={students[27]} />
                </div>
              </div>
            </div>
          </div>
        )}
        {isLoading && (
          <div role="status">
            <svg
              aria-hidden="true"
              class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CampusAmentiesStudentCommittee;
