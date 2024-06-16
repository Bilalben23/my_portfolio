import { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const menuLinks = [
    { id: 1, label: 'Home', to: 'home' },
    { id: 2, label: 'About Me', to: 'about-me' },
    { id: 3, label: 'Services', to: 'services' },
    { id: 4, label: 'Portfolio', to: 'my-works' },
    { id: 5, label: 'Contact', to: 'contact' }
];


export default function Navbar() {
    const [menu, setMenu] = useState('about-me');
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuClick = (navLink) => {
        setMenu(navLink);
        setIsOpen(false); // Close the menu after clicking on a link
    };

    useEffect(() => {
        window.addEventListener("dblclick", () => {
            setIsOpen(false)
        })
    }, [])

    return (
        <nav className="flex items-center justify-between px-10 py-1 text-white">
            <AnchorLink href="#home" className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] absolute top-0 left-2 md:static block">
                <img src={`${process.env.PUBLIC_URL}/assets/logo-no-background.svg`} alt="logo" className="w-full h-full rounded-full drop-shadow-xl" />
            </AnchorLink>
            <FaBars
                size={40}
                className="absolute z-50 top-2 right-2 block md:hidden cursor-pointer transition hover:opacity-85 select-none"
                onClick={() => setIsOpen(true)}
            />
            <ul className={`flex bg-[#1f0016] md:bg-transparent flex-col md:flex-row items-center md:justify-center space-y-5 md:space-x-5 fixed md:static top-0 w-[55%] transition-all duration-500 z-50 h-full md:w-auto md:h-auto ${isOpen ? 'right-0' : '-right-full'}`}>
                <FaTimes
                    size={40}
                    className="absolute top-2 right-2 block md:hidden cursor-pointer transition hover:opacity-85 select-none"
                    onClick={() => setIsOpen(false)}
                />
                {menuLinks.map((link) => (
                    <li key={link.id} onClick={() => handleMenuClick(link.to)}>
                        <AnchorLink href={`#${link.to}`} offset={20} className="flex flex-col space-y-0.5">
                            <span className="select-none">{link.label}</span>
                            {menu === link.to && <img src={`${process.env.PUBLIC_URL}/assets/nav_underline.svg`} alt="underline" className="w-full h-[18px] animate-pulse" />}
                        </AnchorLink>
                    </li>
                ))}
            </ul>
            <div onClick={() => handleMenuClick('contact')} className="hidden md:block">
                <AnchorLink href="#contact" className="py-2.5 px-5 rounded-2xl font-semibold bg-custom-gradient text-xs transition duration-500 hover:scale-105 hover:animate-pulse" offset={20}>
                    Connect With Me
                </AnchorLink>
            </div>
        </nav>
    );
}
