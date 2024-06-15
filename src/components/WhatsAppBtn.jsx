import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppBtn() {
    return (
        <div className='fixed left-2 bottom-2 z-10 transition flex items-center justify-center hover:opacity-85 bg-green-500 rounded-full w-[50px] h-[50px]'>
            <a href="https://wa.me/+212664897030?text=Hello%20Bilal"
                target="_blank"
                rel="noopener noreferrer">
                <FaWhatsapp color='#ffffff' size={35} />
            </a>
        </div>
    )
}
