import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./Navbar";
import "./quiz.css";
import Footer from "./Footer";
import { useState } from "react";

const Quiz = () => {
  const [selectedSubject, setSelectedSubject] = useState("");  
  const navigate = useNavigate();

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
    navigate(`/quiz/${subject}`, { state: { subject } });
  };

  return (
    <div>
      <NavBar />
      <h2 className="heading">Select Your Subjects</h2>
      <div className="subject-list">
        <ul>
          <hr />
          <li onClick={() => handleSubjectClick("C")}>C</li>
          <hr />
          <li onClick={() => handleSubjectClick("JAVA")}>Java</li>
          <hr />
          <li onClick={() => handleSubjectClick("PYTHON")}>Python</li>
          <hr />
          <li onClick={() => handleSubjectClick("PHP")}>PHP</li>
          <hr />
          <li onClick={() => handleSubjectClick("MYSQL")}>MySQL</li>
          <hr />
          <li onClick={() => handleSubjectClick("JAVASCRIPT")}>JavaScript</li>
          <hr />
        </ul>
      </div>
      <Footer/>
    </div>
  );
};

export default Quiz;
