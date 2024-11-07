import {DataTypes, STRING} from 'sequelize'
import db from '../config/db.js'
const Usuario=db.define('usuarios',{
    nombre: {
        type:DataTypes,STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull_:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull_:false
    },
    token:DataTypes.STRING,
    confirmado: DataTypes.BOOLEAN
})

export default Usuario
