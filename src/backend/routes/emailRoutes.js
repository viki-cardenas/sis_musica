import express from "express";
import { registerUser } from "../controllers/emailController.js";


const router = express.Router();
/**
 * @swagger
 * /api/email/register:
 *  post:
 *    summary: Register usuario y enviar
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
 *        description: Email enviado correctamente
 *      500:
 *        description: Error del servidor
 */
router.post("/register", registerUser);

export default router;

