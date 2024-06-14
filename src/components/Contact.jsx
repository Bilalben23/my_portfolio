import React from 'react';
import { FaEnvelope, FaPhoneVolume, FaMapMarkerAlt } from "react-icons/fa"

export default function Contact() {
    return (
        <div className='' id='contact'>
            <div className='relative mx-auto mb-8 w-fit'>
                <h2 className='px-2 text-2xl font-bold tracking-wider'>Get in Touch</h2>
                <img src="/assets/theme_pattern.svg" alt="profile" className='w-[70%] h-full absolute right-0 bottom-0 -z-10' />
            </div>
            <div className='flex justify-between w-[90%] mx-auto'>
                <div className='w-[48%]'>
                    <h4 className='text-2xl font-bold leading-10 text-transparent bg-clip-text bg-custom-gradient'>Let's Talk</h4>
                    <p className="max-w-[90%] text-[#D8D8D8] text-sm">
                        I am currently available for new projects! Feel free to reach out with any ideas or work you have in mind. I'm here to help, and you can contact me anytime.
                    </p>
                    <address className='flex flex-col mt-5 space-y-5 text-[#D8D8D8]'>
                        <a href="mailto:bilalbeny735@gmail.com?subject=Project%20Inquiry&body=Hi%20Bilal,%0D%0A%0D%0AI%20am%20interested%20in%20discussing%20a%20project%20with%20you.%20Please%20let%20me%20know%20your%20availability.%0D%0A%0D%0AThanks!" className='flex items-center space-x-3'>
                            <FaEnvelope />
                            <p className='font-semibold transition hover:underline'>bilalbeny735@gmail.com</p>
                        </a>
                        <a href='tel:+212664897030' className='flex items-center space-x-3'>
                            <FaPhoneVolume />
                            <p className='font-semibold transition hover:underline'>0664897030</p>
                        </a>
                        <a href='#' className='flex items-center space-x-3'>
                            <FaMapMarkerAlt />
                            <p className='font-semibold transition hover:underline'>Morocco, Chafchouen</p>
                        </a>
                    </address>
                </div>
                <div className='w-[48%]'>
                    <form action="" method='post' className='flex flex-col w-full space-y-3'>
                        <div>
                            <input
                                type="text"
                                placeholder='Enter your name...'
                                name='name'
                                aria-label='name'
                                className='w-full px-3 py-2 rounded-sm bg-[#32323c]'
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder='Enter your email...'
                                name='email'
                                aria-label='email'
                                className='w-full px-3 py-2 rounded-sm bg-[#32323c]'
                            />
                        </div>
                        <div>
                            <textarea
                                rows="6"
                                placeholder='Enter your Message...'
                                name='message'
                                aria-label='message'
                                className='py-1.5 px-2 w-full max-h-[400px] min-h-[100px] rounded-sm bg-[#32323c]'
                            />
                        </div>
                        <div>
                            <button
                                type='submit' className="px-4 py-2 text-sm font-semibold text-white transition rounded-3xl bg-custom-gradient hover:scale-[1.05] focus:ring-2">Submit Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}
// modern way to unstage changes:
// git restore --staged .
// git restore --staged <filename>

// traditional way to unstage changes:
// git reset <filename>
// git reset