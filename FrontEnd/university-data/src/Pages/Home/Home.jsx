import React, { useEffect } from 'react';
import './Home.css';
import image from "../../assets/img_5.png";

function Home() {
  useEffect(() => {
    // Disable scroll when component mounts
    document.body.style.overflow = 'hidden';

    // Re-enable scroll when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <main>
      <section className="hero-section" style={{ backgroundImage: `url(${image})` }}>
        <div className="hero-content">
          <h1 className="animated-title">Welcome to University College</h1>
          <p>Your journey to excellence begins here.</p>
          <a href="/admissions" className="btn btn-primary btn-lg">Explore Now</a>
        </div>
      </section>

      <section className="image-section" style={{ textAlign: 'center', marginTop: '2rem' }}>
        <img
          src={image}
          alt="University College campus with students walking"
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
        />
      </section>
    </main>
  );
}

export default Home;
