// pages/Dashboard.jsx (Tu pantalla principal)

import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

const Dashboard = () => {
    const [profile, setProfile] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // 1. Extraer el Access Token de la URL
        const params = new URLSearchParams(window.location.search);
        const token = params.get('access_token');

        if (token) {
            fetchUserData(token); 
        } else {
            // Si no hay token (acceso directo), redirigir al login
            window.location.href = '/login'; 
        }
    }, []);

    const fetchUserData = async (token) => {
        const API_URL = 'http://localhost:3000/auth'; // Tu URL del Backend con el prefijo /auth

        try {
            // 2. Llama a tu Backend (que llama a Spotify) usando el token
            const profileResponse = await axios.get(`${API_URL}/profile`, {
                headers: {
                    Authorization: `Bearer ${token}` 
                }
            });
            setProfile(profileResponse.data);
            setIsLoading(false);

        } catch (error) {
            console.error("Error al cargar datos de Spotify:", error);
            setIsLoading(false);
            // Redirigir a la página de error si el token no funciona
            window.location.href = '/loginerror?message=token_expired'; 
        }
    };

    if (isLoading) {
        return <h1>Cargando tu Spotify Dashboard...</h1>;
    }

    if (!profile) {
        return <h1>No se pudo cargar el perfil. Por favor, inicia sesión de nuevo.</h1>;
    }

    // 3. Renderiza el contenido de tu página principal
    return (
        <div style={{ padding: '20px' }}>
            <h1>¡Bienvenido a tu Dashboard, {profile.display_name}!</h1>
            <p>Tu ID de Spotify es: {profile.id}</p>
            {profile.images && profile.images.length > 0 && (
                <img src={profile.images[0].url} alt="Perfil" style={{ width: '100px', borderRadius: '50%' }} />
            )}
            
            <hr />
            <p>Aquí es donde cargarías tus Top Artistas y Playlists.</p>
        </div>
    );
};

export default Dashboard;