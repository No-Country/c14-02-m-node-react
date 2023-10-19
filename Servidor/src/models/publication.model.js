const mongoose = require('mongoose');

const publicationScheme = new mongoose.Schema({

	type: {
		type: String,
		required: true,
		enum: ['Casa', 'Departamento', 'Granero', 'Bed and BreakFast', 'Barco', 'Cabaña', 'Casa Rodante',
		'Casa Particular', 'Castillo', 'Cueva', 'Contenedor', 'Casa Griega', 'Dammuso', 'Domo', 'Casa Ecológica', 
		'Granja', 'Casa de Huéspedes', 'Hotel', 'Casa Flotante', 'Kezhan', 'Minsu', 'Riad', 'Ryokan', 'Casa de Pastor', 
		'Carpa', 'Mini Casa', 'Torre', 'Casa de Arbol', 'Trullo', 'Molino','Yurta'
	     ],
		 validate: {
			validator: function (value) {
			  // Primero, verifica la longitud
			  const validLength = value.length >= 3 && value.length <= 50;
			  // Luego, verifica el formato
			  const validFormat = /^[a-zA-Z\s]+$/.test(value);
			  
			  return validLength && validFormat;
			},
			message: 'El campo type debe tener entre 3 y 50 caracteres y solo puede contener letras y espacios.',
		  },
		
	},
	offering: {
		type: String,
		required: true,
		enum: ['Un alojamiento entero','Una habitación','Una habitación compartida'],
	},
	location: {
		type: String,
		required: true,
		validate: [
			{
			  validator: function (value) {
				return value.length >= 5 && value.length <= 100;
			  },
			  message: 'El campo offering debe tener entre 5 y 100 caracteres.',
			}]
	},
	spaces: {
		type: [String],
		required: true,
		enum: ['Dormitorios','Baños','Living','Cocina'],
	},
	amenities: {
		type: [String],
		required: true,
		enum:['Wifi','Tv','Estacionamiento','Piscina','Gimnasio','Lavarropas','Cocina','Aire Acondicionado'
		]
	},
	featured: {
		type: String,
		required: true,
	},
	security: {
		type: [String], // Cambiado a Array de Strings
		required: true,
		enum:['Guardia de seguridad','Cámara de vigilancia','Sistema de alarmas']
	},
	photos: {
		type: [String],
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	type_guest: {
		type: String,
		required: true,
	},
	price: {
		type: String,
		required: true,
	},
	discount: {
		type: String,
		required: true,
	},
	extra_Security: {
		type: [String], // Cambiado a Array de Strings
		required: true,
	},
	email: {
		type: String,
		required: true,
		validate: {
			validator: function (value) {
				// Utiliza una expresión regular para validar el formato del correo electrónico
				return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value);
			},
			message: 'El campo email no es una dirección de correo electrónico válida.',
		},
	},
});

const PublicationModel = mongoose.model('Publication', publicationScheme);

module.exports = PublicationModel;
