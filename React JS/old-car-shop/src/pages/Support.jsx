import React from 'react';
import './Comman.css';
import { FaPhoneAlt, FaEnvelope, FaHeadset } from 'react-icons/fa';

const Support = () => {
  const supportOptions = [
    {
      icon: <FaPhoneAlt className="support-icon" />,
      title: '24/7 Call Support',
      desc: 'Connect with our support team anytime. We’re just a call away!',
    },
    {
      icon: <FaEnvelope className="support-icon" />,
      title: 'Email Assistance',
      desc: 'Email us your issues or queries and get a prompt response.',
    },
    {
      icon: <FaHeadset className="support-icon" />,
      title: 'Live Chat Help',
      desc: 'Chat with our agents live for instant help regarding your car services.',
    },
  ];

  return (
    <section className="support-section" id="support">
      <div className="support-container">
        <h2 className="support-title">Customer Support</h2>
        <div className="support-grid">
          {supportOptions.map((item, index) => (
            <div
              className="support-card"
              key={index}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
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

export default Support;
