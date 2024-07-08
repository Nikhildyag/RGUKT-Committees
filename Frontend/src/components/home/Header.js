import React from 'react'

const Header = () => {
  return (
    <div>
      <nav class="bg-[#4267B2]">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 bg-[#4267B2]">
          <div className="flex flex-row gap-2">
            <img
              src="https://hub.rgukt.ac.in/hub/static/images/logo.png"
              className="h-9 rounded-[50%]"
              alt="RGUKT Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap text-white ">
              TSAS
            </span>
          </div>
          <ul className="flex flex-row gap-5 text-white text-lg">
            <li className="hover:border hover:border-white hover:px-2">Home</li>
            <li className="hover:border hover:border-white hover:px-2">
              <select className="bg-[#4267B2]">
                <option className="text-white">Committees</option>
                <option className="text-white my-1">Academic</option>
                <option className="text-white my-1">Sports</option>
              </select>
            </li>
            <li className="hover:border hover:border-white hover:px-2">
              About us
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header
