import React from 'react'
import ExternaltHeader from './ExternalHeader'
import ExternalSidebar from './ExternalSidebar'
import ProfileCard from '../../ProfileCard'
const EnvironmentCentralAuthority = () => {
        const Data={name:'Mahesh',ImageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtIGVupSyE17k0s5mH43ut12XoKYUgKCi6bQ&s',Designation:'CentralAuthority',Qualification:'PHD',Branch:'CSE'}
        return (
            <div className="max-w-[100%] overflow-x-hidden text-wrap">
                <ExternaltHeader name={"Academic Committee"} />
                <div className="flex w-full">
                  <ExternalSidebar />
                  <ProfileCard Data={Data}/>
                </div>
            </div>
        )
}

export default EnvironmentCentralAuthority