import React from "react";
import "./slider.css";

const Slider = () => {
  return (
    <>
      <div className="mainSlider">
        <div className="person">
          <img
            src="https://gaviaspreview.com/wp/wellearn/wp-content/uploads/2024/06/layer-7.png"
            alt="Person Image"
          />
        </div>
        <div className="chart">
          <img
            src="https://gaviaspreview.com/wp/wellearn/wp-content/uploads/2024/07/layer-9.png"
            alt="Chart Image"
          />
        </div>
        <div className="advisor-label">
          <img
            src="https://gaviaspreview.com/wp/wellearn/wp-content/uploads/2024/07/layer-8.png"
            alt="Advisor Label"
          />
        </div>
        <div className="video-tutorials">
          <img
            src="https://gaviaspreview.com/wp/wellearn/wp-content/uploads/2024/07/layer-10.png"
            alt="Video Tutorials"
          />
        </div>

        {/* text section */}
        <div className="right-section">
          <div className="students-count">
            <span className="icon">✔</span> 3+ Students
          </div>
          <h1>We’re Best Online Quiz Website who help in success.</h1>
          <div className="advisor-info">
            <span className="info-icon">✔</span> Experts Advisors
            <span className="info-icon">✔</span> Experts Advisors
          </div>
          <button className="cta-button">Get Started</button>
        </div>
      </div>
      <section className="about">
        <div className="content">
          <div>
            <button className="cta-button">About Learn Us</button>
            <h1>Our QuizApp Awesome <br/>Success Story.</h1>
          </div>
          <div>
            <p style={{color:'white' , fontSize:'20px'}}>Test your knowledge, challenge your limits,<br/> and learn something new—one<br/> quiz at a time.</p>
          </div>

        </div>

      </section>
    </>
  );
};

export default Slider;
