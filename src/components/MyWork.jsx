import React from 'react'
import { myWorkData } from "../utils/myWorkData";
import { FaArrowRight } from "react-icons/fa"


export default function MyWork() {

    return (
        <div className='flex flex-col items-center justify-center space-y-10 my-[80px]' id="my-works">
            <div className='relative'>
                <h3 className='px-2 text-2xl font-bold tracking-wider'>My Latest Work</h3>
                <img src="/assets/theme_pattern.svg" alt="profile" className='w-[70%] h-full absolute right-0 bottom-0 -z-10' />
            </div>
            <div className='grid grid-cols-3 gap-x-5 gap-y-8 w-[90%] mx-auto'>
                {
                    myWorkData.map(work => {
                        return <WorkCard
                            key={work.id}
                            work={work}
                        />
                    })
                }
            </div>
            <div>
                <button className='flex items-center gap-x-2 border-2 rounded-3xl text-sm px-3.5 p-2 hover:gap-x-4 transition duration-700 hover:border-[#ff00ff]'>
                    <span>Show More</span>
                    <span><FaArrowRight /></span>
                </button>
            </div>
        </div>
    )
}


function WorkCard({ work }) {
    return (
        <div className='border-transparent border-2 hover:border-2 hover:border-[#ff00ff] cursor-pointer px-1 py-0.5 rounded-md hover:scale-[1.02] transition'>
            <p className='mb-0.5'>{work.w_name}</p>
            <img src={work.w_img} alt={work.w_name} className='w-full h-[220px] rounded' />
        </div>
    )
}