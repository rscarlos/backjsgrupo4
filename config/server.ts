import express from 'express';
import bodyParser from 'body-parser';
import {Request, Response, NextFunction} from 'express';
import mongoose from 'mongoose';

import {order_router} from '../routes/order'; 
 

export default class Server{
    public app:express.Application;
    public puerto:any;


    constructor(){
        this.app = express();
        this.app.use((req:Request,res:Response,next:NextFunction) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Authorization, Content-Type, Access-Content-Type, Accept')
            res.header('Access-Control-Allow-Methods', 'GET-POST-PUT-DELETE');
            next();
        })
        this.puerto = process.env.PORT || 8000;
        this.configurarBodyParser();
        this.rutas();
        this.conectarMongo();
    }

    configurarBodyParser(){
        
        this.app.use(bodyParser.urlencoded({extended: false}));
        this.app.use(bodyParser.json());
    }

    rutas(){
        this.app.get('/', (req:Request, res:Response) => {
            res.send('Bienvenido a mi  API');
        })

        this.app.use('', order_router);
    }

    iniciarServidor(){
        this.app.listen(this.puerto, () => {
            console.log('Servidor corriendo exitosamente en el puerto', this.puerto);
        })
    }

    conectarMongo(){
        // mongoose.connect('mongodb://localhost:27017/tiendavirtual', {useNewUrlParser: true, 
        mongoose.connect('mongodb+srv://tiendavirtual:tiendavirtual@cluster0.sjzum.mongodb.net/tiendavirtual', {useNewUrlParser: true, 
        useFindAndModify: false, 
        useUnifiedTopology:true,
        useCreateIndex:true
    })
    } 
}


