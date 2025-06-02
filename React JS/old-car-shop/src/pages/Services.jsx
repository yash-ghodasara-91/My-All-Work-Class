import React from 'react';
import './Comman.css';
import { FaTools, FaCarCrash, FaOilCan } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaTools className="service-icon" />,
      title: 'Car Maintenance',
      desc: 'Regular maintenance and quick repairs for all car models with certified mechanics.',
    },
    {
      icon: <FaCarCrash className="service-icon" />,
      title: 'Collision Repair',
      desc: 'Full body repair and insurance assistance for all accidental vehicles.',
    },
    {
      icon: <FaOilCan className="service-icon" />,
      title: 'Oil Change',
      desc: 'High-quality oil replacement to keep your engine running smoothly.',
    },
  ];

  return (
    <section className="services-section" id="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          {services.map((item, index) => (
            <div className="service-card"
              style={{ animationDelay: `${index * 0.3}s` }}
              key={index}>
              {item.icon}
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
