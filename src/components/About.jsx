import React from 'react'

export default function About() {
    return (
        <div className='flex flex-col items-center justify-center space-y-5 my-[80px]' id="about-me">
            <div className='relative mb-0 md:mb-4'>
                <h1 className='px-2 font-bold text-xl md:text-2xl tracking-wider'>About Me</h1>
                <img src={`${process.env.PUBLIC_URL}/assets/theme_pattern.svg`} alt="profile" className='w-[70%] h-full absolute right-0 bottom-0 -z-10' />
            </div>
            <div className='flex justify-evenly md:space-x-5 space-x-0 space-y-1.5 md:space-y-0 flex-col md:flex-row'>
                <div className='hidden w-[35%] md:block'>
                    <img src={`${process.env.PUBLIC_URL}/assets/profile-pic-big.png`} alt="profile" className='w-full aspect-square rounded md:rounded-none' />
                </div>

                <div className='w-[90%] self-center md:w-[55%] flex flex-col space-y-8'>
                    <div className='mb-1 md:mb-4'>
                        <p className="mb-2 text-sm">
                            I'm a frontend developer from Morocco, crafting delightful user experiences. With 2 years of experience, I've brought numerous web projects to life.
                        </p>
                        <p className='text-sm'>
                            My coding journey is driven by creativity and a passion for learning. Each project, from simple sites to complex apps, fuels my growth.
                        </p>
                    </div>

                    <div className='flex flex-col space-y-2'>
                        <div className='flex items-center space-x-5 transition hover:scale-105'>
                            <label for="html-css" className="block mb-1 min-w-[120px] md:min-w-[150px] text-sm font-semibold">HTML & CSS</label>
                            <progress id="html-css" value="90" max="100">90%</progress>
                        </div>
                        <div className='flex items-center space-x-5 transition hover:scale-105'>
                            <label for="tailwindcss" className="block mb-1 min-w-[120px] md:min-w-[150px] text-sm font-semibold">Tailwindcss</label>
                            <progress id="tailwindcss" value="75" max="100">75%</progress>
                        </div>
                        <div className='flex items-center space-x-5 transition hover:scale-105'>
                            <label for="js" className="block mb-1 min-w-[120px] md:min-w-[150px] text-sm font-semibold">JavaScript</label>
                            <progress id="js" value="75" max="100">75%</progress>
                        </div>
                        <div className='flex items-center space-x-5 transition hover:scale-105'>
                            <label for="alpine" className="block mb-1 min-w-[120px] md:min-w-[150px] text-sm font-semibold">Alpine JS</label>
                            <progress id="alpine" value="80" max="100">80%</progress>
                        </div>
                        <div className='flex items-center space-x-5 transition hover:scale-105'>
                            <label for="react" className="block mb-1 min-w-[120px] md:min-w-[150px] text-sm font-semibold">React JS</label>
                            <progress id="react" value="85" max="100">85%</progress>
                        </div>
                        <div className='flex items-center space-x-5 transition hover:scale-105'>
                            <label for="git-github" className="block mb-1 min-w-[120px] md:min-w-[150px] text-sm font-semibold">Git & GitHub</label>
                            <progress id="git-github" value="80" max="100">80%</progress>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-around w-fit mx-auto space-y-3 md:space-y-0 items-stretch flex-col md:w-full md:flex-row'>
                <div className='flex flex-row space-x-3 md:space-x-0 md:flex-col items-center md:justify-center space-y-1 transition hover:scale-105'>
                    <span className='text-white text-lg font-bold bg-clip-text text-transparent bg-text-bg'>2+</span>
                    <p className='text-white text-xs tracking-wide'>YEARS OF EXPERIENCE</p>
                </div>
                <div className="w-1/2 h-[2px] self-center md:self-auto md:h-auto md:w-[2px] rounded-xl bg-white"></div>
                <div className='flex flex-row md:flex-col space-x-3 md:space-x-0 items-center md:justify-center space-y-1 transition hover:scale-105'>
                    <span className='text-white text-lg font-bold bg-clip-text text-transparent bg-text-bg'>90+</span>
                    <p className='text-white text-xs tracking-wider' >PROJECTS COMPLETED</p>
                </div>
                <div className="w-1/2 h-[2px] self-center md:self-auto md:h-auto md:w-[2px] rounded-xl bg-white"></div>
                <div className='flex flex-row md:flex-col space-x-3 md:space-x-0 items-center md:justify-center space-y-1 transition hover:scale-105'>
                    <span className='text-white text-lg font-bold bg-clip-text text-transparent bg-text-bg'>15+</span>
                    <p className='text-white text-xs tracking-wider'>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    )
}
