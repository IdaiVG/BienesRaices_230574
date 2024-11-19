import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config({path:'.env'})

const emailAfterRegister=async(newUserData)=>{
    const transport = nodemailer.createTransport({
        host: process.env.Email_HOST,
        port: process.env.Email_PORT,
        auth: {
            user: process.env.Email_USER,
            pass: process.env.Email_PASS,
        }
    })

    //console.log(data)
    const { email, name, token } = data;

    //Enviar el email
    await transport.sendMail({
        from: 'BienesRaices_230574.com',
        to: email,
        subject:'Binevenido/a al BinesRaices_230574',
        text:'Ya casi puedes usar nuestra plataforma, solo falta...',
        html:`<p>Hola,<span style="color: red"> ${name}</span>,<br>
        Bienvenido a la plataforma de BienesRaíces, el sitio seguro donde podrás buscar, comprar y ofertar propiedades a través de internet.
        <br>
        <p>Ya solo necesitamos que confirmes la cuenta que creaste, dando clic en la siguiente liga: <a href="${process.env.BACKEND_DOMAIN}:${process.BACKEND_PORT}/confirmAccount/${token}">Confirmar cuenta </a></p>
        <br>
        <p>Si tu no has creado la cuenta ignora este mensaje</p>`
    })
}
export{emailAfterRegister}