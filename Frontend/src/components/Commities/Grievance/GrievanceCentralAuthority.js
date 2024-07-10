import React from 'react'
import GrievanceHeader from './GrievanceHeader'
import GrievanceSidebar from './GrievanceSidebar'
import ProfileCard from '../../ProfileCard'
const GrievanceCentralAuthority = () => {
        const Data={name:'Mahesh',ImageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtIGVupSyE17k0s5mH43ut12XoKYUgKCi6bQ&s',Designation:'CentralAuthority',Qualification:'PHD',Branch:'CSE'}
        return (
            <div className="max-w-[100%] overflow-x-hidden text-wrap">
                <GrievanceHeader name={"Academic Committee"} />
                <div className="flex w-full">
                  <GrievanceSidebar />
                  <ProfileCard Data={Data}/>
                </div>
            </div>
        )
}

export default GrievanceCentralAuthority