
import React from 'react';
import DepartmentHeader from './DepartmentHeader';
import DepartmentSidebar from './DepartmentSidebar';
import ProfileCard from '../ProfileCard'

const cardData={name:'Academic Commity',complaintForm:'/academiccommittefeedbackform',purPose:'The Academic Committee at RGUKT Basar is dedicated to ensuring academic excellence and fostering an environment that promotes intellectual growth and development among students. The committee is committed to continuously improving the academic framework, supporting students in their educational journey, and maintaining high standards of teaching and learning',
            rolesAndResponsibilities:['Monitor academic performance and provide support to struggling students.','Organize academic workshops, seminars, and guest lectures','Collect feedback on courses and suggest improvements.','Coordinate with faculty on academic policies and curriculum development.']      
}
const Departments = () => {
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <DepartmentHeader />
      <div className="flex w-full">
            <DepartmentSidebar />
       </div> 
    </div>
  );
};

export default Departments;

