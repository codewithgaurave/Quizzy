import React from "react";
import NavBar from "./Navbar";
import Slider from "./slider";
import AboutSec from "./AboutSec";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <NavBar />
      <Slider/>
      <AboutSec/>
      <Footer/>
      {/* <h1>Home</h1> */}
    </>
  );
};

export default Home;
