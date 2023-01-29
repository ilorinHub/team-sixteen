import React from 'react';
import "./LandingPage.css"
import HeroSection from './HeroSection';
import SecondSection from './SecondSection';
import About from './About';
import FourthSection from './FourthSection';
import Navbar from './Navbar';
import Footer from './Footer';

function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SecondSection />
      <About />
      <FourthSection />
      <Footer />
    </>
  );
}


export default LandingPage