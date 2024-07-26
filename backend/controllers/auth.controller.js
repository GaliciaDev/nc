import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';  //Importar modelo de encriptacion
import jwt from 'jsonwebtoken'; //Importar modelo de token tipo cache
import { token } from 'morgan';

export const register = async (req, res) => {
    //Captura los datos de la peticion
    const { username,email,password } = req.body;

    //Validacion para evitar exepciones
    try {
        //Algoritmo de encriptacion
        const  passwordhash = await bcrypt.hash(password, 10)


        //Crear el usuario y guardarlo en un objeto
            const newUser = new User(
                {
                    username,
                    email,
                    password: passwordhash,
                });


        //Guardar el usuario en la base de datos
            const userSaved = await newUser.save();

        //Generar el token
        res.cookie('token', token);
            res.json({
                message: "Usuario creado correctamente",
                });
        





            /* Mandar los datos al frontend */
 /*            res.json(
                {
                    _id: userSaved._id,
                    username: userSaved.username,
                    email: userSaved.email,
                    createdAt: userSaved.createdAt,
                    updatedAt: userSaved.updatedAt
                                        
                }
            ); */
            
        
    } catch (error) {
        console.log(error);
    }

   
    
}

export const login = async (req, res) => res.send("Login");


