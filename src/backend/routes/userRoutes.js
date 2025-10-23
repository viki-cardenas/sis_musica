import express from 'express';
import { userController } from '../controllers/userController.js';

const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          example: 1
 *        email:
 *          type: string
 *          example: victoria@gmail.com
 *        name:
 *          type: string
 *          example: victoria
 */


/**
 * @swagger
 * /api/users:
 *  get:
 *    summary: Obtener todos los usuarios
 *    tags: [Users]
 *    responses:
 *      200:
 *        description: OK
 * 
 */
router.get("/", userController.getUsers);

/**
 * @swagger
 * /api/users:
 *  post:
 *    summary: Crear nuevo usuario
 *    tags: [Users]
 *    requestBody: 
 *      required: true
 *      content:
 *        application/json:
 *          schema: 
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *                example: victoria@gmail.com
 *              name:
 *                type: string
 *                example: victoria
 *    responses: 
 *      201:
 *        description: Usuario creado correctamente
 *        content:
 *          application/json:
 *            $ref: '#/components/schemas/User'
 *      400:
 *        description: Datos invalidos
 *      500:
 *        description: Error del servidor
 * 
 */
router.post("/", userController.createUser);

//Rutas para llamar al usuario
router.get('/',userController.getUsers);
router.post('/',userController.createUser);
router.put('/:id',userController.updateUser);

//Metodo para eliminar DELETE
//Metodo para actualizar PUT
//Metodo para modificar PATCH

export default router;
