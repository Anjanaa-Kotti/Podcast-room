import React from 'react';
import { Services } from '../data/Services';
import '../Styles/ServicesCard.css';

const ServicesCard = () => {
  return (
    <div className="services-section">
      <h2 className="section-title"> Additional Services</h2>
      <p className="section-subtitle">Enhance your recording experience with these services:</p>
      <div className="cards-container">
        {Services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-check-icon"></div>
            <h3 className="service-title">{service.name}</h3>
            <p className="service-description">{service.description}</p>
            <div className="a">
            <span className="service-price">${service.price}</span>
            <button className='btn'>Book!</button>
              
          </div>
          
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesCard;
