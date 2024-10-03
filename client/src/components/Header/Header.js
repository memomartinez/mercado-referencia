// src/components/Header/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Mercado Referencia</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/cart">Cart</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
