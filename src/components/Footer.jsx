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
                <form action='#' method='post' className='flex items-center space-x-4'>
                    <div className='flex items-center rounded-2xl pl-3 p-0.5 bg-[#32323c] has-[:focus]:ring-2 ring-white has-[:invalid]:ring-red-600'>
                        <FaUser />
                        <input
                            type="email"
                            placeholder='Enter Your Email...'
                            className='px-3 py-2 rounded-2xl border-none outline-0 bg-[#32323c] max-w-[250px] md:max-w-[350px] text-sm'
                        />
                    </div>
                    <div>
                        <button type='submit' className='text-sm transition bg-custom-gradient px-3 py-2 rounded-2xl hover:scale-[1.02] hover:bg-opacity-85'>Subscribe</button>
                    </div>
                </form>
            </div>

            <hr />
            <div className='flex justify-between items-center text-sm flex-col text-center space-y-3 md:space-y-0 md:flex-row'>
                <p>&copy; {date.getFullYear()} Bilal Benyoussef. All rights reserved. </p>
                <div className='flex items-center space-x-4'>
                    <p>Term Of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect With Me</p>
                </div>
            </div>
        </div>
    )
}
