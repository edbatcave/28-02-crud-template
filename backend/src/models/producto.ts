import { DataTypes } from 'sequelize';
import db from '../db/conexion';

const Producto = db.define('Productos', {
    nombre: {
        type: DataTypes.STRING
    },
    descripcion :{
        type: DataTypes.STRING
    },
    valor:{
        type: DataTypes.DOUBLE
    },
    cantidad:{
        type: DataTypes.NUMBER
    },
    url:{
        type: DataTypes.TEXT
    }

}, {
    createdAt: false,
    updatedAt: false,
});

export default Producto;
