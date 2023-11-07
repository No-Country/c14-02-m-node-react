const sendMail = require('../functions/sendmail');


async function mailController(req, res) {
    try {
        const dataMail = req.body;
        const response = await sendMail(
            dataMail);

        return res.status(200).send('Correo electrónico enviado correctamente');
    } catch (error) {
        console.error('Error al enviar el correo de contacto', error);
        return res.status(400).send('Error al enviar el correo de contacto');
    }
}

module.exports = {
    mailController
}
