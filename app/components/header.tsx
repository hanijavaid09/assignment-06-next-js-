import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div>
       
      
      
      <div className='bg-[#F7F7F7] flex pl-20 items-center border-2 border-black-500 w-[1280px] 
      h-[54px]'>
      Phone Number : 956 742 455 678  │ Email: info@ddsgnr.com
      <div className='flex pl-96'>
             <Image
        src="/fb.png"
        alt="image"
        height={10}
        width={50}
className='h-8  pl-4'
      />

<Image
        src="/insta.png"
        alt="image"
        height={10}
        width={50}
className='h-8  pl-4'
      />

<Image
        src="/twitter.png"
        alt="image"
        height={10}
        width={50}
className='h-8 pl-4 '
      />

<Image
        src="/fb.png"
        alt="facebook"
        height={10}
        width={50}
className='h-8  pl-4'
      />
      </div>
      </div>

      <div className='w-[1280px] 
      h-[72px] bg-[#F7F7F7] flex text-center mt-5 pl-8     '>
        
      <Image
        src="/logo.png"
        alt="facebook"
        height={4}
        width={70}
className='h-14 pt-4 pl-8'
      /> <p className="text-lg font-bold pt-6 pl-4"> Ddsgnr</p>
      <div className='pl-14'>
        <ul className='flex bg-white text-center justify-center p-2  ml-4  shadow-md gap-10 max-w-6xl h-11 m-4 '>
        
        
            <li>Home</li>
            <li>Courses</li>
            <li>Services</li>
            <li>Acheivement</li>
            <li>About us</li>
            <li>Testimonials</li>
            <li  className='px-6  border-2 border-black text-black rounded-md hover:bg-black hover:text-white transition'><button>Login</button></li>
            <li   className='px-6  bg-black border-2 border-black text-white rounded-md hover:bg-white hover:text-black transition'><button>Sign Up</button></li>
        </ul>
        </div>
      </div>
    </div>

    
  )
}

export default Header
