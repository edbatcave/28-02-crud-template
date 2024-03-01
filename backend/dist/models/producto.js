"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conexion_1 = __importDefault(require("../db/conexion"));
const Producto = conexion_1.default.define('Productos', {
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING
    },
    valor: {
        type: sequelize_1.DataTypes.DOUBLE
    },
    cantidad: {
        type: sequelize_1.DataTypes.NUMBER
    },
    url: {
        type: sequelize_1.DataTypes.TEXT
    }
}, {
    createdAt: false,
    updatedAt: false,
});
exports.default = Producto;
