import React from "react";
import AcademicHeader from "./AcademicHeader";
import AcademicSidebar from "./AcademicSidebar";
import ProfileCard from "../../ProfileCard";

const AcadamicStudentCommittee = () => {
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
      <AcademicHeader name={"Academic Committee"} />
      <div className="flex w-full">
        <AcademicSidebar />
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

<<<<<<< HEAD
export default AcadamicStudentCommittee
=======
export default AcadamicStudentCommittee;
>>>>>>> fdf88d98c3e9b4bd4dab54e156be8556ee98aecd
