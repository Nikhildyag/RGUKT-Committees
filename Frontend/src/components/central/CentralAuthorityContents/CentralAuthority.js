import React from 'react'
import Header from '../Home/Header'
import CentralAuthoritySidebar from '../Home/CentralAuthoritySidebar'
import CentralAuthorityProfileCard from '../ProfileCard/CentralAuthorityProfileCard'

const CentralAuthority = () => {
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <Header />
      <div className="flex w-full">
        <CentralAuthoritySidebar />

        <div className="relative md:left-40  lg:left-60 sm:left-0 z-[-1] flex flex-wrap justify-center items-center mt-10 md:w-[80%] sm:w-[100%]">
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-4">
            <CentralAuthorityProfileCard />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-4">
            <CentralAuthorityProfileCard />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-4">
            <CentralAuthorityProfileCard />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-4">
            <CentralAuthorityProfileCard />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-4">
            <CentralAuthorityProfileCard />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-4">
            <CentralAuthorityProfileCard />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-4">
            <CentralAuthorityProfileCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CentralAuthority
