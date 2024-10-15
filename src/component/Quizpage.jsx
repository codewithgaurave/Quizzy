import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "./Navbar";
import Footer from "./Footer";
import "./Quizpage.css";

const QuizPage = () => {
  const { subject, level } = useParams();
  const [questionsList, setQuestionsList] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20);
  const navigate = useNavigate();
  
  const fetchQuestions = async (subject, level) => {
    try {
      const response = await fetch("/api.json");
      if (!response.ok) {
        throw new Error(`Failed to fetch questions: ${response.status}`);
      }
      const data = await response.json();
      return data[subject][level] || [];
    } catch (error) {
      console.error("Error fetching questions:", error);
      return []; 
    }
  }
  useEffect(() => {
    if (subject && level) {
      fetchQuestions(subject, level).then((questions) => setQuestionsList(questions));
    }
  }, [subject, level]);

  const handleOptionClick = (questionId, optionIndex) => {
    setUserAnswers({
      ...userAnswers,
      [questionId]: optionIndex,
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questionsList.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setTimeLeft(20);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
      setTimeLeft(20);
    }
  };

  const handleSubmit = () => {
    navigate("/review", {
      state: { userAnswers, subject ,questions: questionsList },
    });
  };

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      handleNext();
    }
  }, [timeLeft]);

  if (!questionsList.length) {
    return <p>Loading questions...</p>;
  }

  const currentQuestion = questionsList[currentQuestionIndex];

  return (
    <>
      <NavBar />
      <h2 className="quiz-heading">
        {subject} Quiz - {level} Level
      </h2>
      <div className="quiz-container">
        <div className="quiz-header">
          <p>
            Question {currentQuestionIndex + 1} of {questionsList.length}
          </p>
          <p>Time Left: {timeLeft} sec</p>
        </div>
        <div className="quiz-content">
          {currentQuestion && (
            <div
              key={currentQuestion.id}
              className="question-container slide-animation"
            >
              <p className="question">{currentQuestion.question}</p>
              <ul className="options">
                {currentQuestion.options.map((option, index) => (
                  <li
                    key={index}
                    className={`option ${
                      userAnswers[currentQuestion.id] === index ? "selected" : ""
                    }`}
                    onClick={() => handleOptionClick(currentQuestion.id, index)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="button-container">
            {currentQuestionIndex > 0 && (
              <button className="prev-button" onClick={handlePrevious}>
                Previous
              </button>
            )}
            {currentQuestionIndex < questionsList.length - 1 ? (
              <button className="next-button" onClick={handleNext}>
                Next
              </button>
            ) : (
              <button className="submit-button" onClick={handleSubmit}>
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const LevelSelection = () => {
  const { subject } = useParams();
  const navigate = useNavigate();

  const handleLevelSelection = (level) => {
    navigate(`/quiz/${subject}/${level}`);
  };

  return (
    <>
      <NavBar />
      <div className="quizLevel">
        <h2>SELE THE LEVEL</h2>
        <button onClick={() => handleLevelSelection("Easy")}>
          Easy
        </button>
        <button onClick={() => handleLevelSelection("Normal")}>
          Normal
        </button>
        <button onClick={() => handleLevelSelection("Hard")}>
          Hard
        </button>
      </div>
      <Footer />
    </>
  );
};

export { QuizPage, LevelSelection };
