import React, { useState } from 'react';
import '../styles/LandingPage.css';
import Logo from'../assets/logo-1.jpg';
import SignUp from './Signup_page.js';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.js';


const LandingPage = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignUpClick = () => {
    setShowSignUp(true);
  };

  const handleCloseSignUp = () => {
    setShowSignUp(false);
  };

  return (
    <div className="landing-page">
     {<Navbar handleSignUpClick={handleSignUpClick}/>}
      <div className="body">
        <h1>Welcome to Ranmi_App</h1>
        <p>Ranmi_App is a delivery app where users can order for a delivery agent for pick up and delivery of their packages.</p>
        <img src={Logo} alt="Delivery Bike" className="bike-image" />
      </div>
      <footer className="footer">
        <p>&copy; 2023 Ranmi_App. All rights reserved.</p>
        <div className="social-media">
          <a href="https://facebook.com">Facebook</a>
          <a href="https://twitter.com">Twitter</a>
          <a href="https://instagram.com">Instagram</a>
        </div>
        <p>Email: support@ranmiapp.com</p>
      </footer>
      {showSignUp && <SignUp onClose={handleCloseSignUp} />}
    </div>
  );
};

export default LandingPage;
