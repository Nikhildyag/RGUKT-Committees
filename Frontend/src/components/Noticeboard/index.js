import React, { useEffect, useState } from 'react'
import DesktopCommities from '../DesktopCommities'
import Header from '../Header'



const NoticeBoard = () => {
    const [notices, setNotices] = useState([]);

    const fetchNotices = async () => {
        const url = "http://localhost:1024/api/v1/notices/get/notices";
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type':'application/json',
                },
                credentials:'include',
            })
            if (!response.ok) {
                throw new Error( "Error is the response");
            }
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchNotices();
    }, []);
  return (
    <div className="flex flex-col h-screen overflow-x-hidden overflow-y-auto">
      <Header />
      <div className="flex flex-1 overflow-auto sm:max-w-full md:max-w-3/4 overflow-x-hidden">
        <DesktopCommities className="md:w-1/4 min-h-full overflow-auto sm:max-w-0 w-full inset-0" />
        <div className="flex-1 p-5 relative sm:left-0 lg:left-60 md:left-48">
             <h1 className='ml-2 font-bold text-green-500 text-[25px] font-serif'>Notice Board</h1>
        </div>
      </div>
    </div>
  )
}

export default NoticeBoard

