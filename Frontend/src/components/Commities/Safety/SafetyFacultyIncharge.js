import React from 'react'
import SafetyHeader from './SafetyHeader'
import SafetySidebar from './SafetySidebar'
import ProfileCard from '../../ProfileCard'

const  SafetyFacultyIncarge = () => {
        const Data={name:'Nikhil',ImageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtIGVupSyE17k0s5mH43ut12XoKYUgKCi6bQ&s',Designation:'Faculty Incarge',Qualification:'PHD',Branch:'CSE'}
        return (
            <div className="max-w-[100%] overflow-x-hidden text-wrap">
                <SafetyHeader name={"Academic Committee"} />
                <div className="flex w-full">
                <SafetySidebar />
                <ProfileCard Data={Data}/>
                </div>
            </div>
        )
}

export default  SafetyFacultyIncarge