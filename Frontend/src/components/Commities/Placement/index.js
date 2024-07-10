import React from "react";
import PlacementHeader from "./PlacementHeader.js";
import PlacementSidebar from "./PlacementSidebar.js";

const Acadamic = () => {
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <PlacementHeader name={"Academic Committee"} />
      <div className="flex w-full">
        <PlacementSidebar />
        <div className="flex-1 p-6 sm:relative md:left-60 sm:left-0 z-[-1] ml-2">
          <div className="mb-8 w-full md:w-3/4 break-words px-3">
            <h1 className="text-3xl font-bold mb-4 mt-14 text-red-800">
              Welcome to RGUKT Basar's Academic Commity
            </h1>
            <section id="purpose">
              <h3 className="text-2xl font-semibold mb-2 break-words bg-green-900 w-fit text-white px-2">
                Purpose:
              </h3>
              <p className="break-words">
                "The Placement and Internship Committee is dedicated to
                facilitating career opportunities for students through campus
                placements and internships. By coordinating with industries and
                companies for recruitment drives, the committee connects
                students with prospective employers. Offering career counseling,
                resume-building workshops, and maintaining a comprehensive
                database of job opportunities and internship openings, the
                committee equips students with the necessary skills and
                resources to succeed in their professional endeavors."
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
                  Facilitate campus placements and internships for students.
                </li>
                <li>
                  Coordinate with industries and companies for recruitment
                  drives.
                </li>
                <li>Offer career counseling and resume-building workshops.</li>
                <li>
                  Maintain a database of job opportunities and internship
                  openings.
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Acadamic;
