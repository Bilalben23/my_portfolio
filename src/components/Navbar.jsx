import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";


export default function Navbar() {
    return <nav className="flex items-center justify-between px-10 py-1 text-white">
        <AnchorLink href="home" className="w-[100px] h-[100px] block">
            <img src='/assets/logo-no-background.svg' alt="logo" className="w-full h-full rounded-full" />
        </AnchorLink>
        <ul className="flex items-center justify-center space-x-5">
            <li>
                <AnchorLink href="#home" >Home</AnchorLink>
            </li>
            <li>
                <AnchorLink href="#about-me" offset={20}>About Me</AnchorLink>
            </li>
            <li>
                <AnchorLink href="#services" offset={20}>Services</AnchorLink>
            </li>
            <li>
                <AnchorLink href="#portfolio">Portfolio</AnchorLink>
            </li>
            <li>
                <AnchorLink href="#contact" offset={20}>Contact</AnchorLink>
            </li>
        </ul>
        <div>
            <button type="button" className="py-2.5 px-5 rounded-2xl font-semibold bg-custom-gradient text-xs transition duration-500 hover:scale-105 hover:opacity-90">Connect With Me</button>
        </div>
    </nav>;
}
