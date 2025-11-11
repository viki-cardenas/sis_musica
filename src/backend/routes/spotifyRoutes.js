// spotifyRoutes.js

const express = require('express');
const router = express.Router();
const spotifyController = require('./spotifyControllers'); 

/**
 * @swagger
 * /api/music/login:
 *  post:
 *    summary: Register cancion y enviar
 *    tags: [Email]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: object
 *                example: victoria@gmail.com
 *              name:
 *                type: string
 *                example: Victoria Cardenas
 *    responses:
 *      200:
 *        description: music enviado correctamente
 *      500:
 *        description: Error del servidor
 */
router.get('/login', spotifyController.handleLogin); 

/**
 * @swagger
 * /api/callback/login:
 *  post:
 *    summary: Register cancion y enviar
 *    tags: [Email]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: object
 *                example: victoria@gmail.com
 *              name:
 *                type: string
 *                example: Victoria Cardenas
 *    responses:
 *      200:
 *        description: music enviado correctamente
 *      500:
 *        description: Error del servidor
 */
router.get('/callback', spotifyController.handleCallback);


/**
 * @swagger
 * /api/profile/login:
 *  get:
 *    summary: Busqueda de canciones
 *    tags: [Email]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: object
 *                example: victoria@gmail.com
 *              name:
 *                type: string
 *                example: Victoria Cardenas
 *    responses:
 *      200:
 *        description: music enviado correctamente
 *      500:
 *        description: Error del servidor
 */
 router.get('/profile', spotifyController.getProfile);


/**
 * @swagger
 * /api/top-artists/login:
 *  get:
 *    summary: Busqueda de canciones
 *    tags: [Email]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: object
 *                example: victoria@gmail.com
 *              name:
 *                type: string
 *                example: Victoria Cardenas
 *    responses:
 *      200:
 *        description: music enviado correctamente
 *      500:
 *        description: Error del servidor
 */
router.get('/top-artists', spotifyController.getTopArtists);

/**
 * @swagger
 * /api/playlist/login:
 *  get:
 *    summary: Busqueda de canciones
 *    tags: [Email]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: object
 *                example: victoria@gmail.com
 *              name:
 *                type: string
 *                example: Victoria Cardenas
 *    responses:
 *      200:
 *        description: music enviado correctamente
 *      500:
 *        description: Error del servidor
 */
router.get('/playlists', spotifyControllers.getPlaylists);


module.exports = router;