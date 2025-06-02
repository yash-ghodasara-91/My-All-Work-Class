import React from 'react';
import './Comman.css';

const inventory = [
    {
        name: 'Honda City',
        price: '₹12.50 Lakh',
        stock: 'Available',
        image: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/44739/honda-city-right-front-three-quarter3.jpeg',
    },
    {
        name: 'Toyota Fortuner',
        price: '₹32.59 Lakh',
        stock: 'Few Left',
        image: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/44783/toyota-fortuner-right-front-three-quarter1.jpeg',
    },
    {
        name: 'Mahindra Thar',
        price: '₹15.00 Lakh',
        stock: 'Available',
        image: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/44791/mahindra-thar-right-front-three-quarter3.jpeg',
    },
    {
        name: 'Tata Nexon',
        price: '₹8.10 Lakh',
        stock: 'Available',
        image: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/141401/tata-nexon-right-front-three-quarter6.jpeg',
    },
    {
        name: 'Hyundai Verna',
        price: '₹11.00 Lakh',
        stock: 'Out of Stock',
        image: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/44789/hyundai-verna-right-front-three-quarter0.jpeg',
    },
    {
        name: 'Maruti Brezza',
        price: '₹8.29 Lakh',
        stock: 'Available',
        image: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/139581/maruti-suzuki-brezza-right-front-three-quarter0.jpeg',
    },
    {
        name: 'Hyundai Creta',
        price: '₹10.87 Lakh',
        stock: 'Few Left',
        image: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/139865/hyundai-creta-right-front-three-quarter0.jpeg',
    },
    {
        name: 'Kia Seltos',
        price: '₹10.90 Lakh',
        stock: 'Out of Stock',
        image: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/137973/kia-seltos-right-front-three-quarter0.jpeg',
    },
    {
        name: 'Mahindra XUV700',
        price: '₹14.00 Lakh',
        stock: 'Available',
        image: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/131069/mahindra-xuv700-right-front-three-quarter0.jpeg',
    },
    {
        name: 'Maruti Swift',
        price: '₹5.99 Lakh',
        stock: 'Available',
        image: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/139913/maruti-suzuki-swift-right-front-three-quarter0.jpeg',
    },
    {
        name: 'Renault Kiger',
        price: '₹6.50 Lakh',
        stock: 'Available',
        image: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/139395/renault-kiger-right-front-three-quarter0.jpeg',
    },
    {
        name: 'Tata Punch',
        price: '₹6.00 Lakh',
        stock: 'Few Left',
        image: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/138927/tata-punch-right-front-three-quarter0.jpeg',
    },
    {
        name: 'Hyundai Venue',
        price: '₹7.72 Lakh',
        stock: 'Available',
        image: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/138479/hyundai-venue-right-front-three-quarter0.jpeg',
    },
    {
        name: 'Maruti Baleno',
        price: '₹6.61 Lakh',
        stock: 'Out of Stock',
        image: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/139911/maruti-suzuki-baleno-right-front-three-quarter0.jpeg',
    },
    {
        name: 'Kia Sonet',
        price: '₹7.99 Lakh',
        stock: 'Available',
        image: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/141539/kia-sonet-right-front-three-quarter0.jpeg',
    },
];


function Inventory() {
    return (
        <div className="inventory-page">
            <h1>Available Inventory</h1>
            <div className="inventory-grid">
                {inventory.map((car, index) => (
                    <div className="inventory-card" key={index}>
                        <img src={car.image} alt={car.name} />
                        <h3>{car.name}</h3>
                        <p className="price">{car.price}</p>
                        <p className={`stock ${car.stock === 'Out of Stock' ? 'out' : 'in'}`}>
                            {car.stock}
                        </p>
                        <button disabled={car.stock === 'Out of Stock'}>
                            {car.stock === 'Out of Stock' ? 'Sold Out' : 'Add to Cart'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Inventory;
