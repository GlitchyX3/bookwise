// src/pages/HomePage.js
import React from 'react';
import './HomePage.css'; // Import the CSS file

const HomePage = () => {
  return (
    <div>
      <header>
        <h1>My Black and White Website</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="hero">
          <img src="hero-image.jpg" alt="Hero Image" />
          <div className="hero-text">
            <h2>Welcome to my website</h2>
            <p>Discover the beauty of black and white.</p>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Your Website</p>
      </footer>
    </div>
  );
};

export default HomePage;
