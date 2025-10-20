import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient;

export const userServices = {
    
    //Crear usuario
    async createUser(data){
        try{
            const{email, name} = data;
            return await prisma.user.create({
                data :{email, name}
            })
        }catch(error){
            throw error('Error al crear usuario' + error.message);
        }
    },

    //Obtener mis usuarios
    async getAlUsers(){
        try{
            return await prisma.user.findMany()
        }catch(error){
            throw error('Error al obtener usuarios' + error.message);
        }
    }

}
    