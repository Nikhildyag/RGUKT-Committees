import React from "react";
import AcademicHeader from "./AcademicHeader";
import AcademicSidebar from "./AcademicSidebar";
import CommitteeCard from "../CommitteeCard";

const cardData={name:'Academic Commity',purPose:'The Academic Committee at RGUKT Basar is dedicated to ensuring academic excellence and fostering an environment that promotes intellectual growth and development among students. The committee is committed to continuously improving the academic framework, supporting students in their educational journey, and maintaining high standards of teaching and learning',
            rolesAndResponsibilities:['Monitor academic performance and provide support to struggling students.','Organize academic workshops, seminars, and guest lectures','Collect feedback on courses and suggest improvements.','Coordinate with faculty on academic policies and curriculum development.']      
}
const Acadamic = () => {
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <AcademicHeader name={"Academic Committee"} />
      <div className="flex w-full">
        <AcademicSidebar/>
        <CommitteeCard data={cardData}/>
      </div>
    </div>
  );
};

export default Acadamic;
