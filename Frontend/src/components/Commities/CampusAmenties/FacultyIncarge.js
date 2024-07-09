import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import ProfileCard from '../../ProfileCard'

const FacultyIncarge = () => {
        const Data={name:'Nikhil',ImageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtIGVupSyE17k0s5mH43ut12XoKYUgKCi6bQ&s',Designation:'Faculty Incarge',Qualification:'PHD',Branch:'CSE'}
        return (
            <div className="max-w-[100%] overflow-x-hidden text-wrap">
                <Header name={"Academic Committee"} />
                <div className="flex w-full">
                <Sidebar />
                <ProfileCard Data={Data}/>
                </div>
            </div>
        )
}

export default FacultyIncarge