import { verifyToken } from "../utils/auth.js";

export const authenticate = (req,res,next) =>{
    try{
        //Verificar si tiene token
        const token = req.headers.authorization?.split(" ")[1];

        if(!token){
            return res.status(401).json({
                success: false,
                message: "Token no proprocionado"
            });
       }

        //Verificar si el token es válido
        const decoded = verifyToken(token);
        if(!decoded){
            return res.status(401).json({
                succes: false,
                message: "Token es inválido o expirado"
            });
        }

        req.user = decoded;
        next()

    }catch(error){
        req.status(500).json({
            success: false,
            message: "Error de autenticación"
        });

       }
    };

