import React from "react";
import CampusGreeningHeader from "./CampusGreeningHeader";
import CampusGreeningSidebar from "./CampusGreeningSidebar";

const CampusGreening = () => {
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <CampusGreeningHeader name={"Academic Committee"} />
      <div className="flex w-full">
        <CampusGreeningSidebar/>
        <div className="flex-1 p-6 sm:relative md:left-60 sm:left-0 z-[-1] ml-2">
          <div className="mb-8 w-full md:w-3/4 break-words px-3">
            <h1 className="text-3xl font-bold mb-4 mt-14 text-red-800">
              Welcome to RGUKT Basar's CampusGreening Committee
            </h1>
            <section id="purpose">
              <h3 className="text-2xl font-semibold mb-2 break-words bg-green-900 w-fit text-white px-2">
                Purpose:
              </h3>
              <p className="break-words">
                The Academic Committee at RGUKT Basar is dedicated to ensuring
                academic excellence and fostering an environment that promotes
                intellectual growth and development among students. The
                committee is committed to continuously improving the academic
                framework, supporting students in their educational journey, and
                maintaining high standards of teaching and learning.
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
                  Monitor academic performance and provide support to struggling
                  students.
                </li>
                <li>
                  Organize academic workshops, seminars, and guest lectures
                </li>
                <li>Collect feedback on courses and suggest improvements.</li>
                <li>
                  Coordinate with faculty on academic policies and curriculum
                  development.
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CampusGreening;





