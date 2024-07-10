import React from 'react'
import MessHeader from './MessHeader'
import MessSidebar from './MessSidebar'
import ProfileCard from '../../ProfileCard'
const MessCentralAuthority = () => {
        const Data={name:'Mahesh',ImageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtIGVupSyE17k0s5mH43ut12XoKYUgKCi6bQ&s',Designation:'CentralAuthority',Qualification:'PHD',Branch:'CSE'}
        return (
            <div className="max-w-[100%] overflow-x-hidden text-wrap">
                <MessHeader name={"Academic Committee"} />
                <div className="flex w-full">
                  <MessSidebar />
                  <ProfileCard Data={Data}/>
                </div>
            </div>
        )
}

export default MessCentralAuthority