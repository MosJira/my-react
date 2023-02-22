import React, { useState} from 'react'
import {HiMenuAlt3} from 'react-icons/hi'


const Nav = () => {
   const [nav, setNev] = useState (false)
   const handleNav = () => {
      setNev(!nav)
      if (!nav){
        document.body.style.overflow = 'hidden'
      }else{
        document.body.style.overflow = 'scroll' 
      }
   }
  return (
    <div className=' absolute top-0 left-0 w-full flex justify-between p-4 items-center'>
        <h1 className=' text-gray-50  font-bold text-2xl z-20 ' >setting</h1>
       < HiMenuAlt3 onClick={handleNav}  className='z-20 hover:text-red-400 text-white cursor-wait' size={25} />
            <div className={nav ? 'fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/50 z-10': ' absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10' }>
              <ul className=' absolute flex flex-col w-full top-[30%]'>
                <li className=' font-bold text-2xl p-8'>Home</li>
                <li className=' font-bold text-2xl p-8'>Destination</li>
                <li className=' font-bold text-2xl p-8'>amenities</li>
                <li className=' font-bold text-2xl p-8'>Rooms</li>
              </ul>
            </div>
    </div>
  )
}

export default Nav