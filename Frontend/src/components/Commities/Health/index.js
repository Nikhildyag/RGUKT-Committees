import React from "react";
import HealthHeader from "./HealthHeader.js";
import HealthSidebar from "./HealthSidebar.js";

const Acadamic = () => {
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <HealthHeader name={"Academic Committee"} />
      <div className="flex w-full">
        <HealthSidebar />
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
                "The Health Committee is committed to promoting holistic health
                and wellness initiatives among students. Through organizing
                health camps, workshops, and awareness programs, the committee
                aims to educate and empower students to prioritize their
                well-being. Providing first aid training and emergency medical
                assistance, the committee ensures prompt response to
                health-related incidents on campus. Collaborating with health
                professionals, the committee facilitates access to comprehensive
                campus health services, fostering a supportive environment that
                prioritizes the physical and mental well-being of students."
              </p>
            </section>
          </div>
          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 bg-green-900 w-fit text-white px-2">
              Roles And Responsibilites
            </h2>
            <div className="mb-4">
              <ul className="list-disc list-inside">
                <li>Promote health and wellness initiatives among students.</li>
                <li>
                  Organize health camps, workshops, and awareness programs.
                </li>
                <li>
                  Provide first aid training and emergency medical assistance.
                </li>
                <li>
                  Collaborate with health professionals for campus health
                  services.
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
