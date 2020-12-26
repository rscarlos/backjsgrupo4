"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.devolverOrderPorId = exports.devolverOrder = exports.crearOrder = void 0;
var mongoose_1 = require("../config/mongoose");
var crearOrder = function (req, res) {
    mongoose_1.Order.create(req.body, function (error, orderCreada) {
        if (error) {
            res.status(500).json({
                ok: false,
                content: error,
                message: 'Hubo un error al crear la Orden'
            });
        }
        else {
            res.status(201).json({
                ok: true,
                content: orderCreada,
                message: 'Orden creada exitosamente'
            });
        }
    });
};
exports.crearOrder = crearOrder;
var devolverOrder = function (req, res) {
    var userId = req.params.userId;
    mongoose_1.Order.find({ userId: userId }, function (error, orders) {
        if (error) {
            res.status(500).json({
                ok: false,
                content: error,
                message: 'Hubo un error al solicitar ordenes'
            });
        }
        else {
            res.json({
                ok: true,
                content: orders,
                message: null
            });
        }
    });
};
exports.devolverOrder = devolverOrder;
var devolverOrderPorId = function (req, res) {
    var id = req.params.id;
    mongoose_1.Order.findById(id, function (error, orders) {
        if (error) {
            res.status(500).json({
                ok: false,
                content: error,
                message: 'Hubo un error al solicitar ordenes'
            });
        }
        else {
            res.json({
                ok: true,
                content: orders,
                message: null
            });
        }
    });
};
exports.devolverOrderPorId = devolverOrderPorId;
