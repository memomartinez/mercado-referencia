// src/pages/Home/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Asegúrate de importar el CSS del componente

const Home = () => {
    return (
        <div className="home">
            <div className="offer-container">
                <h2>¡Gran Oferta!</h2>
                <p>Obtén un 30% de descuento en tu primera compra.</p>
                <Link to="/login">
                    <button className="buy-button">Comprar Ahora</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
