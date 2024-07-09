import React from 'react'
import CareerHeader from './CareerHeader'
import CareerSidebar from './CareerSidebar'
import ProfileCard from '../../ProfileCard'

const CareerFacultyIncarge = () => {
        const Data={name:'Nikhil',ImageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtIGVupSyE17k0s5mH43ut12XoKYUgKCi6bQ&s',Designation:'Faculty Incarge',Qualification:'PHD',Branch:'CSE'}
        return (
            <div className="max-w-[100%] overflow-x-hidden text-wrap">
                <CareerHeader name={"Academic Committee"} />
                <div className="flex w-full">
                <CareerSidebar />
                <ProfileCard Data={Data}/>
                </div>
            </div>
        )
}

export default CareerFacultyIncarge