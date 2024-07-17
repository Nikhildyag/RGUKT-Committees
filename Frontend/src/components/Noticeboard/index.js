import React, { useEffect, useState } from 'react'
import DesktopCommities from '../DesktopCommities'
import Header from '../Header'
import { FaPlus } from 'react-icons/fa'

const NoticeBoard = () => {
  const [notices, setNotices] = useState([])
  const [noticeReady, setNoticeReady] = useState(false)
  const [showDescriptionIndex, setShowDescriptionIndex] = useState(null)

  const fetchNotices = async () => {
    const url = 'http://localhost:1024/api/v1/notices/get/notices'
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      })
      if (!response.ok) {
        throw new Error('Error in the response')
      }
      const data = await response.json()
      setNotices(data.notices)
      setNoticeReady(true)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchNotices()
  }, [])

  const toggleDescription = (index) => {
    setShowDescriptionIndex(showDescriptionIndex === index ? null : index)
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()
    return `${day}/${month}/${year}`
  }

  return (
    <div className="flex flex-col h-screen overflow-x-hidden overflow-y-auto">
      <Header />
      <div className="flex flex-1 overflow-auto sm:max-w-full md:max-w-3/4 overflow-x-hidden">
        <DesktopCommities className="md:w-1/4 min-h-full overflow-auto sm:max-w-0 w-full inset-0" />
        <div className="flex-1 p-5 relative sm:left-0 lg:left-[20%] md:left-[30%]">
          <h1 className="ml-2 font-bold text-blue-500 text-[25px]">
            Notice Board
          </h1>
          <div className="pb-10">
            {noticeReady &&
              notices.map((notice, index) => {
                const isNewNotice = index < 5

                return (
                  <div
                    key={index}
                    className={`lg:w-[75%] md:w-[60%] px-4 py-1 shadow-lg border border-gray-200 my-4 ${
                      index === notices.length - 1 ? 'mb-4' : ''
                    }`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex flex-row  gap-1 py-2 text-sm sm:text-base md:text-md lg:text-md">
                        <p className="text-red-900">
                          {formatDate(notice.createdAt)}:
                        </p>
                        <p className="text-blue-500 capitalize">
                          {notice.committee_name} Committee:{' '}
                          <span>{notice.subject}</span>
                        </p>
                      </div>
                      <div className="flex flex-row gap-4 ml-1">
                        {isNewNotice && (
                          <img
                            src="https://hub.rgukt.ac.in/hub/static/images/new3.gif"
                            className="md:w-10 md:h-5 sm:w-6 sm:h-4 mt-1"
                            alt="new notice"
                          />
                        )}
                        <button
                          onClick={() => toggleDescription(index)}
                          className="text-blue-500 hover:text-blue-700 focus:outline-none"
                        >
                          <FaPlus className="inline-block align-text-top sm:mr-4" />
                        </button>
                      </div>
                    </div>

                    {/* Display description conditionally */}
                    {showDescriptionIndex === index && (
                      <p>Description: {notice.description}</p>
                    )}
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoticeBoard
