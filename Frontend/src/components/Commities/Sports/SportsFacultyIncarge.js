import React from "react";
import ProfileCard from "../../ProfileCard";
import SportsHeader from "./SportsHeader.js";
import SportsSidebar from "./SportsSidebar.js";

const SportsFacultyIncarge = () => {
  const Data = {
    name: "Nikhil",
    ImageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtIGVupSyE17k0s5mH43ut12XoKYUgKCi6bQ&s",
    Designation: "Faculty Incarge",
    Qualification: "PHD",
    Branch: "CSE",
  };
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <SportsHeader name={"Academic Committee"} />
      <div className="flex w-full">
        <SportsSidebar />
        <ProfileCard Data={Data} />
      </div>
    </div>
  );
};

export default SportsFacultyIncarge;
