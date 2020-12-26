import {Router} from 'express';
import  {crearOrder, devolverOrder, devolverOrderPorId} from '../controllers/order';
export var order_router = Router(); 

order_router.post('/order', crearOrder);
order_router.get('/order/:userId', devolverOrder);
order_router.get('/orderporid/:id', devolverOrderPorId);