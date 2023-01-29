import React from 'react';
import Logo from "../../images/FooterLogo.svg";
import FacebookImg from "../../images/FacebookImg.svg";
import LinkedInImg from "../../images/LinkedInImg.svg";
import TwitterImg from "../../images/TwitterImg.svg";


function Footer() {
  return (
    <div className="footer">
      <img src={Logo} alt="" />
      <ul className="footerUl firstChild">
        <li>
          <a href="#pricing">
            <img src={FacebookImg} alt="" />
          </a>
        </li>

        <li>
          <a href="#pricing">
            <img src={LinkedInImg} alt="" />
          </a>
        </li>
        <li>
          <a href="#pricing">
            <img src={TwitterImg} alt="" />
          </a>
        </li>
      </ul>
      <ul className="footerUl">
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
      <p>© Copyright 2023. MedCloud Technologies Pvt. Ltd</p>
    </div>
  );
}

export default Footer