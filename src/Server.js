// Server.js

const express = require('express');
const cors = require('cors'); 
require('dotenv').config(); 

// 🚨 ESTA ES LA LÍNEA CLAVE:
// Importa el archivo spotifyRoutes.js, asumiendo que está al mismo nivel que Server.js
const spotifyRoutes = require('./spotifyRoutes'); 

// ... el resto de tu código ...

const app = express();

// ...

// Monta las rutas importadas
app.use('/auth', spotifyRoutes); 
// Esto hace que la lógica de spotifyRoutes.js sea accesible en las URLs que empiezan con /auth.

// ...

