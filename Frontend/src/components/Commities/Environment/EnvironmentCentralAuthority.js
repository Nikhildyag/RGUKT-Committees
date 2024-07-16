import React, { useEffect, useState } from "react";
import ProfileCard from "../../ProfileCard";
import EnvironmentHeader from "./EnvironmentHeader";
import EnvironmentSidebar from "./EnvironmentSidebar";

const CentralAuthority = () => {
  const [students, setStudents] = useState([]);
  const [isDataReady, setIsdataready] = useState(false);
  useEffect(() => {
    const fetchCentralCommittees = async () => {
      const data = {
        committee_name: "environment",
      };
      const committee_details = JSON.stringify(data);
      try {
        const response = await fetch(
          "http://localhost:1024/api/v1/central/get/centralcommitteemembers",
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
        setStudents(json.MembersArray);
        //console.log(students);
        setIsdataready(true);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCentralCommittees();
  }, []);
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <EnvironmentHeader />
      <div className="flex w-full">
        <EnvironmentSidebar />
        {isDataReady && (
          <div className="relative md:left-40  lg:left-60 sm:left-0 z-[-1] flex flex-wrap justify-center items-center mt-10 md:w-[80%] sm:w-[100%]">
            <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-4">
              <ProfileCard Data={students[0]} />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-4">
              <ProfileCard Data={students[1]} />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-4">
              <ProfileCard Data={students[2]} />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-4">
              <ProfileCard Data={students[3]} />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-4">
              <ProfileCard Data={students[4]} />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-4">
              <ProfileCard Data={students[5]} />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-4">
              <ProfileCard Data={students[6]} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CentralAuthority;
