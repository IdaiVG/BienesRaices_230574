import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config({path:'.env'})

const emailAfterRegister=async(data)=>{
    const transport = nodemailer.createTransport({
        host: process.env.Email_HOST,
        port: process.env.Email_PORT,
        auth: {
            user: process.env.Email_USER,
            pass: process.env.Email_PASS,
        },
    });

    //console.log(data)
    const { email, name, token } = data;

    //Enviar el email
    await transport.sendMail({
        from: 'BienesRaices_230574.com',
        to: email,
        subject:'Binevenido/a al BinesRaices_230574',
        text:'Ya casi puedes usar nuestra plataforma, solo falta...',
        html:`
        <header style="font-family: Arial, sans-serif; text-align: center; line-height: 1.2;">
        <h1 style="font-weight: bold; color: #333;">Bienes Raíces</h1>
        <h2 style="color: #4A90E2;">Confirmación de cuenta</h2> <!-- Cambié peri a un color azul -->
    </header>
    <div style="font-family: Arial, sans-serif; text-align: justify; line-height: 1.6; color: #333; background-color: #F9F9F9; padding: 25px; border: 1px solid #ddd; border-radius: 8px;">
        <h2>Hola, <span style="color: #E74C3C;">${name}</span></h2> <!-- Color de nombre en rojo -->
        <p style="font-size: 18px; color: #555;">
            Bienvenido a la plataforma de BienesRaíces, el sitio seguro donde podrás buscar, comprar y ofertar propiedades a través de internet.
        </p>
        <br>
        <div style="text-align: center; background: #D9EAF7; border: 1px solid #A3C4F3; padding: 15px; border-radius: 5px;">
            <p style="font-size: 20px; color: #1A73E8;"> <!-- Color de texto azul claro -->
                Para completar el registro de tu cuenta, haz clic en el siguiente enlace:
                <a href="${process.env.BACKEND_DOMAIN}:${process.env.PORT ?? 3000}/auth/confirm/${token}" style="color: #1A73E8; text-decoration: none; font-weight: bold;">Confirmar cuenta</a>
            </p>
            <br>
            <p style="font-size: 18px; color: #FF6347;">
                Si no has creado la cuenta, por favor ignora este mensaje.
            </p>
        </div>
        <br>
        <div style="text-align: center; line-height: 1.6;">
            <p style="font-size: 20px; color: #333;">
                Atentamente, <br>
                <strong style="font-size: 22px; color: #2C3E50;">Guadalupe Idai Vargas Galindo</strong>
            </p>
            <div style="margin-bottom: 15px;">
                <img src="https://static.vecteezy.com/system/resources/previews/025/866/358/non_2x/fake-autograph-samples-hand-drawn-signatures-examples-of-documents-certificates-and-contracts-with-inked-and-handwritten-lettering-vector.jpg" alt="Firma" style="max-width: 150px; height: auto; border-radius: 5px;">
            </div>
        </div>
    </div>
    <footer style="text-align: center; background-color: #2C3E50; color: white; padding: 10px;">
        Todos los derechos reservados de BienesRaíces_230574
    </footer>
        `

    })
}
export{emailAfterRegister}