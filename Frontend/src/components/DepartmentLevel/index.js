
import React, { useEffect } from 'react';
import DepartmentHeader from './DepartmentHeader';
import DepartmentSidebar from './DepartmentSidebar';
import ProfileCard from '../ProfileCard'
import Cookies from 'js-cookie'

const cardData = { fullName: 'Academic Commity', department: 'CSE' }
const Departments = () => {

  const getDepartmentMembersResult = async () => {
    const accessToken = Cookies.get('department_user_token');
    console.log("your cookes is ",accessToken)
    const url = 'http://localhost:1024/api/v1/department/login'
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: '',
    })
    const data = await response.json()
    if (response.ok === true) {
      console.log(response.accessToken)
    } else {
      console.log(response.errorMessage)
      console.log(response.ok)
    }
  }
  useEffect(() => {
    getDepartmentMembersResult();
  },[])
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <DepartmentHeader />
      <div className="flex w-full">
            <DepartmentSidebar />
             <ProfileCard Data={cardData}/>
       </div> 
    </div>
  );
};

export default Departments;

