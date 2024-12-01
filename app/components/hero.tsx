import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (


    
    
    <div className='flex justify-between items-center pl-20 w-[1280px] h-[800px]'>
      <div className='w-[580px] h-[134px] gap-[24px]'> 
        <h1 className='font-bold font-roboto text-4xl mb-2  text-[56px] leading-[67.2px]'>Learn new skills</h1>
        <h1 className='font-bold font-roboto text-4xl mb-2  text-[56px] '>online with ease</h1>
      <div className='w-[580px] h-[81px] mt-12'>
        <p className=' font-roboto text-4xl mb-2  text-[18px] leading-[27px]'>Discover a wide range of courses covering a variety of </p>
        <p className=' font-roboto text-4xl mb-2  text-[18px] leading-[27px]'> subjects, taught by expert instructors. </p>
            
             </div>

             <div className='w-[208px] h-[64px] pt-[16px] gap-[16px] flex'>
             <button className='text-md mt-10 bg-black  pr-8 pl-8 rounded-md text-white h-[48px] w-[120px]'>Start learn</button>
             <button className='text-md mt-10 bg-white border-2 border-black text-black  pr-8 pl-8 rounded-md  h-[48px] w-[120px] text-center justify-center'>Explore Courses</button>
             
             </div>
      </div>
      
      <Image src="/main.svg" alt="hero-image" width={600} height={900} className='h-[400px] sm:h-[500px] md:h-[900px] pt-[45px]' />


      
    </div>
    
  )
}

export default Hero
