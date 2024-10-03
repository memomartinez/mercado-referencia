// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';  // Asegúrate que el path sea correcto
import Footer from './components/Footer/Footer';    // Asegúrate que el path sea correcto
import Home from './pages/Home/Home';               // Asegúrate que el path sea correcto
import Cart from './pages/Cart/Cart';               // Asegúrate que el path sea correcto
import Login from './pages/Login/Login';             // Asegúrate que el path sea correcto
import './App.css';
import './styles/global.css'; // Importa tus estilos globales aquí

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
