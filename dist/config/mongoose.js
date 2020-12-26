"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
var order_1 = require("../models/order");
var mongoose_1 = require("mongoose");
exports.Order = mongoose_1.model('order', order_1.orderSchema);
