import React from 'react'
import Right from './Right'

const Company = () => {
  return (
    <section className=' pl-[20rem] bg-[#2E6E65] w- h-screen'>
    <div className='flex'>

      <div className=' w-[40rem] mt-[5rem] gap-14 grid  justify-center item-center'>
        <div>
        <p className='text-xl text-white  grid justify-center items-center pl-[5rem] '>To access this session, enter your</p>
        <p className='text-xl text-white  grid justify-center items-center pl-[5rem] '> CAC Identity Number</p>
        </div>
        

        <div className='grid gap-6 justify-center ml-5' >
          <div className='grid items-start '>
            <label className='text-white grid text-start py-2 text-lg'>Company Name</label>
            <input type='text' placeholder='Enter Company Name' className='w-[38rem] px-8 py-2 border-slate-200 placeholder-slate-500 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 '/>
          </div>
          <div className='grid items-start '>
            <label className='text-white grid text-start py-2 text-lg'>Address/Location</label>
            <input type='text' placeholder='Enter Company  Address' className='w-[38rem] px-8 py-2 border-slate-200 placeholder-slate-500 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 '/>
          </div>
          <div className='grid items-start '>
            <label className='text-white grid text-start py-2 text-lg'>Identification Number</label>
            <input type='text' placeholder='Enter Identification Number' className='w-[38rem] px-8 py-2 border-slate-200 placeholder-slate-500 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 '/>
          </div>

          <button className='w-[38rem] bg-[#FF9900] py-2 text-white font-medium text-lg  mt-4'>Submit</button>
        </div>
      </div>

      <div className='absolute left-[73rem]'>
       <Right />
      </div>
    </div>
  </section>
  )
}

export default Company
