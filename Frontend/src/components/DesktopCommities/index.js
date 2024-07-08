import React from 'react'
import { Link } from 'react-router-dom'

const  DesktopCommities= () => {
  return (
    <div className='min-h-screen h-full sm:hidden md:block lg:block xl:block w-52 bg-gray-800'>
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
        <h1 className='text-white text-[22px] pl-2 pt-2 font-serif font-bold'>
         Commities
        </h1>
        <div className='overflow-y-auto h-full'>
        <ul className='list-none'>
          <Link to="/commtiy1">
             <li className='m-2 list-none text-gray-100 cursor-pointer rounded-md'>Commity 1</li>
          </Link>
          <li className='m-2 list-none text-gray-100 cursor-pointer rounded-md'>Commity 2</li>
          <li className='m-2 list-none text-gray-100 cursor-pointer rounded-md'>Commity 3</li>
          <li className='m-2 list-none text-gray-100 cursor-pointer rounded-md'>Commity 4</li>
          <li className='m-2 list-none text-gray-100 cursor-pointer rounded-md'>Commity 5</li>
          <li className='m-2 list-none text-gray-100 cursor-pointer rounded-md'>Commity 6</li>
          <li className='m-2 list-none text-gray-100 cursor-pointer rounded-md'>Commity 7</li>
          <li className='m-2 list-none text-gray-100 cursor-pointer rounded-md'>Commity 8</li>
          <li className='m-2 list-none text-gray-100 cursor-pointer rounded-md'>Commity 9</li>
          <li className='m-2 list-none text-gray-100 cursor-pointer rounded-md'>Commity 10</li>
          <li className='m-2 list-none text-gray-100 cursor-pointer rounded-md'>Commity 11</li>
          <li className='m-2 list-none text-gray-100 cursor-pointer rounded-md'>Commity 12</li>
          <li className='m-2 list-none text-gray-100 cursor-pointer rounded-md'>Commity 13</li>
          <li className='m-2 list-none text-gray-100 cursor-pointer rounded-md'>Commity 14</li>
          <li className='m-2 list-none text-gray-100 cursor-pointer rounded-md'>Commity 15</li>
          <li className='m-2 list-none text-gray-100 cursor-pointer rounded-md'>Commity 16</li>
          <li className='m-2 list-none text-gray-100 cursor-pointer rounded-md'>Commity 17</li>
          <li className='m-2 list-none text-gray-100 cursor-pointer rounded-md'>Commity 18</li>
          <li className='m-2 list-none text-gray-100 cursor-pointer rounded-md'>Commity 19</li>
          <li className='m-2 list-none text-gray-100 cursor-pointer rounded-md'>Commity 20</li>
          <li className='m-2 list-none text-gray-100 cursor-pointer rounded-md'>Commity 21</li>
          <li className='m-2 list-none text-gray-100 cursor-pointer rounded-md'>Commity 22</li>
        </ul>
        </div>
    </div>
  )
}

export default DesktopCommities
