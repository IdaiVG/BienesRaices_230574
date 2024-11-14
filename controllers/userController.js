import{check,validationResult} from "express-validator";
import User from '../models/User.js';
import { genetatetId } from '../helpers/tokens.js'
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
    await check('correo_usuario').notEmpty().withMessage('El correo electrónico es un campo obligatorio').isEmail().withMessage('El correo electrónico no tiene el formato correcto').run(req);

    //await check('nombre_correo').notEmpty().withMessage("El correo del usuario es un campo oblgatorio").isEmail().withMessage("El correo electrónico no tiene el formato de: usaurio@dominio.extension").run(req)
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

    //Destructuura los parametros del request
    const {nombre_usuario:name, correo_usuario:email,pass_usuario}=req.body
    //Verificar que el usuario no existe previamente en la BD
    const existingUser=await User.findOne({where:{email}})
    console.log(existingUser)

    if(existingUser){
        return res.render("auth/register",{
            page: 'Error al intentar crear la cuenta de usuario',
            errors:[{msg: `El usuario ${email} ya se encuentra registrado.`}],
            user:{
                name:name
            }
        })
    }
    console.log("Registrando a un nuevo usuario.");
    console.log(req.body);
    
    //Registramos los datos en la base de datos.
    const newUser = await User.create({
        name:req.body.nombre_usuario,
        email:req.body.correo_usuario,
        password:req.body.pass_usuario,
    });
    res.json(newUser);
    res.render('templates/message',{
        page: 'Cuenta creada correctamente',
        message: 'Hemos enviado un Email de Confirmación',
    })
}

export {formularioLogin,formularioRegister,formularioPasswordRecovery,createNewUser}



