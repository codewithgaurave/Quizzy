import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const Quiz = '{Error}'
  return (
    <div className="navBar">
      <h1 style={{ color: "#00ff22" }}>
        #Team<span style={{ color: "red" }}>{Quiz}</span>
      </h1>
      <div className="links">
        <ul>
          <li>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              {" "}
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "black" }}
            >
              {" "}
              About
            </Link>
          </li>
          <li>
            <Link
              to="/service"
              style={{ textDecoration: "none", color: "black" }}
            >
              {" "}
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              style={{ textDecoration: "none", color: "black" }}
            >
              {" "}
              SignUp
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "black" }}
            >
              {" "}
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "black" }}
            >
              {" "}
              Quiz
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
