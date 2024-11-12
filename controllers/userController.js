import{check,validationResult} from "express-validator";
import User from '../models/User.js';
const formularioLogin=(req,res)=>{
    res.render('auth/login',{
        //con la coma decimos que hay un segundo parámetro
        autenticado:true,
        page: "Ingresa a la Plataforma"
    })
};

const formularioRegister=async(request,response)=>{
    response.render('auth/register',{
        page: "Crea una Nueva Cuenta..."
    })
};

const formularioPasswordRecovery = (request,response)=>{
    response.render('auth/passwordRecovery',{
        page: "Recuperación de Contraseña"
    })
}

const createNewUser=async(req,res)=>{
//Validación de los campos que se reciben del formulario
    await check('nombre_usuario').notEmpty().withMessage("El nombre del usuario es un campo oblgatorio").run(req)
    await check('nombre_correo').isEmail().withMessage("El correo del usuario es un campo oblgatorio").isEmail().withMessage("El correo electrónico no tiene el formato de: usaurio@dominio.extension").run(req)
    await check('pass_usuario').notEmpty().withMessage("La contraseña es un campo Obligatorio").isLength({min:8}).withMessage("La contraseña del usuario debe ser de almenos 8 caracteres").run(req)
    await check('pass2_usuario').equals(req.body.pass_usuario).withMessage("La contraseña debe coincidir con la anterior").run(req)
    let resultado=validationResult(req)
    //return res.json(resultado.array())
    //verificamos que el usuario este vacio
    if(!resultado.isEmpty()){
        //Errores
        return res.render('auth/register',{
            page: 'Error al intentar crear la cuenta de usuario',
            errors:resultado.array(),
        })
    }
    else{
        console.log('Registrando a un Nuevo Usuario...');
        console.log(req.body);
    }
    res.json(resultado.array());

    
    //Registramos los datos en la base de datos.
    const newUser = await User.create({
        name:req.body.nombre_usuario,
        email:req.body.correo_usuario,
        password:req.body.pass_usuario,
    });
    res.json(newUser);
}

export {formularioLogin,formularioRegister,formularioPasswordRecovery,createNewUser}



