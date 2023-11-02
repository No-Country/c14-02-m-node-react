require('dotenv').config();
const { SENDGRID } = process.env;

const sgMail = require('@sendgrid/mail');

let res = '';
let msg1 = {};

sgMail.setApiKey(SENDGRID);

const sendMail = async data => {
	if (data.type === 'bienvenida') {
		msg1 = {
			to: data.email,
			from: 'admclonairbnb@gmail.com',
			subject: '¡Bienvenido a la comunidad de Airbnb!',
			preheader: 'Su usuario ha sido creado',
			templateId: 'd-b4322c4638ce4acbb7b07ef20be842d7',
			dynamic_template_data: {
				Sender_Name: data.email,
			},
		};
	} else if (data.type === 'publicacion') {
		msg1 = {
			to: data.email,
			from: 'admclonairbnb@gmail.com',
			subject: 'Creación de publicación en Airbnb',
			preheader: 'Su publicación ha sido exitosa!',
			templateId: 'd-bae3397e73ee46749ac323d38aeb32e2',
			dynamic_template_data: {
				Sender_Name: data.names,
				Titulo_Propiedad: data.titulo,
			},
		};
	} else if (data.type === 'reserva') {
		console.log(data);
		msg1 = {
			to: data.email,
			from: 'admclonairbnb@gmail.com',
			subject: 'Su reserva ha sido creada con éxito en Airbnb',
			preheader: 'Su reserva ha sido exitosa!',
			templateId: 'd-035b4184f58446149c305bf427be5f92',
			dynamic_template_data: {
				Nombre_Huesped: data.Nombre_Huesped,
				Titulo_Propiedad: data.Titulo_Propiedad,
				Fecha_Inicial: data.Fecha_Inicial,
				Fecha_Final: data.Fecha_Final,
				Nombre_Anfitrion: data.Nombre_Anfitrion,
				Telefono_Anfitrion: data.Telefono_Anfitrion,
			},
		};
	}else if (data.type === 'contact us') {
			msg1 = {
				to: 'admclonairbnb@gmail.com',
				from: 'admclonairbnb@gmail.com',
				subject: 'Gracias por contactarnos',
				preheader: 'Trataremos de ayudarte!',
				templateId: 'd-6ae7ae08dcd340dda477c5fcd3730d68',
				dynamic_template_data: {
					name: data.name,
					mensaje: data.mensaje,
					email: data.email
				},
			};			
	}else if (data.type === 'contact p2p') {
		msg1 = {
			to: data.emailP,
			from: data.emailH,
			subject: 'Gracias por contactarnos',
			preheader: 'Trataremos de ayudarte!',
			templateId: 'd-a887f218553b4af2ba39cf9ef94c1977',
			dynamic_template_data: {
				nameP: data.nameP,
				nameH: data.nameH,
				mensaje: data.mensaje,
				title:data.title
			},
		};			
}
	try {
		res = await sgMail.send(msg1);
		console.log('Correo electrónico enviado correctamente', res);
	} catch (error) {
		console.error('Error al enviar el correo electrónico', error);
	}
};

module.exports = sendMail;
