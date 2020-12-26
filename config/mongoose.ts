import {orderSchema} from '../models/order'; 

import {model} from 'mongoose';

export const Order = model('order', orderSchema); 