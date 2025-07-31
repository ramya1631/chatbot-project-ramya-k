import React from 'react';
import './Home.css';
import image from '../assets/img_5.png'; // rename uploaded image to 'hero.jpg' and put in /assets/

function Home() {
  return (
    <div className="hero-section" style={{ backgroundImage: `url(${image})` }}>
      <div className="hero-content">
        <h1 className="animated-title">Welcome to University College</h1>
        <p>Your journey to excellence begins here.</p>
        <a href="/admissions" className="btn btn-primary btn-lg">Explore Now</a>
      </div>
    </div>

  );
}

export default Home;
