import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/Landing_page.js';
import SignUp from './components/Signup_page.js';
import AboutUs from './components/About_us_page.js';
import Contact from './components/Contact.js';
import Navbar from './components/Navbar.js';
import Login from './components/Login.js';
import Support from './components/Support.js';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/support" element={<Support/>} />
      </Routes>
    </Router>
  );
};

export default App;
