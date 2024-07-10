import React from "react";
import ExternalHeader from "./ExternalHeader";
import ExternalSidebar from "./ExternalSidebar";

const External = () => {
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <ExternalHeader name={"Academic Committee"} />
      <div className="flex w-full">
        <ExternalSidebar />
        <div className="flex-1 p-6 sm:relative md:left-60 sm:left-0 z-[-1] ml-2">
          <div className="mb-8 w-full md:w-3/4 break-words px-3">
            <h1 className="text-3xl font-bold mb-4 mt-14 text-red-800">
              Welcome to RGUKT Basar's External Activities Committee
            </h1>
            <section id="purpose">
              <h3 className="text-2xl font-semibold mb-2 break-words bg-green-900 w-fit text-white px-2">
                Purpose:
              </h3>
              <p className="break-words">
                The External Activities Committee plays a pivotal role in
                enhancing the institution's external engagement by coordinating
                participation in competitions, conferences, and events outside
                the campus. Responsible for managing logistics and travel
                arrangements for off-campus events, the committee ensures
                seamless representation of the institution at external forums
                and competitions. By cultivating partnerships with external
                organizations, the committee fosters collaborative initiatives
                that enrich students' learning experiences and expand
                institutional outreach.
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
                  Coordinate participation in external competitions,
                  conferences, and events.
                </li>
                <li>
                  Manage logistics for off-campus events and travel arrangements
                </li>
                <li>
                  Represent the institution at external forums and competitions.
                </li>
                <li>
                  Cultivate partnerships with external organizations for
                  collaborative initiatives.
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default External;
