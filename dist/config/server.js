"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var mongoose_1 = __importDefault(require("mongoose"));
var order_1 = require("../routes/order");
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1.default();
        this.app.use(function (req, res, next) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Authorization, Content-Type, Access-Content-Type, Accept');
            res.header('Access-Control-Allow-Methods', 'GET-POST-PUT-DELETE');
            next();
        });
        this.puerto = process.env.PORT || 8000;
        this.configurarBodyParser();
        this.rutas();
        this.conectarMongo();
    }
    Server.prototype.configurarBodyParser = function () {
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        this.app.use(body_parser_1.default.json());
    };
    Server.prototype.rutas = function () {
        this.app.get('/', function (req, res) {
            res.send('Bienvenido a mi  API');
        });
        this.app.use('', order_1.order_router);
    };
    Server.prototype.iniciarServidor = function () {
        var _this = this;
        this.app.listen(this.puerto, function () {
            console.log('Servidor corriendo exitosamente en el puerto', _this.puerto);
        });
    };
    Server.prototype.conectarMongo = function () {
        // mongoose.connect('mongodb://localhost:27017/tiendavirtual', {useNewUrlParser: true, 
        mongoose_1.default.connect('mongodb+srv://tiendavirtual:tiendavirtual@cluster0.sjzum.mongodb.net/tiendavirtual', { useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
    };
    return Server;
}());
exports.default = Server;
