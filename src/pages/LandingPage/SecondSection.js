import React from 'react';
import "./LandingPage.css";
import SSFirstImg from "../../images/SSFirstImg.svg";
import SSSImg from "../../images/SSSImg.svg";
import SSThirdImg from "../../images/SSThirdImg.svg";

function SecondSection() {
  return (
    <div className="secondSecWrapper">
      <h2>Empowering Health Care Providers since 2023</h2>
      <div className="SSImgDiv">
        <img src={SSFirstImg} alt="SSFirstImg" />
        <img src={SSSImg} alt="SSSImg" />
        <img src={SSThirdImg} alt="SSThirdImg" />
      </div>
    </div>
  );
}

export default SecondSection