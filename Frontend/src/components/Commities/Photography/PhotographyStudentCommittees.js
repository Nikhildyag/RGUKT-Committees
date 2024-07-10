import React from "react";
import PhotographyHeader from "./PhotographyHeader";
import PhotographySidebar from "./PhotographySidebar";
import ProfileCard from "../../ProfileCard";

const PhotographyStudentCommittee = () => {
  const Data = {
    name: "Nikhil",
    ImageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtIGVupSyE17k0s5mH43ut12XoKYUgKCi6bQ&s",
    Designation: "Student Incharge",
    Qualification: "CHEM",
    Branch: "CSE",
  };
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <PhotographyHeader name={"Academic Committee"} />
      <div className="flex w-full">
        <PhotographySidebar />
        <div className="relative md:left-40  lg:left-60 sm:left-0 z-[-1] flex flex-wrap justify-center items-center mt-10 md:w-[80%] sm:w-[100%]">
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-4">
            <ProfileCard Data={Data} />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-4">
            <ProfileCard Data={Data} />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-4">
            <ProfileCard Data={Data} />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-4">
            <ProfileCard Data={Data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotographyStudentCommittee;
