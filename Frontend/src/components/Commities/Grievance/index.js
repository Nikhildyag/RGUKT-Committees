import React from "react";
import GrievanceHeader from "./GrievanceHeader.js";
import GrievanceSidebar from "./GrievanceSidebar.js";

const Acadamic = () => {
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <GrievanceHeader name={"Academic Committee"} />
      <div className="flex w-full">
        <GrievanceSidebar />
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
                "The Grievance and Redressal Committee is committed to ensuring
                a fair and supportive campus environment by addressing
                grievances and complaints raised by students. Through prompt and
                impartial resolution of disputes and conflicts, the committee
                upholds confidentiality and advocates for institutional policies
                that promote fairness and justice. By fostering transparency and
                accountability, the committee aims to enhance trust and
                well-being within the campus community."
              </p>
            </section>
          </div>
          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 bg-green-900 w-fit text-white px-2">
              Roles And Responsibilites
            </h2>
            <div className="mb-4">
              <ul className="list-disc list-inside">
                <li>Address grievances and complaints raised by students. </li>
                <li>
                  Ensure fair and timely resolution of disputes and conflicts.
                </li>
                <li>
                  Maintain confidentiality and impartiality in handling
                  grievances.
                </li>
                <li>
                  Advocate for institutional policies that promote fairness and
                  justice.
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
