import React from 'react';
import logo from './assets/logo-2.png'; // Adjust the path accordingly

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-brand">
      <a href="/">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </a>
    </div>
    {/* Other navbar items */}
  </nav>
);

export default Navbar;
