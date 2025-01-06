import nodemailer from 'nodemailer'

// Configura el transportador
const transporter = nodemailer.createTransport({
    service: 'Gmail', // Puedes usar otro servicio SMTP
    auth: {
        user: 'yonatansuarez78@gmail.com',
        pass: 'rtys akzq qmoi vwov',
    },
}); 

// Función para enviar correos electrónicos
const sendMail = (to, subject, html) => {
    const mailOptions = {
        from: 'yonatansuarez78@gmail.com',
        to,
        subject,
        html,
    };

    return transporter.sendMail(mailOptions);
};

export default sendMail

