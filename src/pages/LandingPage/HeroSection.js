import React from 'react';
import "./LandingPage.css";
import HeroImg from "../../images/HeroImg.svg"

function HeroSection() {
  return (
    <div className="heroWrapper">
      <div className='heroTextDiv'>
        <h2>Hospital & Clinical Management made Easy</h2>
        <p>
          Boast your operation and enhance patient’s experience with our
          targeted solution
        </p>
        <button className="heroBtn" style={{ backgroundColor: "#374988" }}>
          Schedule a free Demo Now
        </button>
      </div>
      <div>
        <img src={HeroImg} alt='hero img' />
      </div>
    </div>
  );
}

export default HeroSection