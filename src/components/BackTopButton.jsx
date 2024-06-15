import React, { useEffect, useState } from 'react';
import { FaChevronUp } from "react-icons/fa";

export default function BackTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        const debounce = (func, wait) => {
            let timeout;
            return () => {
                clearTimeout(timeout);
                timeout = setTimeout(() => func(), wait);
            };
        };

        const debouncedHandleScroll = debounce(handleScroll, 100);

        window.addEventListener("scroll", debouncedHandleScroll);

        return () => {
            window.removeEventListener("scroll", debouncedHandleScroll);
        };
    }, []);

    const handleGoTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div
            className={`fixed right-2 bottom-2 bg-white rounded-full w-[50px] transition shadow-md z-10 h-[50px] flex items-center justify-center hover:opacity-90 border-2 border-[#DA7C25] ${isVisible ? 'flex' : 'hidden'}`}
            onClick={handleGoTop}
        >
            <button type="button">
                <FaChevronUp color='#000000' />
            </button>
        </div>
    );
}
