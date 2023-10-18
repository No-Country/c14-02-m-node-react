require('dotenv').config()  
const { SENDGRID } = process.env

const sgMail = require("@sendgrid/mail");

let res="";
let msg1={};

sgMail.setApiKey(SENDGRID);

const sendMail = async(data) => {
  if (data.type==="bienvenida") {
        msg1 = {
            to: data.email,
            from: 'admclonairbnb@gmail.com',
            subject: '¡Bienvenido a la comunidad de Airbnb!',
            preheader: 'Su usuario ha sido creado',
            templateId: 'd-b4322c4638ce4acbb7b07ef20be842d7',
            dynamic_template_data: {
              "Sender_Name": data.email,
            },
          };
  }
       try {
        if (data.type === "bienvenida") {
            res = await sgMail.send(msg1);
        } 
        console.log(res)
        console.log('Correo electrónico enviado correctamente', res[0].statusCode);
      } catch (error) {
        console.error('Error al enviar el correo electrónico', error);
      }
}

module.exports = sendMail;