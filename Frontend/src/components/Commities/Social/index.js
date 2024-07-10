import React from "react";
import SocialHeader from "./SocialHeader.js";
import SocialSidebar from "./SocialSidebar.js";

const Acadamic = () => {
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <SocialHeader name={"Academic Committee"} />
      <div className="flex w-full">
        <SocialSidebar />
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
                "The Social Service Committee is dedicated to fostering a spirit
                of social responsibility among students through organizing
                community service projects, volunteer activities, and outreach
                programs. By raising awareness about social issues and
                partnering with NGOs and local communities, the committee
                promotes active student engagement in humanitarian efforts.
                Through its initiatives, the committee aims to cultivate
                empathy, leadership, and a commitment to making a positive
                impact on society."
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
                  Organize community service projects and volunteer activities.
                </li>
                <li>
                  Raise awareness about social issues and promote social
                  responsibility.
                </li>
                <li>
                  Partner with NGOs and local communities for outreach programs.{" "}
                </li>
                <li>Encourage student engagement in humanitarian efforts.</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Acadamic;
