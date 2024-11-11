import Sequelize from 'sequelize'
import dotenv from 'dotenv'
dotenv.config({path:'.env'})

const db = new Sequelize(process.env.BD_NAME,process.env.BD_USER,process.env.BD_PASS ,{
    host:process.env.BD_DOMAIN,
    port:process.env.BD_PORT,
    dialect:'mysql',
    define:{
        timestamps:true
    },
    pool:{
        max:5,
        min:0,
        acquire:30000,  //Timepo o milisegundos que es el tiempo para hacer petisiones si tarda da error
        idle:10000     //es el tiempo que queda para apagar en caso de inactividad
    },
    operatorAliases:false 
});

export default db;