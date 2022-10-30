import nodemailer from 'nodemailer'

export const emailRegistro =  async (datos) => { 
    const { email, nombre, token } = datos;

    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "f8ae59c025ec66",
          pass: "a416304292990b"
        }
    });
    
    //Informacion del email
    const info = await transport.sendMail({
        from: '"UpTask - Adminitrador de Proyectos" <cuentas@uptask.com>',
        to: email,
        subject: "UpTask - Comprueba tu cuenta",
        text: "Comprueba tu cuenta en UpTask",
        html: `<p>Hola: ${nombre} Comprueba tu cuenta en UpTask</p>
        <p>Tu cuenta ya está casi lista, solo debes comprobarla en el siguiente enlace: 
        
        <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a>
        
        <p>Si tu no creaste esta cuenta, puede ignorar este mensaje</p>`,


    })



};