import React from "react";
import "./Footer.css";

const Footer = () => {
  const Quiz = "{Quiz}";
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-row">
          <div className="footer-col">
            <h3>#Error{Quiz}</h3>
            <p>
              Your ultimate destination for online quizzes. Test your knowledge,
              challenge your friends, and learn something new every day!
            </p>
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            <ul className="footer-links">
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/quizzes">Quizzes</a>
              </li>
              <li>
                <a href="/leaderboard">Leaderboard</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Support</h4>
            <ul className="footer-links">
              <li>
                <a href="/help">Help Center</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms">Terms of Service</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Connect with Us</h4>
            <div className="footer-socials">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} #Error{Quiz}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
