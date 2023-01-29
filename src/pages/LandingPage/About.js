import React from 'react';
import './LandingPage.css'

function About() {
  return (
    <>
      <div className="aboutWrapper">
        <div className="fdiv">
          <h2>About Us</h2>
          <p>
            MedCloud is owned by The Vault Company Inc. The company is comprised
            of experts from across all industries focusing on one goal: to
            revolutionize medical practice industry, From top notch UI/UX
            Specialists, and software developers designing a deep functionality
            and elegant curves of our platforms user interface and user
            experience. We are committed to deliver excellence.
          </p>
        </div>
        <div className="fdiv">
          <h2>What We Do</h2>
          <p>
            MedCloud is to create a digital environment by leveraging technology
            to connect a disjointed medical practice industry and ultimately to
            improve medical practice experience, for patients, medical
            practitioners and providers and health care professionals,
            <br />
            We are disrupting the status quo and giving the medical practice an
            easy to use software solution to increase productivity and
            profitability,
          </p>
        </div>
      </div>
      <div></div>
    </>
  );
}

export default About