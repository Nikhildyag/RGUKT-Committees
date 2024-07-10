import React from "react";
import PhotographyHeader from "./PhotographyHeader.js";
import PhotographySidebar from "./PhotographySidebar.js";

const Acadamic = () => {
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <PhotographyHeader name={"Academic Committee"} />
      <div className="flex w-full">
        <PhotographySidebar />
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
                "The Photography Committee is dedicated to capturing and
                documenting the vibrant essence of campus life through
                photography. By managing photography equipment and maintaining a
                comprehensive photo archive, the committee preserves memories of
                campus events, activities, and achievements. Additionally, the
                committee creates visual content for promotional materials and
                publications, showcasing the dynamic aspects of campus culture.
                Through exhibitions and online platforms, the committee shares
                compelling narratives that celebrate the diverse experiences and
                achievements within the campus community."
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
                  Capture and document campus events, activities, and
                  achievements.
                </li>
                <li>
                  Manage photography equipment and maintain a photo archive.
                </li>
                <li>
                  Create visual content for promotional materials and
                  publications.
                </li>
                <li>
                  Showcase campus life through photography exhibitions or online
                  platforms.{" "}
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
