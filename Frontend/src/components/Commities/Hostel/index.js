import React from "react";
import HostelHeader from "./HostelHeader.js";
import HostelSidebar from "./HostelSidebar.js";

const Acadamic = () => {
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <HostelHeader name={"Academic Committee"} />
      <div className="flex w-full">
        <HostelSidebar />
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
                "The Hostel Committee is dedicated to ensuring a comfortable and
                supportive living environment for resident students in campus
                hostels. By overseeing accommodation and facilities, addressing
                concerns related to maintenance, hygiene, and security, the
                committee strives to enhance the overall hostel experience.
                Organizing recreational activities and cultural events for
                residents fosters a sense of community and belonging. The
                committee also ensures adherence to hostel rules and
                regulations, promoting a safe and conducive environment
                for all residents."
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
                  Oversee hostel accommodation and facilities for resident
                  students.
                </li>
                <li>
                  Address concerns related to hostel maintenance, hygiene, and
                  security.
                </li>
                <li>
                  Organize recreational activities and cultural events for
                  hostel residents.
                </li>
                <li>Ensure adherence to hostel rules and regulations.</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Acadamic;
