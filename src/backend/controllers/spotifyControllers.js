// spotifyController.js

const fetch = require('node-fetch');

// --- Carga de Variables de Entorno (desde el archivo .env) ---
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const FRONTEND_URI = process.env.FRONTEND_URI || 'http://localhost:5173';
const BACKEND_PORT = process.env.PORT || 3000;
const REDIRECT_URI = `http://localhost:${BACKEND_PORT}/callback`;

const SCOPES = 'user-read-private user-read-email playlist-read-private';


/**
 * @function handleCallback
 * CRÍTICO: Intercambia el código de autorización por el Access Token y redirige a la pantalla principal.
 */
const handleCallback = async (req, res) => {
    const code = req.query.code || null;

    if (!code) {
        return res.redirect(`${FRONTEND_URI}/error?message=no_code`);
    }

    try {
        // Intercambio de tokens
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

        if (data.access_token) {
            // 🚀 REDIRECCIÓN FINAL A TU PANTALLA PRINCIPAL
            const accessToken = data.access_token;
            return res.redirect(`${FRONTEND_URI}/dashboard?access_token=${accessToken}`); 
            
        } else {
            console.error('Fallo al obtener tokens:', data);
            return res.redirect(`${FRONTEND_URI}/error?message=${data.error || 'token_failure'}`);
        }
    } catch (error) {
        console.error('Error durante el intercambio:', error);
        return res.redirect(`${FRONTEND_URI}/error?message=server_error`);
    }
};
// ...