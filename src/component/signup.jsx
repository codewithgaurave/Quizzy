import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./Navbar";
import "./signUp.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const newUser = { name, email, password };
    setUserData([...userData, newUser]);
    localStorage.setItem("users", JSON.stringify([...userData, newUser]));
    navigate("/login");
  };

  return (
    <div>
      <NavBar />
      <div className="signup-form-container">
        <h1 className="signup-heading">Sign Up</h1>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="signup-input"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="signup-input"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="signup-input"
            required
          />
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>

        <span className="signup-link">
          <Link to="/login" style={{ color: "orange" }}>
            Already have an account? Log In
          </Link>
        </span>
      </div>
      <Footer/>
    </div>
  );
};

export default Signup;
