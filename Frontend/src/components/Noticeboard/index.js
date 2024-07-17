import React from 'react'
import DesktopCommities from '../DesktopCommities'
import Header from '../Header'
import { Link } from 'react-router-dom'

const NoticeBoard = () => {
  return (
    <div className="flex flex-col h-screen overflow-x-hidden overflow-y-auto">
      <Header />
      <div className="flex flex-1 overflow-auto sm:max-w-full md:max-w-3/4 overflow-x-hidden">
        <DesktopCommities className="md:w-1/4 min-h-full overflow-auto sm:max-w-0 w-full inset-0" />
        <div className="flex-1 p-5 relative sm:left-0 lg:left-60 md:left-48">
          Hii Welcome to notice board section
        </div>
      </div>
    </div>
  )
}

export default NoticeBoard

