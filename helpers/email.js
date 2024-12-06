import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config({path:'.env'})

const registerEmail = async (data) => {
    const transport = nodemailer.createTransport({
        host: process.env.Email_HOST,
        port: process.env.Email_PORT,
        auth: {
            user: process.env.Email_USER,
            pass: process.env.Email_PASS,
        },
    });

    const { email, name, token } = data;

// Enviar el email
await transport.sendMail({
    from: 'BienesRaices_230574.com',
    to: email,
    subject: 'Bienvenido/a a BienesRaices_230574',
    text: 'Ya casi puedes usar nuestra plataforma, solo falta confirmar tu cuenta.',
    html: `
    <header style="font-family: Arial, sans-serif; text-align: center; line-height: 1.2; background-color: winkle; padding: 20px; border-radius: 8px;">
        <h1 style="font-weight: bold; color: #black;">Bienes Raíces</h1>
        <h2 style="color: peri;">Confirmación de cuenta</h2>
    </header>
    <div style="font-family: Arial, sans-serif; text-align: justify; line-height: 1.6; color: #black; background-color: palePurple; padding: 25px; border: 1px solid winkle; border-radius: 8px;">
        <h2>Hola, <span style="color: reds;">${name}</span></h2>
        <p style="font-size: 18px; color: black;">
            Bienvenido a la plataforma de BienesRaíces, el sitio seguro donde podrás buscar, comprar y ofertar propiedades a través de internet.
        </p>
        <div style="text-align: center; background: #green; border: 1px solid black; padding: 15px; border-radius: 5px;">
            <p style="font-size: 20px; color: black;">
                Haz clic en el botón de abajo para confirmar tu cuenta:
            </p>
            <div style="text-align: center; margin: 20px 0;">
                <a href="${process.env.BACKEND_URL}:${process.env.PORT ?? 3000}/auth/confirm/${token}" 
                   style="background-color: green; color: white; text-decoration: none; padding: 10px 20px; border-radius: 5px; font-size: 16px;">
                   Confirmar Cuenta
                </a>
            </div>
            <p style="font-size: 18px; color: reds;">
                Si no has creado la cuenta, por favor ignora este mensaje.
            </p>
        </div>
        <br>
        <div style="text-align: center; line-height: 1.6;">
            <p style="font-size: 20px; color: black;">
                Atentamente, <br>
                <strong style="font-size: 22px; color: black;">Guadalupe Idai Vargas Galindo</strong>
            </p>
            <div style="margin-bottom: 15px;">
                <img src="https://static.vecteezy.com/system/resources/previews/025/866/358/non_2x/fake-autograph-samples-hand-drawn-signatures-examples-of-documents-certificates-and-contracts-with-inked-and-handwritten-lettering-vector.jpg" 
                     alt="Firma" style="max-width: 150px; height: auto; border-radius: 5px;">
            </div>
        </div>
    </div>
    <footer style="text-align: center; background-color: black; color: white; padding: 10px; border-radius: 8px;">
        Todos los derechos reservados de BienesRaíces_230574
    </footer>
    `
});
}

const passwordRecoveryEmail = async (data) => {
    const transport = nodemailer.createTransport({
        host: process.env.Email_HOST,
        port: process.env.Email_PORT,
        auth: {
            user: process.env.Email_USER,
            pass: process.env.Email_PASS,
        },
    });
    const { email,name,token }= data;
    await transport.sendMail({
        from: 'BienesRaices_230499',
        to: email,
        subject: 'Reestablece tu contraseña...',
        text: `Estimado ${ name }, haz solicitado el cambio de contraseña de tu cuenta en BienesRaices_230499.`,
        html: `
            <header style="font-family: bold; text-align: center; line-height: 0.5;">
                <h2>Bienes Raices</h2>
                <h3>Recuperación de contraseña</h3>
            </header>
            <div style="font-family: bold, sans-serif; text-align: justify; line-height: 1.6; color: #333; background-color: #f9f9f9; padding: 25px; border: 10px solid #ddd; border-radius: 5px;">
                <h2 style="color: #50c878;">¡Hola, <span style="color: #50c878;">${name}</span>!</h2>
            <p style="font-size: 18px; color: black;">
                Has reportado el olvido o perdida de tu contraseña para acceder a tu cuenta de BienesRaíces
            </p>
            <div style="text-align: center; background: #green; border: 1px solid black; padding: 15px; border-radius: 5px;">
                <p style="font-size: 20px; color: black;">
                    Por lo que necesitas ingresar en el siguiente enlace:
                </p>
                <div style="text-align: center; margin: 20px 0;">
                    <a href="${process.env.BACKEND_URL}:${process.env.PORT ?? 3000}/auth/confirm/${token}" 
                       style="background-color: green; color: white; text-decoration: none; padding: 10px 20px; border-radius: 5px; font-size: 16px;">
                       Confirmar Cuenta
                    </a>
                </div>
            </div>
            <br>
            <div style="text-align: center; line-height: 1.6;">
                <p style="font-size: 20px; color: black;">
                    Atentamente, <br>
                    <strong style="font-size: 22px; color: black;">Guadalupe Idai Vargas Galindo</strong>
                </p>
                <div style="margin-bottom: 15px;">
                    <img src="https://static.vecteezy.com/system/resources/previews/025/866/358/non_2x/fake-autograph-samples-hand-drawn-signatures-examples-of-documents-certificates-and-contracts-with-inked-and-handwritten-lettering-vector.jpg" 
                         alt="Firma" style="max-width: 150px; height: auto; border-radius: 5px;">
                </div>
            </div>
        </div>
        <footer style="text-align: center; background-color: black; color: white; padding: 10px; border-radius: 8px;">
            Todos los derechos reservados de BienesRaíces_230574
        </footer>
        `
    });
    }

export {registerEmail,passwordRecoveryEmail};