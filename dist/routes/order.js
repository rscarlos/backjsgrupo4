"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.order_router = void 0;
var express_1 = require("express");
var order_1 = require("../controllers/order");
exports.order_router = express_1.Router();
exports.order_router.post('/order', order_1.crearOrder);
exports.order_router.get('/order/:userId', order_1.devolverOrder);
exports.order_router.get('/orderporid/:id', order_1.devolverOrderPorId);
