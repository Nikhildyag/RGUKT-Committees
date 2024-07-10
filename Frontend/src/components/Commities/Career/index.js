import React from "react";
import CareerHeader from "./CareerHeader";
import CareerSidebar from "./CareerSidebar";

const Career = () => {
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <CareerHeader name={"Academic Committee"} />
      <div className="flex w-full">
        <CareerSidebar/>
        <div className="flex-1 p-6 sm:relative md:left-60 sm:left-0 z-[-1] ml-2">
          <div className="mb-8 w-full md:w-3/4 break-words px-3">
            <h1 className="text-3xl font-bold mb-4 mt-14 text-red-800">
              Welcome to RGUKT Basar's Career Guidance Committee
            </h1>
            <section id="purpose">
              <h3 className="text-2xl font-semibold mb-2 break-words bg-green-900 w-fit text-white px-2">
                Purpose:
              </h3>
              <p className="break-words">
              The Career Guidance Committee is dedicated to empowering students by organizing career counseling sessions, workshops, and providing valuable information on job opportunities, internships, and higher education prospects. Through tailored support in resume writing, interview skills, and networking strategies, the committee aims to enhance students' career readiness. Additionally, maintaining a comprehensive alumni database fosters valuable networking opportunities for current students.
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
                Organize cultural events, festivals, and competitions.
                </li>
                <li>
                Showcase talent through music, dance, drama, and literary activities.
                </li>
                <li>Celebrate diversity and cultural heritage within the campus community.</li>
                <li>
                  Foster a sense of inclusivity and cultural exchange
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Career;






 
