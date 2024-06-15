import React from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll"
export default function Hero() {
    return (
        <div className='flex items-center flex-col space-y-3' id="home">
            <div className='w-[300px] max-auto h-[300px] mt-10 mb-2'>
                <img src='/assets/profile-pic.png' alt="profile" className='w-full h-full rounded-full' />
            </div>
            <h1 className='font-bold text-3xl text-center w-2/3'> <span className='bg-clip-text text-transparent bg-text-bg'>I am Bilal Benyoussef,</span> Frontend developer based in USA</h1>
            <p className='w-1/2 text-center mx-auto mt-4'>
                I'm a passionate frontend developer based in Morocco, with over 2 years of experience in web development. I've crafted numerous projects, each adding to my skills and creativity.
            </p>
            <div className='flex justify-between space-x-5 text-md mb-5'>
                <AnchorLink href="#contact" className='px-5 py-2.5 rounded-3xl bg-custom-gradient text-xs hover:border-2 hover:border-white font-semibold' offset={20}>Connect With Me</AnchorLink>
                <button type="button" className='font-semibold px-5 py-2.5 text-xs rounded-3xl border-2 border-white hover:border-2 hover:border-[#B415FF]'>My Resume</button>
            </div>
        </div>
    )
}
