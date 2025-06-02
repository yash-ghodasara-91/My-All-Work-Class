import React from 'react';
import './Header.css';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';

function Header() {
  return (
    <header className="header">
      <div className="logo">Old<span>Car</span>Shop</div>

      <nav className="navbar">
        <a href="#">Home</a>
        <a href="#">Inventory</a>
        <a href="#">Services</a>
        <a href="#">Support</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
         <a href="#">Cars</a>
      </nav>

      <div className="nav-actions">
        <div className="users">
          <FaUserCircle className="user-icon" />
          <span>Yash Ghodasara</span>
        </div>

        <div className="cart">
          <FaShoppingCart className="cart-icon" />
          <span className="cart-count">2</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
