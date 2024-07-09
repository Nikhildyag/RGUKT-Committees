import React from "react";
import ProfileCard from "../../ProfileCard";
import SportsSidebar from "./SportsSidebar.js";
import SportsHeader from "./SportsHeader.js";

const SportsCentralAuthority = () => {
  const Data = {
    name: "Mahesh",
    ImageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtIGVupSyE17k0s5mH43ut12XoKYUgKCi6bQ&s",
    Designation: "CentralAuthority",
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

export default SportsCentralAuthority;
