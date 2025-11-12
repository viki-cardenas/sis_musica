// pages/Playlists.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import PlaylistItem from '../components/PlaylistItem'; 

const Playlists = () => {
    const [playlists, setPlaylists] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // Tu URL base del backend, incluyendo el prefijo de las rutas de la API
    const API_URL = 'http://localhost:3000/auth'; 

    useEffect(() => {
        // 1. Obtener el token de la sesión
        // o en un Context/Redux, no solo en la URL, pero usaremos este método por simplicidad.
        const params = new URLSearchParams(window.location.search);
        const accessToken = params.get('access_token'); 

        if (accessToken) {
            fetchUserPlaylists(accessToken);
        } else {
            // Si no hay token, redirigir al login
            window.location.href = '/login'; 
        }
    }, []);

    const fetchUserPlaylists = async (token) => {
        setIsLoading(true);
        try {
            // Llama a tu Backend, que a su vez llama al endpoint /v1/me/playlists de Spotify
            const response = await axios.get(`${API_URL}/playlists`, {
                headers: {
                    // 2. Enviar el Access Token en el encabezado
                    Authorization: `Bearer ${token}` 
                }
            });
            
            // Spotify devuelve un objeto con un array "items"
            setPlaylists(response.data.items || response.data); 
            setError(null);

        } catch (err) {
            console.error("Error al cargar playlists:", err);
            setError("No se pudieron cargar las listas de reproducción. ¿El token es válido?");
            // Si el token expira o es inválido, redirigir al login
            if (err.response && err.response.status === 401) {
                 window.location.href = '/loginerror?message=token_expired';
            }
        } finally {
            setIsLoading(false);
        }
    };

    // --- Lógica de Renderizado ---
    if (isLoading) {
        return <h2 style={{ padding: '20px' }}>Cargando tus Playlists... 🎶</h2>;
    }

    if (error) {
        return <h2 style={{ padding: '20px', color: 'red' }}>Error: {error}</h2>;
    }

    return (
        <div style={{ padding: '20px' }}>
            <h1>Mis Listas de Reproducción</h1>
            
            {playlists.length === 0 ? (
                <p>No tienes listas de reproducción en tu biblioteca.</p>
            ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
                    {playlists.map((playlist) => (
                        <div key={playlist.id} style={cardStyle}>
                            {playlist.images && playlist.images.length > 0 && (
                                <img 
                                    src={playlist.images[0].url} 
                                    alt={playlist.name} 
                                    style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                                />
                            )}
                            <h3 style={{ fontSize: '1.1em', marginTop: '10px' }}>{playlist.name}</h3>
                            <p style={{ fontSize: '0.8em', color: '#888' }}>Por: {playlist.owner.display_name}</p>
                            {/* Aquí puedes agregar un link para ir a /playlist/[id] */}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const cardStyle = {
    backgroundColor: '#181818',
    borderRadius: '8px',
    padding: '15px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    transition: 'transform 0.2s',
    ':hover': { transform: 'scale(1.02)' }
};

export default Playlists;