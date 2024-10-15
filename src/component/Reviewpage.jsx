import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./Navbar";
import "./Reviewpage.css";
import Footer from "./Footer";
import CanvasJSReact from "@canvasjs/react-charts";
import jsPDF from "jspdf";
import "jspdf-autotable"; 

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const users = JSON.parse(localStorage.getItem("users")) || [];
// const name = users.name;
// console.log(name)
console.log(users)
// const candidateName = users.name || "Unknown User";

const ReviewPage = () => {
  const location = useLocation();
  const { userAnswers, questions, subject } = location.state || {}; 

  const calculateResults = () => {
    let correct = 0;
    let wrong = 0;

    questions.forEach((q) => {
      if (userAnswers[q.id] !== undefined) {
        if (userAnswers[q.id] === q.answer) {
          correct++;
        } else {
          wrong++;
        }
      }
    });

    return { correct, wrong };
  };

  const { correct, wrong } = calculateResults();

  const attemptedQuestions = questions.filter(
    (q) => userAnswers[q.id] !== undefined
  );
  const nonAttemptedQuestions = questions.filter(
    (q) => userAnswers[q.id] === undefined
  );

  const chartOptions = {
    animationEnabled: true,
    title: {
      text: "Quiz Results",
    },
    subtitles: [
      {
        text: `${Math.round((correct / questions.length) * 100)}% Correct`,
        verticalAlign: "center",
        fontSize: 24,
        dockInsidePlotArea: true,
      },
    ],
    data: [
      {
        type: "doughnut",
        showInLegend: true,
        indexLabel: "{name}: {y}",
        yValueFormatString: "#,###'%'",
        dataPoints: [
          { name: "Correct", y: (correct / questions.length) * 100 },
          { name: "Wrong", y: (wrong / questions.length) * 100 },
          {
            name: "Not Attempted",
            y: (nonAttemptedQuestions.length / questions.length) * 100,
          },
        ],
      },
    ],
  };

  const generateStyledCertificate = (
    candidateName,
    subject,
    correctAnswers,
    totalQuestions,
    date
  ) => {
    const doc = new jsPDF("landscape", "pt", "a4");
  
    const goldColor = { r: 204, g: 168, b: 62 }; 
    const blackColor = { r: 0, g: 0, b: 0 }; 
  
    // Load signature image (Base64 or from public folder)
    const signatureImg = "Sign.png"; // Replace this with your signature image path or Base64
  
    // Text content setup
    doc.setFontSize(30);
    doc.setTextColor(blackColor.r, blackColor.g, blackColor.b);
    doc.text("CERTIFICATE", 420, 190, "center");
  
    doc.setFontSize(20);
    doc.setTextColor(goldColor.r, goldColor.g, goldColor.b); 
    doc.text("OF APPRECIATION", 420, 220, "center");
  
    doc.setFontSize(16);
    doc.setTextColor(blackColor.r, blackColor.g, blackColor.b); 
    doc.text("PROUDLY PRESENTED TO", 420, 280, "center");
  
    doc.setFontSize(28);
    doc.setTextColor(blackColor.r, blackColor.g, blackColor.b);
    doc.text(candidateName, 420, 320, "center");
  
    doc.setFontSize(12);
    doc.setTextColor(blackColor.r, blackColor.g, blackColor.b); 
    doc.text(
      `For outstanding performance in the ${subject}`,
      420,
      360,
      "center"
    );
    doc.text(
      `Correct Answers: ${correctAnswers} out of ${totalQuestions}`,
      420,
      400,
      "center"
    );
  
    doc.setFontSize(12);
    doc.setTextColor(goldColor.r, goldColor.g, goldColor.b);
    doc.text("DATE", 150, 450);
    doc.text("SIGNATURE", 650, 450);

    //set the border

    doc.setLineWidth(6)
    doc.setDrawColor(goldColor.r, goldColor.g, goldColor.b)
    doc.rect(20, 20, 800, 555)
  
    // Set the date
    doc.setTextColor(blackColor.r, blackColor.g, blackColor.b); 
    doc.text(date, 140, 430);

    const logo = "ErrorLogo.png";
    const award = "awardLogo.png"
  
    // Add the signature image
    doc.addImage(signatureImg, 'PNG', 610, 400, 150, 50);  // Adjust position and size as needed
    // Company Logo
    doc.addImage(logo , 'PNG',10,20,200,150);

    //awardImage
    doc.addImage(award , 'PNG',600,80,200,200);

    // Save the PDF with the candidate's name
    doc.save(`${candidateName}_certificate.pdf`);
  };
  

  const handleDownloadCertificate = () => {
    // Get the users data from localStorage and parse it
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    // Check if the data is an array and if it has at least one element
    const candidateData = users.length > 0 ? users[0] : {};
  
    // Access the candidate's name
    const candidateName = candidateData.name || "Candidate Name";
    console.log(candidateName); // Debugging
  
    // Generate the certificate with the retrieved name
    const totalQuestions = questions.length;
    const currentDate = new Date().toLocaleDateString();
    
    generateStyledCertificate(
      candidateName,
      subject,
      correct,
      totalQuestions,
      currentDate
    );
  };
  

  return (
    <>
      <NavBar />
      <div className="review-container">
        <div className="summary-and-chart">
          <div className="results-section">
            <h2 className="review-heading">Review Your Answers</h2>
            <div className="review-summary">
              <p className="result">
                Correct Answers: <span>{correct}</span>
              </p>
              <p className="result">
                Wrong Answers: <span>{wrong}</span>
              </p>
              <p className="result">
                Total Attempted: <span>{attemptedQuestions.length}</span>
              </p>
              <p className="result">
                Total Non-Attempted: <span>{nonAttemptedQuestions.length}</span>
              </p>
            </div>
          </div>
          <div className="certificate-button-container">
        <button
          onClick={handleDownloadCertificate}
          className="button2"
        >
          <img src="downLoadIcon.png" alt="download-image" height="45px"/>
          Download Certificate
        </button>
      </div>
          <div className="button">
            <p>Learn {subject}</p>
          </div>

        </div>
        <div className="chart-container">
          <CanvasJSChart options={chartOptions} />
        </div>

        <div className="main">
          <div className="attempted-section">
            <h3 className="section-heading">Attempted Questions</h3>
            <ul className="review-list">
              {attemptedQuestions.map((q) => (
                <li key={q.id} className="review-item">
                  <p className="question-text">{q.question}</p>
                  <p
                    className={`answer-text ${
                      userAnswers[q.id] === q.answer
                        ? "correct-answer"
                        : "wrong-answer"
                    }`}
                  >
                    Your Answer:{" "}
                    {q.options[userAnswers[q.id]] || "No Answer Selected"}
                  </p>
                  <p className="correct-answer-text">
                    Correct Answer: {q.options[q.answer]}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="non-attempted-section">
            <h3 className="section-heading">Non-Attempted Questions</h3>
            <ul className="review-list">
              {nonAttemptedQuestions.map((q) => (
                <li key={q.id} className="review-item">
                  <p className="question-text">{q.question}</p>
                  <p className="correct-answer-text">
                    Correct Answer: {q.options[q.answer]}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ReviewPage;
