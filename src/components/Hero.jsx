import React, { useEffect } from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

export default function Hero() {

    function toastInfo() {
        toast.info("Your Offline!")
    }

    useEffect(() => {
        window.addEventListener("offline", () => toastInfo());
        return () => {
            window.removeEventListener("offline", () => toastInfo());
        }
    }, [])

    return (
        <>
            <div className='flex items-center flex-col space-y-3' id="home">
                <div className='w-[250px] h-[250px] md:w-[300px] max-auto md:h-[300px] mt-10 mb-2'>
                    <img src='/assets/profile-pic.png' alt="profile" className='w-full h-full rounded-full' />
                </div>
                <h1 className='font-bold text-2xl md:text-3xl text-center w-[90%] md:w-2/3'> <span className='bg-clip-text text-transparent bg-text-bg'>I am Bilal Benyoussef,</span> Frontend developer based in USA</h1>
                <p className='w-[90%] md:w-1/2 text-center mx-auto mt-4'>
                    I'm a passionate frontend developer based in Morocco, with over 2 years of experience in web development. I've crafted numerous projects, each adding to my skills and creativity.
                </p>
                <div className='flex space-y-5 space-x-0 md:space-y-0 md:space-x-5 flex-col md:flex-row items-center md:justify-between text-md mb-5 text-center w-[80%] md:w-auto *:w-full md:*:w-fit'>
                    <AnchorLink href="#contact" className='px-5 shrink-0 py-2.5 rounded-3xl bg-custom-gradient text-xs hover:border-2 hover:border-white font-semibold' offset={20}>Connect With Me</AnchorLink>
                    <a href="/assets/my_resume.pdf" download="Bilal Benyoussef's resume" type="button" className='font-semibold shrink-0 px-5 py-2.5 text-xs rounded-3xl border-2 border-white hover:border-2 hover:border-[#B415FF]'>My Resume</a>
                </div>
            </div>
            <ToastContainer
                position='top-center'
                theme="colored"
                closeOnClick
                autoClose={3000} // Close all notifications after 3 seconds
            />
        </>
    )
}
