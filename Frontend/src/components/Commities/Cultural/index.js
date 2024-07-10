import React from "react";
import CulturalHeader from "./CulturalHeader";
import CulturalSidebar from "./CulturalSidebar";

const Cultural = () => {
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <CulturalHeader name={"Academic Committee"} />
      <div className="flex w-full">
        <CulturalSidebar/>
        <div className="flex-1 p-6 sm:relative md:left-60 sm:left-0 z-[-1] ml-2">
          <div className="mb-8 w-full md:w-3/4 break-words px-3">
            <h1 className="text-3xl font-bold mb-4 mt-14 text-red-800">
              Welcome to RGUKT Basar's Cultural Committee
            </h1>
            <section id="purpose">
              <h3 className="text-2xl font-semibold mb-2 break-words bg-green-900 w-fit text-white px-2">
                Purpose:
              </h3>
              <p className="break-words">
              The Cultural Committee is dedicated to enriching campus life through vibrant cultural events, festivals, and competitions that showcase student talent in music, dance, drama, and literary activities. By celebrating diversity and cultural heritage, the committee fosters inclusivity and cultural exchange within the campus community. Through its initiatives, the committee aims to create memorable experiences that promote artistic expression and unity among students.
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

export default Cultural;

