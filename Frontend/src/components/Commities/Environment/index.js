import React from "react";
import EnvironmentHeader from "./EnvironmentHeader";
import EnvironmentSidebar from "./EnvironmentSidebar";

const Environment = () => {
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <EnvironmentHeader name={"Academic Committee"} />
      <div className="flex w-full">
        <EnvironmentSidebar/>
        <div className="flex-1 p-6 sm:relative md:left-60 sm:left-0 z-[-1] ml-2">
          <div className="mb-8 w-full md:w-3/4 break-words px-3">
            <h1 className="text-3xl font-bold mb-4 mt-14 text-red-800">
              Welcome to RGUKT Basar's Environment/Sustainability Committee
            </h1>
            <section id="purpose">
              <h3 className="text-2xl font-semibold mb-2 break-words bg-green-900 w-fit text-white px-2">
                Purpose:
              </h3>
              <p className="break-words">
              The Environment/Sustainability Committee is dedicated to fostering environmental awareness and promoting sustainable practices within the campus community. By implementing waste reduction and recycling programs, organizing tree planting drives, and leading environmental clean-up campaigns, the committee actively contributes to campus sustainability efforts. Additionally, the committee advocates for eco-friendly policies and initiatives, aiming to create a greener and more sustainable campus environment for all.
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
              Promote environmental awareness and sustainability practices on campus.
                </li>
                <li>
                Implement waste reduction and recycling programs.
                </li>
                <li>Organize tree planting drives and environmental clean-up campaigns</li>
                <li>
                Advocate for eco-friendly policies and initiatives within the institution.
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Environment
