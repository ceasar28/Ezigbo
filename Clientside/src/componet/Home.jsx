import React from 'react'
import IMG1 from '../Asset/amico2.png'

const Home = () => {
  return (
    <section id="home" className="min-h-screen bg-[#E6F3EA] flex py-10 md:flex-row grid-col-2 items-center justify-center">
      <div className='grid justify-center items-center w-[80rem]'>
      <div className='max-w-full mx-auto grid md:grid-cols-2 gap-16 px-20 justify-center items-center  pt-[5rem]'>
      <div className='md:w-[40rem]'>
        <h1 className='md:font-bold text-2xl text-start'>The decentralized power of the blockchain to combat and eradicate conterfeit product.</h1>
        <p className='md:pt-4 text-start'>The rise in sale of counterfeit product in Africa has become an overwhelming problem. In Nigeria alone, NAFDAC in 2002 found that nearly 41% of pharmaceuticals were counterfeit, and 70% were unregistered. Though there have been efforts to combat the presence of counterfeit drugs, the amount of fake drugs sold remains high</p>
      </div>
        <img src={IMG1}  alt='' className="md:w-[30rem] h-[25rem] object-contain"/>
      </div>
      <button className='flex items-center justify-center ml-20 bg-gradient-to-r from-cyan-500 to-blue-500  w-[10rem] h-[3rem] text-white font-semibold rounded-md text-center'>Get Stared</button>
      </div>
    </section>
  )
}

export default Home
