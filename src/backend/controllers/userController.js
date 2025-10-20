import { userServices } from "../services/userServices.js";

export const userController = {
    async getUsers(res){
        try{
            const users = await userServices.getAllUsers();
            res.status(200).json({
                succes: true,
                data: users
            })
        }catch(error){
            res.status(500).json({
                succes: false,
                message: error.message
            })
        }
    },

    async createUser(req,res){
        try{
            const {email, name} = req.body;
            //Validación
            if(!email || !name){
                return res.status(400).json({
                    succes: false,
                    message: 'Email y nombre son obligatorios.'
                });
            }
            const newUser = await userServices.createUser({email, name});
            res.status(201).json({
                succes: true,
                data: newUser,
                message: 'Usuario creado exitosamente.'
            });
        }catch(error){
            res.status(500).json({
                succes: false,
                message: error.message
            })
        }
    }
}