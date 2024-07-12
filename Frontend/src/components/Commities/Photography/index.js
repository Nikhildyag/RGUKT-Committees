import React from "react";
import PhotographyHeader from "./PhotographyHeader.js";
import PhotographySidebar from "./PhotographySidebar.js";
import CommitteeCard from "../CommitteeCard";
const cardData={name:'Photography Committee',complaintForm:'/photographycommitteeform',purPose:'The Photography Committee is dedicated to capturing and documenting the vibrant essence of campus life through photography. By managing photography equipment and maintaining a comprehensive photo archive, the committee preserves memories of campus events, activities, and achievements. Additionally, the committee creates visual content for promotional materials and publications, showcasing the dynamic aspects of campus culture. Through exhibitions and online platforms, the committee shares compelling narratives that celebrate the diverse experiences and achievements within the campus community.',  rolesAndResponsibilities:[' Capture and document campus events, activities, and achievements.','Manage photography equipment and maintain a photo archive.','Create visual content for promotional materials and publications.','Showcase campus life through photography exhibitions or online platforms.']      
}
const Photography = () => {
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <PhotographyHeader name={"Academic Committee"} />
      <div className="flex w-full">
        <PhotographySidebar />
        <CommitteeCard data={cardData}/>
      </div>
    </div>
  );
};

export default Photography;
