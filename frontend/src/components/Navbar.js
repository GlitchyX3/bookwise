// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure this path is correct

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">BookWise</Link>
        <ul className="navbar-menu">
          <li><Link to="/" className="navbar-link">Home</Link></li>
          <li><Link to="/login" className="navbar-link">Login</Link></li>
          <li><Link to="/register" className="navbar-link">Register</Link></li>
          {/* Add more links as needed */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
