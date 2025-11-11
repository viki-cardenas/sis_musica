import React from 'react';

// --- (Reemplaza con tus valores reales) ---
const CLIENT_ID = '4446f1428748469ca0b02123fea6849b';
const REDIRECT_URI = 'http://localhost:3000/callback'; 
const SCOPES = [
  'user-read-private', 
  'user-read-email', 
  'playlist-read-private'
].join('%20'); // Los espacios deben codificarse como %20 en la URL
// ----------------------------------------

const AUTH_URL = `https://accounts.spotify.com/authorize?` + 
                 `client_id=${CLIENT_ID}` + 
                 `&response_type=code` + 
                 `&redirect_uri=${REDIRECT_URI}` + 
                 `&scope=${SCOPES}`;

const Navbar = () => {
    
    // Función que se llama al hacer clic en el botón de login
    const handleLogin = () => {
        // Redirige al navegador del usuario a la URL de autenticación de Spotify
        window.location = AUTH_URL;
    };

    return (
        <nav className="navbar">
            {/* Otros elementos del Navbar */}
            
            <button 
                onClick={handleLogin} 
                style={{ 
                    padding: '10px 20px', 
                    backgroundColor: '#1DB954', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '50px',
                    cursor: 'pointer'
                }}
            >
                Login con Spotify
            </button>
            
        </nav>
    );
};

export default Navbar;