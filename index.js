//ECMA Sript 6
// commin JS

import express from 'express';
//const express = require('express'); //DECLARANDO UN OBJETO QUE VA A PERMITIR LEER PAGINAS ETC.importar la libreria para crear un servidor web

//INSTANCIAR NUESTRA APLICACIÓN WEB

const app = express();

//CONFIGURAMOS NUESTRO SERVIDOR WEB (puerto donde estara escuchando nuestro sitio web)
const port = 3000;
app.listen(port, () => {
  console.log(`La aplicación ha iniciado en el puerto: ${port}`);  
});

//Probamos rutas para poder presentar mensajes al usuario a través del navegador
app.get("/",function(req, res){
    res.send("Hola mundo desde Node, a través del navegador")
});
app.get("/QuienSoy",function(req, res){
    res.json({"Estudiante": "Guadalupe Idai Vargas Galindo",
        "grado":"4°",
        "grupo":"B",
        "asignatura":"Aplicaciones de Software Orientado a Servicios (AWOS)"});
    })