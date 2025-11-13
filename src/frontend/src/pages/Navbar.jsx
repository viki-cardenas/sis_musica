// Archivo: components/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Necesitas React Router para los links

const Navbar = ({ user }) => {
    
    // Función de cierre de sesión
    const handleLogout = () => {
        // Elimina el token (similar a lo que hicimos en Home.jsx)
        localStorage.removeItem('spotify_access_token');
        // Opcional: Recarga o redirige al usuario a la página de login
        window.location.href = '/'; 
    };

    // Define los enlaces principales de tu aplicación (las 5 vistas)
    const navItems = [
        { name: 'Inicio', path: '/dashboard' }, // O '/home'
        { name: 'Búsqueda', path: '/search' },
        { name: 'Playlists', path: '/playlists' },
        { name: 'Artistas', path: '/artists' }, // Detalles de Artista/Álbum
        { name: 'Perfil', path: '/profile' },   // Perfil de Usuario/Ajustes
    ];

    return (
        // CONTENEDOR PRINCIPAL: Fondo negro profundo, ancho completo, sombra sutil verde
        <nav className="bg-gray-900 border-b border-green-700/50 shadow-lg shadow-green-900/50 p-4 sticky top-0 z-50">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
                
                {/* 1. Logo/Nombre de la Aplicación */}
                <Link to="/dashboard" className="text-2xl font-extrabold text-green-400 hover:text-green-300 transition duration-150">
                    🎵 Mi Música App
                </Link>

                {/* 2. Enlaces de Navegación (para escritorio) */}
                <div className="hidden md:flex space-x-6">
                    {navItems.map((item) => (
                        <Link 
                            key={item.name}
                            to={item.path}
                            // Color y hover: Texto gris claro, con hover verde neón
                            className="text-gray-300 font-medium hover:text-green-400 transition duration-150"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* 3. Perfil de Usuario y Logout */}
                <div className="flex items-center space-x-4">
                    
                    {/* Avatar del usuario (simulado) */}
                    {user && (
                        <img 
                            src={user.avatar || "https://via.placeholder.com/32/0f0f0f?text=U"} 
                            alt="User Avatar" 
                            className="w-8 h-8 rounded-full border-2 border-green-400"
                        />
                    )}

                    {/* Botón de Logout */}
                    <button
                        onClick={handleLogout}
                        // Botón de acción: Borde verde, fondo transparente, texto verde
                        className="px-3 py-1 text-sm font-semibold text-green-400 border border-green-400 
                                   rounded-full hover:bg-green-700 hover:text-white transition duration-200"
                    >
                        Salir
                    </button>
                </div>
            </div>
            
            {/* Opcional: Menú móvil (se puede implementar si es necesario) */}
            {/* Aquí puedes añadir un botón de hamburguesa que muestre los navItems en una columna */}
        </nav>
    );
};

export default Navbar;