import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";


export default function Navbar() {

    const [menu, setMenu] = useState('about-me');

    function handleMenuClick(navLink) {
        setMenu(navLink);
    }

    return <nav className="flex items-center justify-between px-10 py-1 text-white">
        <AnchorLink href="#home" className="w-[100px] h-[100px] block">
            <img src='/assets/logo-no-background.svg' alt="logo" className="w-full h-full rounded-full drop-shadow-xl" />
        </AnchorLink>
        <ul className="flex items-center justify-center space-x-5">
            <li onClick={() => handleMenuClick('home')}>
                <AnchorLink href="#home" className="flex flex-col space-y-0.5">
                    <span>Home</span>
                    {menu === 'home' && <img src='/assets/nav_underline.svg' alt="underline" className="w-full h-[18px]" />}
                </AnchorLink>
            </li>
            <li onClick={() => handleMenuClick('about-me')}>
                <AnchorLink href="#about-me" offset={20} className="flex flex-col space-y-0.5">
                    <span>About Me</span>
                    {menu === 'about-me' && <img src='/assets/nav_underline.svg' alt="underline" className="w-full h-[18px]" />}
                </AnchorLink>
            </li>
            <li onClick={() => handleMenuClick('services')}>
                <AnchorLink href="#services" offset={20} className="flex flex-col space-y-0.5">
                    <span>Services</span>
                    {menu === 'services' && <img src='/assets/nav_underline.svg' alt="underline" className="w-full h-[18px]" />}
                </AnchorLink>
            </li>
            <li onClick={() => handleMenuClick('portfolio')}>
                <AnchorLink href="#portfolio" className="flex flex-col space-y-0.5" >
                    <span>Portfolio</span>
                    {menu === 'portfolio' && <img src='/assets/nav_underline.svg' alt="underline" className="w-full h-[18px]" />}
                </AnchorLink>
            </li>
            <li onClick={() => handleMenuClick('contact')}>
                <AnchorLink href="#contact" offset={20} className="flex flex-col space-y-0.5">
                    <span>Contact</span>
                    {menu === 'contact' && <img src='/assets/nav_underline.svg' alt="underline" className="w-full h-[18px]" />}
                </AnchorLink>
            </li>
        </ul>
        <div onClick={() => handleMenuClick('contact')}>
            <AnchorLink href="#contact" className="py-2.5 px-5 rounded-2xl font-semibold bg-custom-gradient text-xs transition duration-500 hover:scale-105 hover:opacity-90" offset={20}>Connect With Me</AnchorLink>
        </div>
    </nav>;
}
