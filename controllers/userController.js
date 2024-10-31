const formularioLogin=(req,res)=>{
    res.render('auth/login',{
        //con la coma decimos que hay un segundo parámetro
        autenticado:true
    })
};

const formularioRegister=(request,response)=>{
    response.render('auth/register',{

    })
};

const formularioPasswordRecovery = (request,response)=>{
    response.render('auth/passwordRecovery',{

    })
}

export {formularioLogin,formularioRegister,formularioPasswordRecovery}



