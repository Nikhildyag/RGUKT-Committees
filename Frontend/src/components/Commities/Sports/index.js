import React from "react";
import SportsHeader from "./SportsHeader.js";
import SportsSidebar from "./SportsSidebar.js";

const Acadamic = () => {
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <SportsHeader name={"Academic Committee"} />
      <div className="flex w-full">
        <SportsSidebar />
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
                "The Sports Committee is committed to promoting a culture of
                physical fitness and sportsmanship among students. Through
                organizing inter-house and inter-college sports events, managing
                sports facilities and equipment, and identifying talent across
                various sports, the committee aims to foster a competitive yet
                supportive environment. By nurturing talent and encouraging
                participation, the committee plays a pivotal role in enhancing
                the overall well-being and sporting achievements of
                the student body."
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
                  Organize inter-house or inter-college sports events and
                  tournaments.
                </li>
                <li>Manage sports facilities and equipment.</li>
                <li>Identify and nurture talent in various sports.</li>
                <li>
                  Promote physical fitness and sportsmanship among students.
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
