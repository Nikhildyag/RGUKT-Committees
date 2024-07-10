import React from "react";
import CampusAmentiesHeader from "./CampusAmentiesHeader";
import CampusAmentiesSidebar from "./CampusAmentiesSidebar";

const CampusAmenties = () => {
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <CampusAmentiesHeader name={"Academic Committee"} />
      <div className="flex w-full">
        <CampusAmentiesSidebar/>
        <div className="flex-1 p-6 sm:relative md:left-60 sm:left-0 z-[-1] ml-2">
          <div className="mb-8 w-full md:w-3/4 break-words px-3">
            <h1 className="text-3xl font-bold mb-4 mt-14 text-red-800">
              Welcome to RGUKT Basar's CampusAmenties Committee
            </h1>
            <section id="purpose">
              <h3 className="text-2xl font-semibold mb-2 break-words bg-green-900 w-fit text-white px-2">
                Purpose:
              </h3>
              <p className="break-words">
              The Campus Amenities Committee ensures the ongoing maintenance, upkeep, and enhancement of campus facilities. Dedicated to addressing issues related to infrastructure, classrooms, and common areas, the committee plans and oversees beautification projects while maintaining close collaboration with maintenance staff and administration for timely repairs and improvements.
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
                Ensure maintenance and upkeep of campus facilities.
                </li>
                <li>
                Address issues related to infrastructure, classrooms, and common areas.
                </li>
                <li>Address issues related to infrastructure, classrooms, and common areas.</li>
                <li>
                Liaise with maintenance staff and administration for timely repairs.
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CampusAmenties;


