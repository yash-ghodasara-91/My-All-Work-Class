import React from 'react';
import './Comman.css';

const cars = [
  {
    name: 'Hyundai Creta',
    price: '₹11.11 - ₹20.50 Lakh',
    image: 'Hyundai Creta.jpg',
  },
  {
    name: 'Maruti Suzuki Dzire',
    price: '₹6.84 - ₹10.19 Lakh',
    image: 'Maruti Suzuki Dzire.jpg',
  },
  {
    name: 'Tata Altroz',
    price: '₹6.89 - ₹11.49 Lakh',
    image: 'Tata Altroz.jpg',
  },
  {
    name: 'Mahindra Scorpio N',
    price: '₹13.99 - ₹24.05 Lakh',
    image: 'Mahindra Scorpio N.jpg',
  },
  {
    name: 'Maruti Suzuki Brezza',
    price: '₹8.29 - ₹14.14 Lakh',
    image: 'Maruti Suzuki Brezza.jpg',
  },
  {
    name: 'Kia Carens Clavis',
    price: '₹11.50 - ₹21.50 Lakh',
    image: 'Kia Carens Clavis.jpg',
  },
];

function Cars() {
  return (
    <div className="cars-page">
      <h1>Popular Cars in India</h1>
      <div className="car-grid">
        {cars.map((car, index) => (
          <div className="car-card" key={index}>
            <img src={car.image} alt={car.name} />
            <h3>{car.name}</h3>
            <p>{car.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cars;
