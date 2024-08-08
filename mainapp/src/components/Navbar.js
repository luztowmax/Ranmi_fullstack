// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/logo-2.png"

const Navbar = ({handleSignUpClick=null}) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/asset/Ranmi logo.png">
        <img src={logo} alt="Ranmi logo" className="logo-image" width={100} />
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/support">Support</Link>
        </li>
      </ul>
      <div className="auth-links">
        <button onClick={handleSignUpClick}>Sign Up</button>
        <a href="#login">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;
