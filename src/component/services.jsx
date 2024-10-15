import React from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";
import Development from "./Development";
import ServiseQuizSec from "./ServiceQuizSec";
const Services = () => {
  return (
    <div style={{ height: ''}}>
      <div>
        <NavBar />
      </div>
      <div style={{backgroundColor:"#80808017"}}>
      <div className="main-heading" style={{ textAlign: "center", padding: "30px",}}>
        <h1 style={{ fontSize: "60px", fontWeight: "600" }}>Online Quiz Platform</h1>
        <p style={{ fontSize: "22px", color: "gray" }}>
          Join our engaging online quiz platform, designed to test your knowledge and skills in an interactive way.
        </p>
      </div>
      <div>
        <ServiseQuizSec/>
      </div>
      </div>
      <div>
      <div className="main-heading" style={{ textAlign: "center", padding: "20px" }}>
        <h1 style={{ fontSize: "60px", fontWeight: "600" }}>Our Services</h1>
        <p style={{ fontSize: "22px", color: "gray" }}>
          Explore the diverse range of services we offer to elevate your business and meet your needs.
        </p>
      </div>
      <div>
        <Development />
      </div>
      </div>
      <div style={{ marginTop: "20px" }}>

        <Footer />
      </div>
    </div>
  );
};

export default Services;
