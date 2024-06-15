import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import MyWork from "./components/MyWork";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackTopButton from "./components/BackTopButton";
import WhatsAppBtn from "./components/WhatsAppBtn";
// import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Contact />
      <Footer />
      <BackTopButton />
      <WhatsAppBtn />
    </>
  );
}

