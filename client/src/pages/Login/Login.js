// src/pages/Login.js
import React, { useEffect, useState } from 'react';
import '../Login/Login.css'; // Asegúrate de importar el archivo CSS


const Login = () => {
    // Estado para manejar el tiempo restante
    const [timeLeft, setTimeLeft] = useState(300); // 300 segundos para 5 minutos

    useEffect(() => {
        // Función para contar hacia atrás
        const timer = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime <= 1) {
                    clearInterval(timer);
                    return 0; // Detener el temporizador
                }
                return prevTime - 1; // Disminuir el tiempo
            });
        }, 1000);

        return () => clearInterval(timer); // Limpiar el temporizador al desmontar el componente
    }, []);

    // Función para formatear el tiempo en minutos y segundos
    const formatTimeLeft = (time) => {
        const minutes = String(Math.floor(time / 60)).padStart(2, '0');
        const seconds = String(time % 60).padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    return (
        <div className="login">
            <h1>Iniciar Sesión</h1>
            <form>
                <div>
                    <label htmlFor="username">Usuario:</label>
                    <input type="text" id="username" required />
                </div>
                <div>
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" id="password" required />
                </div>
                <button type="submit">Iniciar Sesión</button>
            </form>
            <div className="links">
                <a href="/register">Registrarse</a>
                <a href="/forgot-password">Olvidé la contraseña</a>
            </div>
            <div className="timer">
                <p>Tiempo restante: {formatTimeLeft(timeLeft)}</p>
            </div>
        </div>
    );
};

export default Login;
