// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Make sure this path is correct
import logo from '../assets/logo.png'; // Adjust the path if necessary

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <img src={logo} alt="BookWise Logo" className="home-logo" />
        <h1>Welcome to BookWise</h1>
        <Link to="/login" className="get-started-button">Get Started</Link>
      </header>
    </div>
  );
}

export default Home;
