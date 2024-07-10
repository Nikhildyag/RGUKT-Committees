import React from 'react'
import PlacementHeader from './PlacementHeader'
import PlacementSidebar from './PlacementSidebar'
import ProfileCard from '../../ProfileCard'
const PlacementCentralAuthority = () => {
        const Data={name:'Mahesh',ImageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtIGVupSyE17k0s5mH43ut12XoKYUgKCi6bQ&s',Designation:'CentralAuthority',Qualification:'PHD',Branch:'CSE'}
        return (
            <div className="max-w-[100%] overflow-x-hidden text-wrap">
                <PlacementHeader name={"Academic Committee"} />
                <div className="flex w-full">
                <PlacementSidebar />
                <ProfileCard Data={Data}/>
                </div>
            </div>
        )
}

export default PlacementCentralAuthority