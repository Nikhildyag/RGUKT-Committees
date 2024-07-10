import React from "react";
import MessHeader from "./MessHeader.js";
import MessSidebar from "./MessSidebar.js";

const Acadamic = () => {
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <MessHeader name={"Academic Committee"} />
      <div className="flex w-full">
        <MessSidebar />
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
                "The Mess Advisory Committee is responsible for maintaining high
                standards of quality and hygiene in the campus mess or
                cafeteria. By gathering and acting on student feedback regarding
                food quality and menu preferences, the committee ensures a
                satisfactory dining experience. Promptly addressing complaints
                and collaborating closely with catering services, the committee
                strives to optimize and enhance food service operations
                across the campus."
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
                  Oversee quality and hygiene standards in the campus mess or
                  cafeteria.
                </li>
                <li>
                  Gather feedback on food quality and menu preferences from
                  students.
                </li>
                <li>Address complaints related to food service promptly.</li>
                <li>
                  Collaborate with catering services to ensure efficient
                  operations.
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
