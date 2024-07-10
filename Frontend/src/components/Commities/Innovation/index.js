import React from "react";
import InnovationHeader from "./InnovationHeader.js";
import InnovationSidebar from "./InnovationSidebar.js";

const Acadamic = () => {
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <InnovationHeader name={"Academic Committee"} />
      <div className="flex w-full">
        <InnovationSidebar />
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
                "The Innovation and Incubation Committee aims to cultivate a
                culture of innovation and entrepreneurship among students. By
                providing support and resources for student-led startups and
                projects, the committee nurtures entrepreneurial aspirations.
                Organizing workshops, hackathons, and innovation challenges
                stimulates creative thinking and problem-solving skills.
                Facilitating collaboration with industry mentors and investors,
                the committee bridges the gap between academia and industry,
                empowering students to turn innovative ideas into
                viable ventures."
              </p>
            </section>
          </div>
          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 bg-green-900 w-fit text-white px-2">
              Roles And Responsibilites
            </h2>
            <div className="mb-4">
              <ul className="list-disc list-inside">
                <li>Foster innovation and entrepreneurship among students.</li>
                <li>
                  Provide support and resources for student-led startups and
                  projects.
                </li>
                <li>
                  Organize workshops, hackathons, and innovation challenges.{" "}
                </li>
                <li>
                  Facilitate collaboration with industry mentors and investors.
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
