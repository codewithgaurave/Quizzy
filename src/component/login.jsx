import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./Navbar";
import "./login.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Swal from "sweetalert2";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      Swal.fire({
        icon: "success",
        title: "SUCCESS",
        text: "LOGIN SUCCESSFULLY",
        footer: '<a href="#">YOUR DATA IS CORRECT</a>'
      });
      navigate("/quiz");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "FILL WRITE DATA!",
        footer: '<a href="#">YOUR FILL DATA IS WRONG</a>'
      });
    }
  };

  return (
    <div>
      <NavBar />
      <div className="login-form-container">
        <h1 className="login-heading">Login</h1>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
            required
          />
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <Link to="/signup" className="login-link">
          Don't have an account? Sign Up
        </Link>
      </div>
      <Footer/>
    </div>
  );
};

export default Login;
