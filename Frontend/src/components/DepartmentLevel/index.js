import DepartmentHeader from './DepartmentHeader'
import DepartmentSidebar from './DepartmentSidebar'
import ProfileCard from '../ProfileCard'
import DepartmentComplaints from './DepartmentComplaints'
import React, { useEffect } from 'react'
import Cookies from 'js-cookie'

const cardData = {
  name: 'Academic Commity',
  complaintForm: '/academiccommittefeedbackform',
  purPose:
    'The Academic Committee at RGUKT Basar is dedicated to ensuring academic excellence and fostering an environment that promotes intellectual growth and development among students. The committee is committed to continuously improving the academic framework, supporting students in their educational journey, and maintaining high standards of teaching and learning',
  rolesAndResponsibilities: [
    'Monitor academic performance and provide support to struggling students.',
    'Organize academic workshops, seminars, and guest lectures',
    'Collect feedback on courses and suggest improvements.',
    'Coordinate with faculty on academic policies and curriculum development.',
  ],
}

const Departments = () => {
  const getDepartmentMembersResult = async () => {
    const accessToken = Cookies.get('department_user_token')
    console.log('your cookes is ', accessToken)
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
    getDepartmentMembersResult()
  }, [])
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <DepartmentHeader />
      <div className="flex w-full">
        <DepartmentSidebar />
        <div className="w-[80%] ml-[18%] flex items-center">
          <DepartmentComplaints />
        </div>
      </div>
    </div>
  )
}

export default Departments
