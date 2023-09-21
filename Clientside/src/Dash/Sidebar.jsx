import React, {useState} from 'react'
import IMG from '../Asset/Logo.png'
import {link} from '../data'
import { NavLink } from 'react-router-dom'


const Sidebar = () => {

  const [ open , setOpen ] =useState(true);
    const toggle = () => setOpen (!open);    

  return (
   <div style={{width: open ? "250px" : "90px"}}  className='w-[200px] h-screen bg-[#f2f2f2] p-8 fixed z-99 '>
      <div className='flex items-center gap-3'>
        <img src={IMG} alt='' className='w-[3rem] ' onClick={toggle} />
        <h1 style={{display: open ? "block" : "none"}} className='font-semibold text-lg'>EZIGBO</h1>
      </div>

      <div className='mt-[5rem] grid gap-10'>
     {
      link.map((item, index)=>(
        <NavLink to={item.path} key={index} className='grid items-center justify-center text-center '>
          <div className='grid justify-center bg-[#ffffff72] p-2 rounded-md '>{item.icon}</div>
          <div style={{display: open ? "block" : "none"}} className='active'>{item.name}</div>
        </NavLink>
      ))
     }
     </div>


   </div>
  )
}

export default Sidebar



