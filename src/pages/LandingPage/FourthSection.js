import React from 'react';
import "./LandingPage.css";
import PortImg from '../../images/PortImg.svg';
import SeamImg from '../../images/SeamImg.svg';
import UserFriendlyImg from '../../images/UserFriendly.svg';
import CloudImg from '../../images/CloudImg.svg';
import SecureImg from "../../images/Secure.svg";
import SFSF from "../../images/1 (11) 1.svg";
import SFSS from "../../images/1 (12) 1.svg";
import SFST from "../../images/1 (23) 1.svg";
import SFSFIFTH from "../../images/1 (6)-1 1.svg";
import SFSSIXTH from "../../images/1 (16) 1.svg";
import TFSImg from "../../images/TFSImg.svg";
import Frame13 from "../../images/Frame13.svg";
import Frame14 from "../../images/Frame14.svg";
import Frame15 from "../../images/Frame15.svg";

function FourthSection() {
  return (
    <>
      <div className="FSImgDiv">
        <img src={PortImg} alt="" />
        <img src={SeamImg} alt="" />
        <img src={UserFriendlyImg} alt="" />
      </div>
      <div className="FSSImgDiv">
        <img src={CloudImg} alt="" />
        <img className="FSSImg" src={SecureImg} alt="" />
      </div>
      <div className="SFSDiv">
        <h2>Trusted by 100+ healthcare establishments across Nigeria</h2>
        <div className="SFSImgDiv">
          <img src={SFSF} alt="" />
          <img src={SFSS} alt="" />
          <img src={SFST} alt="" />
          <img src={SFSFIFTH} alt="" />
          <img src={SFSSIXTH} alt="" />
        </div>
        <div className="TFSDiv">
          <div>
            <h2>Running Your Clinic or Hospital Shouldn’t be so Hard</h2>
            <p>
              Don't get caught in the web of managing your operational,
              clinical, and financial data.
            </p>
            <button className="TFSBtn" style={{ backgroundColor: "#374988" }}>
              Get Started Now
            </button>
          </div>
          <div>
            <img src={TFSImg} alt="" />
          </div>
        </div>
      </div>
      <div className="STFSDIV">
        <h2>Here is a One-Stop Solution for a Great Clinical Journey! </h2>
        <div className="STFSIMGDIV">
          <img src={Frame13} alt="" />
          <img src={Frame14} alt="" />
          <img src={Frame15} alt="" />
        </div>
      </div>
    </>
  );
}

export default FourthSection