import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function App() {
  return (
    <div>
      {/* <h1 className='text-red-500'>The app</h1> */}
      <nav className='flex items-center space-x-5 p-4'>
        <AnchorLink href='#section1' offset={50} duration={1000}>Section1</AnchorLink>
        <AnchorLink href='#section2' offset={20} duration={5000}>Section2</AnchorLink>
        <AnchorLink href='#section3' offset={50} duration={1000}>Section3</AnchorLink>
      </nav>
      <main className='mt-5 w-[90%] mx-auto'>
        <section id='section1' className='w-full h-[400px] bg-red-300'></section>
        <section id='section2' className='w-full h-[400px] bg-green-300 my-3'></section>
        <section id='section3' className='w-full h-[400px] bg-yellow-300'></section>
      </main>
    </div>
  )
}


// git clone <repository-url>
// cd <project-directory>
// npm install
