import React from 'react'
import { FaUser } from "react-icons/fa"

export default function Footer() {
    const date = new Date();

    return (
        <div className='w-[90%] mx-auto flex space-y-5 flex-col pb-5'>
            <div className='flex justify-between flex-col space-y-5 md:space-y-0 md:flex-row'>
                <div>
                    <img src='/assets/logo-no-background.svg' alt="logo" className="w-[60px] h-[60px] rounded-full drop-shadow-xl" />
                    <p className='text-sm max-w-[400px]'> I am a frontend developer from Morocco with 2+ years of experience in creating dynamic and responsive web applications. </p>
                </div>
                <form action='#' method='post' className='flex md:items-center md:space-x-4 flex-col space-y-2 md:space-y-0 md:flex-row '>
                    <div className='flex items-center rounded-2xl pl-3 p-0.5 bg-[#32323c] has-[:focus]:ring-2 ring-white has-[:invalid]:ring-red-600'>
                        <FaUser />
                        <input
                            type="email"
                            placeholder='Enter Your Email...'
                            className='px-3 py-2 rounded-2xl border-none outline-0 bg-[#32323c] w-[90%] md:max-w-[350px] text-sm'
                        />
                    </div>
                    <div>
                        <button type='submit' className='text-sm w-full transition bg-custom-gradient px-3 py-2 rounded-2xl hover:scale-[1.02] hover:bg-opacity-85'>Subscribe</button>
                    </div>
                </form>
            </div>

            <hr />
            <div className='flex justify-between items-center text-sm flex-col-reverse text-center gap-y-3 md:gap-y-0 md:flex-row pb-5'>
                <p className='text-xs md:text-sm'>&copy; {date.getFullYear()} <strong>Bilal Benyoussef</strong>. All rights reserved. </p>
                <div className='flex items-center space-x-4 text-xs md:*:text-sm'>
                    <p>Term Of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect With Me</p>
                </div>
            </div>
        </div>
    )
}
