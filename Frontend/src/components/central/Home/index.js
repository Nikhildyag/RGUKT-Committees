import React from 'react'

import CentralAuthoritySidebar from './CentralAuthoritySidebar'
import Header from './Header'

const index = () => {
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <Header />
      <div className="flex w-full">
        <CentralAuthoritySidebar />
      </div>
    </div>
  )
}

export default index
