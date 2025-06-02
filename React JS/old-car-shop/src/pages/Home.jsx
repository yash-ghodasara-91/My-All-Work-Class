import React from 'react';
import './Comman.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Find Your Dream Classic Car</h1>
          <p>Best deals on vintage and pre-loved cars only at Old Car Shop.</p>
          <button>Explore Inventory</button>
        </div>
      </section>

      <section className="intro">
        <h2>Why Choose Us?</h2>
        <p>
          We offer a wide selection of classic, luxury, and reliable used cars. Quality assured with trusted service, inspections, and easy financing options.
        </p>
      </section>
    </div>
  );
}

export default Home;
