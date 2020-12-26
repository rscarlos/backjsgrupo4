import {Request, Response} from 'express';
import {Order} from '../config/mongoose'
import { CallbackError } from 'mongoose';

export var crearOrder = (req:Request, res:Response) => {
    
    Order.create(req.body, function(error:any, orderCreada:any){
        if(error){
            res.status(500).json({
                ok:false,
                content: error,
                message: 'Hubo un error al crear la Orden'
            })
        }else{
            res.status(201).json({
                ok:true,
                content: orderCreada,
                message: 'Orden creada exitosamente'
            })
        }
    }) 
}

export var devolverOrder = (req:Request, res:Response) => {
    let {userId} = req.params; 
    Order.find({userId:userId},(error, orders) => {
        if(error){
            res.status(500).json({
                ok: false,
                content: error,
                message: 'Hubo un error al solicitar ordenes'
            })
        }else{
            res.json({
                ok:true,
                content:orders,
                message:null
            })
        }
    })
}

export var devolverOrderPorId = (req:Request, res:Response) => {
    let {id} = req.params; 
    Order.findById(id,(error:any, orders:any) => {
        if(error){
            res.status(500).json({
                ok: false,
                content: error,
                message: 'Hubo un error al solicitar ordenes'
            })
        }else{
            res.json({
                ok:true,
                content:orders,
                message:null
            })
        }
    })
}
