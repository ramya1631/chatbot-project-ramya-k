import React, { useEffect } from 'react';
import './Home.css';
import image from "../../assets/img_5.png";

function Home({
  title = "Welcome to University College",
  subtitle = "Your journey to excellence begins here.",
  buttonText = "Explore Now",
  buttonLink = "/admissions",
  backgroundImage = image
}) {
  useEffect(() => {
    // Re-enable scroll when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <main>
      <section className="hero-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="hero-content">
          <h1 className="animated-title">{title}</h1>
          <p>{subtitle}</p>
          <a href={buttonLink} className="btn btn-primary btn-lg">{buttonText}</a>
        </div>
      </section>
    </main>
  );
}

export default Home;
