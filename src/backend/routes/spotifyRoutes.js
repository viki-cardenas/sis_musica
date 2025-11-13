import express from "express";
import { PrismaClient } from "@prisma/client";
import { guardarspotifyEnDB } from "../services/spotifyServices.js"; // 👈 Importamos el servicio


const router = express.Router();
const prisma = new PrismaClient();

/**
 * @swagger
 * tags:
 *   name: Music
 *   description: Endpoints para gestión de spotify
 */

/**
 * @swagger
 * /api/music:
 *   get:
 *     summary: Obtener todas las musicas
 *     tags: [music]
 *     responses:
 *       200:
 *         description: Lista de musicas obtenida exitosamente
 *       500:
 *         description: Error del servidor
 */
router.get("/", async (req, res) => {
  try {
    const spotify = await prisma.spotify.findMany({
      orderBy: { createdAt: "desc" },
    });
    res.json(spotify);
  } catch (error) {
    console.error("Error al obtener la musica:", error);
    res.status(500).json({ error: "Error al obtener la musica" });
  }
});

/**
 * @swagger
 * /api/music:
 *   post:
 *     summary: Agregar nueva musica
 *     tags: [music]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: spotify
 *               descripcion:
 *                 type: string
 *                 example: Escuchar tipos de musica.
 *               imagen:
 *                 type: string
 *                 example: https://example.com/musicspotify.jpg
 *     responses:
 *       201:
 *         description: Agregado exitosamente
 *       500:
 *         description: Error al agregar la musica
 */
router.post("/", async (req, res) => {
  try {
    const { nombre, imagen, descripcion } = req.body;
    const agregado = await prisma.agregado.create({
      data: { nombre, imagen, descripcion },
    });
    res.status(201).json(agregado);
  } catch (error) {
    console.error("Error al agregar la musica:", error);
    res.status(500).json({ error: "Error al agregar la musica" });
  }
});

/**
 * @swagger
 * /api/music/eliminar:
 *   post:
 *     summary: eliminar musicas desde una API externa
 *     tags: [music]
 *     responses:
 *       200:
 *         description: eliminando musica exitosamente
 *       500:
 *         description: Error al eliminar musica
 */
// dentro de /eliminar route
router.post("/eliminar", async (req, res) => {
  try {
    const usePaginated = req.query.paged === "true";
    const resultado = await guardarJuegosEnDB({ usePaginated });
    res.json({ ok: true, ...resultado });
  } catch (error) {
    console.error("Error al eliminar la musica:", error);
    res.status(500).json({ error: "Error al eliminar la musica" });
  }
});

export default router;
