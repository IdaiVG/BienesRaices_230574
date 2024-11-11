//ECMA Sript 6
// commin JS

import express from 'express';
import generalRoutes from './routes/generalRoutes.js'
import userRoutes from './routes/userRoutes.js'
import db from './db/config.js'
//const express = require('express'); //DECLARANDO UN OBJETO QUE VA A PERMITIR LEER PAGINAS ETC.importar la libreria para crear un servidor web

//INSTANCIAR NUESTRA APLICACIÓN WEB

const app = express();

//Conexión a la base de datos
try{
  await db.authenticate();//verifico las credenciales del usuario
  db.sync();//sincroniza las tablas con los modelos
  console.log('Conexión Correcta a la Base de Datos')
}catch(error){
  console.log(error)
}

//Definir la carpeta pública de recursos estáticos (assets)
app.use(express.static('./public'));

//CONFIGURAMOS NUESTRO SERVIDOR WEB (puerto donde estara escuchando nuestro sitio web)
const port = 3000;
app.listen(port, () => {
  console.log(`La aplicación ha iniciado en el puerto: ${port}`);  
});

//Routing - Enrutamiento
app.use('/',generalRoutes);
app.use('/auth/', userRoutes);
//Probamos rutas para poder presentar mensajes al usuario a través del navegador


//Habilitar pug
//Set es para hacer configuraciones
app.set('view engine','pug')
app.set('views','./views')//se define donde tendrá el proyecto las vistas
//auth -> auntentificación

//Habilitamos la lectura de datos desde formularios
app.use(express.urlencoded({encoded:true}));