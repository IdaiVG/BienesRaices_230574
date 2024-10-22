import express from 'express';

const router =  express.Router;

//GET
router.get("/busquedaPorID/:id", function (request, response){
    response.send(`Se esta solicitando buscar al usuario con ID: ${request.params.id}`)
})   //2 componentes de una petición ruta y función callback - La ruta es la que pide la información el callback es lo que se va a hacer

//POST

//PUT

//PATCH


export default router;