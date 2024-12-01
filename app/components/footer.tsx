    import Image from 'next/image'
    import React from 'react'

    const Footer = () => {
    return (
        <div className='flex justify-center  w-[1280px] h-[228px] '>
        <div className='w-full max-w-[1280px] h-[228px] flex flex-row gap-[32px] bg-[#F7F7F7] mt-[47px] py-8 px-4'>
            <div className='w-[340px] h-[68px]'>
            <h5 className='font-["Roboto"] font-bold text-[24px] leading-[33.6px] text-start py-[30px]'>
                Trusted by 2000+ companies worldwide.
            </h5>
            <div className='flex items-center gap-4'>
                <Image
                src="/F1.png"
                alt="F1"
                height={38}
                width={130}
                className="h-[38px] w-[130px]"
                />
                <Image
                src="/F2.png"
                alt="F2"
                height={38}
                width={130}
                className="h-[38px] w-[130px]"
                />
                <Image
                src="/F3.png"
                alt="F3"
                height={38}
                width={130}
                className="h-[38px] w-[130px]"
                />
                <Image
                src="/F4.png"
                alt="F4"
                height={38}
                width={130}
                className="h-[38px] w-[130px]"
                />
                <Image
                src="/F5.png"
                alt="F5"
                height={38}
                width={130}
                className="h-[38px] w-[130px]"
                />
                <Image
                src="/F6.png"
                alt="F6"
                height={38}
                width={130}
                className="h-[38px] w-[130px]"
                />
            </div>
            </div>
        </div>
        </div>
    )
    }

    export default Footer
