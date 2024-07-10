import React from 'react'
import HostelHeader from './HostelHeader'
import HostelSidebar from './HostelSidebar'
import ProfileCard from '../../ProfileCard'
const HostelCentralAuthority = () => {
        const Data={name:'Mahesh',ImageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtIGVupSyE17k0s5mH43ut12XoKYUgKCi6bQ&s',Designation:'CentralAuthority',Qualification:'PHD',Branch:'CSE'}
        return (
            <div className="max-w-[100%] overflow-x-hidden text-wrap">
                <HostelHeader name={"Academic Committee"} />
                <div className="flex w-full">
                  <HostelSidebar />
                  <ProfileCard Data={Data}/>
                </div>
            </div>
        )
}

export default HostelCentralAuthority