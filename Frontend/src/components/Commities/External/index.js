import React from "react";
import ExternalHeader from "./ExternalHeader";
import ExternalSidebar from "./ExternalSidebar";
import CommitteeCard from "../CommitteeCard";

const cardData={name:'External Activities Committee',purPose:'The External Activities Committee plays a pivotal role in enhancing the institutions external engagement by coordinating participation in competitions, conferences, and events outside the campus. Responsible for managing logistics and travel arrangements for off-campus events, the committee ensures seamless representation of the institution at external forums and competitions. By cultivating partnerships with external organizations, the committee fosters collaborative initiatives that enrich students learning experiences and expand institutional outreach.',  rolesAndResponsibilities:['Coordinate participation in external competitions, conferences, and events.','Manage logistics for off-campus events and travel arrangements','Represent the institution at external forums and competitions.','Cultivate partnerships with external organizations for collaborative initiatives.']      
}
const External = () => {
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <ExternalHeader name={"Academic Committee"} />
      <div className="flex w-full">
        <ExternalSidebar/>
        <CommitteeCard data={cardData}/>
      </div>
    </div>
  );
};

export default  External
