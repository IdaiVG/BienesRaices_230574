import Sequelize from 'sequelize'
import dotenv from 'dotenv'
dotenv.config({path:'.env'})

const db = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASS ,{
    host:process.env.DB_DOMAIN,
    port:process.env.DB_PORT,
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