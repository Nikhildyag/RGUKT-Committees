import React from "react";
import EducationHeader from "./EducationHeader";
import EducationSidebar from "./EducationSidebar";

const Education = () => {
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <EducationHeader name={"Academic Committee"} />
      <div className="flex w-full">
        <EducationSidebar/>
        <div className="flex-1 p-6 sm:relative md:left-60 sm:left-0 z-[-1] ml-2">
          <div className="mb-8 w-full md:w-3/4 break-words px-3">
            <h1 className="text-3xl font-bold mb-4 mt-14 text-red-800">
              Welcome to RGUKT Basar's Educational Opportunities Committee
            </h1>
            <section id="purpose">
              <h3 className="text-2xl font-semibold mb-2 break-words bg-green-900 w-fit text-white px-2">
                Purpose:
              </h3>
              <p className="break-words">
              The Educational Opportunities Committee is dedicated to empowering students by providing comprehensive information on scholarships, exchange programs, and study abroad opportunities. By assisting students in applying for external educational grants and funding, the committee aims to facilitate access to global learning experiences. Through organizing seminars and talks by experts in various fields and fostering collaboration with other educational institutions, the committee enriches students' academic journeys and broadens their horizons.
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
              Provide information on scholarships, exchange programs, and study abroad
              opportunities
                </li>
                <li>
                Assist students in applying for external educational grants and funding.
                </li>
                <li>Arrange seminars and talks by experts in various fields.</li>
                <li>
                Facilitate collaboration with other educational institutions.
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Education;
