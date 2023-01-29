import React from 'react';
import "./LandingPage.css";
import Logo from "../../images/Logo.svg";


function Navbar() {
  return (
    <nav>
      <img className="navImg" src={Logo} alt="Logo" />
      <ul className="navUl">
        <li>
          <a href="#pricing">Pricing</a>
        </li>

        <li>
          <a href="#faqs">FAQs</a>
        </li>
        <li>
          <a href="#patners">Patners</a>
        </li>
        <li>
          <a href="#career">Career</a>
        </li>
        <li>
          <a href="#resources">Resources</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
      <button className="navBtn" style={{ backgroundColor: "#374988" }}>
        Get Started
      </button>
    </nav>
  );
}

export default Navbar