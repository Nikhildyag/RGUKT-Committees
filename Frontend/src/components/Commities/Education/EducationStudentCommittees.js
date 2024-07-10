import React from 'react'
import EducationHeader from './EducationHeader'
import EducationSidebar from './EducationSidebar'
import ProfileCard from '../../ProfileCard'

const EducationStudentCommittee = () => {
        const Data={name:'Nikhil',ImageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtIGVupSyE17k0s5mH43ut12XoKYUgKCi6bQ&s',Designation:'Student Incharge',Qualification:'CHEM',Branch:'CSE'}
        return (
            <div className="max-w-[100%] overflow-x-hidden text-wrap">
                <EducationHeader name={"Academic Committee"} />
                <div className="flex w-full">
                <EducationSidebar />
               <div className='relative left-60'>
                 <div className='flex'>
                    <ProfileCard Data={Data} className="mr-5"/>
                    <ProfileCard Data={Data} className="mr-5"/>
                  </div>
                  <div className='flex'>
                    <ProfileCard Data={Data} className="mr-5"/>
                    <ProfileCard Data={Data} className="mr-5"/>
                  </div>
               </div>
                </div>
            </div>
        )
}

export default EducationStudentCommittee
