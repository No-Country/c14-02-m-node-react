require('dotenv').config()  
const { SENDGRID } = process.env

const sgMail = require("@sendgrid/mail");

let res="";
let msg1={};

sgMail.setApiKey(SENDGRID);

const sendMail = async(data) => {
  if (data.type==='bienvenida') {
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
  } else if (data.type==='publicacion') {
    msg1 = {
      to: data.email,
      from: 'admclonairbnb@gmail.com',
      subject: 'Creación de publicación en Airbnb',
      preheader: 'Su publicación ha sido exitosa!',
      templateId: 'd-bae3397e73ee46749ac323d38aeb32e2',
      dynamic_template_data: {
        "Sender_Name": data.names,
        "Titulo_Propiedad":data.titulo
      },
    };
    
  }
       try {
        res = await sgMail.send(msg1);
        console.log(res)
        console.log('Correo electrónico enviado correctamente', res[0].statusCode);
      } catch (error) {
        console.error('Error al enviar el correo electrónico', error);
      }
}

module.exports = sendMail;