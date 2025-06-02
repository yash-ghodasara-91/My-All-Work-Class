import React from 'react';
import './Comman.css';

const About = () => {
  return (
    <section className="about-modern">
      <div className="about-hero">
        <h1 className="about-heading">Driven by Passion, Powered by Trust</h1>
        <p className="about-subtext">
          At <span>OldCarShop</span>, we redefine the used car experience — with integrity, innovation, and unmatched value.
        </p>
      </div>

      <div className="about-content-box">
        <div className="about-grid">
          <div className="about-text">
            <h2>Who We Are</h2>
            <p>
              We are more than just a dealership — we're a community of car enthusiasts dedicated to helping you drive home with confidence. Our cars undergo rigorous quality checks, and our team offers guidance every step of the way.
            </p>
            <h2>Why Choose Us?</h2>
            <ul>
              <li>✔ Certified vehicles with full history</li>
              <li>✔ Easy finance & zero hidden charges</li>
              <li>✔ After-sales support & servicing</li>
            </ul>
          </div>
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1571607387273-4e77c7e6f9d0"
              alt="About OldCarShop"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
