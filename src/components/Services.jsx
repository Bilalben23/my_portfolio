import React from 'react'
import { services_data } from "../utils/services_data";
import { FaArrowRight } from "react-icons/fa"

export default function Services() {
    return (
        <div className='mb-[80px] flex flex-col justify-center space-x-5 w-[95%] mx-auto' id='services'>
            <div className='relative mx-auto mb-8 w-fit'>
                <h2 className='px-2 text-2xl font-bold tracking-wider'>My Services</h2>
                <img src="/assets/theme_pattern.svg" alt="profile" className='w-[70%] h-full absolute right-0 bottom-0 -z-10' />
            </div>
            <div className='grid grid-cols-3 gap-5' >
                {
                    services_data.map(service => {
                        return <ServiceCard
                            key={service.id}
                            service={service}
                        />
                    })
                }
            </div>
        </div>
    )
}

function ServiceCard({ service }) {
    return (
        <div className='p-5 border-2 rounded-md cursor-pointer flex flex-col justify-center transition hover:scale-[1.02] hover:border-[#ff00ff] hover:bg-card-gradient'>
            <strong className='font-black tracking-wider'>{service.id.toString().padStart(2, '0')}</strong>
            <p className='text-lg font-bold text-transparent bg-clip-text bg-text-bg'>{service.s_name}</p>
            <p className='text-[#d4d4d4] leading-6 max-w-[300px] text-sm'>{service.s_desc}</p>
            <div className='flex items-center mt-3 space-x-5'>
                <button>Read More</button>
                <FaArrowRight />
            </div>
        </div>
    )
}