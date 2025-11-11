// spotifyService.js

const fetch = require('node-fetch');

// --- Carga de Variables de Entorno ---
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const BACKEND_PORT = process.env.PORT || 3000;
const REDIRECT_URI = `http://localhost:${BACKEND_PORT}/callback`;


/**
 * 1. Servicio para obtener el Access Token (Usado por handleCallback)
 * @param {string} code - Código de autorización recibido de Spotify.
 * @returns {object} Los datos de token de Spotify (access_token, refresh_token, expires_in).
 */
const getAccessToken = async (code) => {
    try {
        const response = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Authorization': 'Basic ' + Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64'),
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                grant_type: 'authorization_code',
                code: code,
                redirect_uri: REDIRECT_URI
            })
        });

        const data = await response.json();
        return data; // Contiene access_token o un error
    } catch (error) {
        console.error('Error en el servicio de obtener token:', error);
        throw new Error('Fallo en la comunicación con el servidor de tokens de Spotify.');
    }
};


/**
 * 2. Servicio para hacer peticiones GET a la API de Spotify (Usado por getProfile, getTopArtists, etc.)
 * @param {string} endpoint - El path de la API de Spotify (e.g., '/v1/me', '/v1/me/top/artists').
 * @param {string} accessToken - El Access Token del usuario.
 * @returns {object} Los datos JSON de la API.
 */
const fetchSpotifyData = async (endpoint, accessToken) => {
    try {
        const response = await fetch(`https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb${endpoint}`, {
            headers: { 'Authorization': `Bearer ${accessToken}` }
        });

        if (!response.ok) {
            // Manejar errores de API de Spotify (401, 403, 404, etc.)
            const errorData = await response.json();
            throw new Error(`Spotify API Error: ${response.status} - ${errorData.error.message || response.statusText}`);
        }

        return response.json();
    } catch (error) {
        console.error(`Error al obtener datos de Spotify para ${endpoint}:`, error);
        throw error;
    }
};

module.exports = {
    getAccessToken,
    fetchSpotifyData,
    // Puedes añadir getRefreshedToken(refreshToken) aquí también
};