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
		enum: [' Un Alojamiento entero', 'Una habitación', 'Una habitación compartida'],
		validate: [
			{
			  validator: function (value) {
				return /^[a-zA-Z0-9\s]+$/.test(value);
			  },
			  message: 'El campo offering solo puede contener letras, números y espacios.',
			},
			{
			  validator: function (value) {
				return value.length >= 10 && value.length <= 200;
			  },
			  message: 'El campo offering debe tener entre 10 y 200 caracteres.',
			},
			{
			  validator: function (value) {
				  return /(\bhogar\b|\bpiscina\b|\bjardín\b)/i.test(value);
				},
			  message: 'El campo offering debe contener palabras clave relevantes, como "hogar","piscina" o "jardín".',
			},
		],
	},
	location: {
		type: String,
		required: true,
		enum: ['Direccion Linea 1', 'Direccion Linea 2', 'Direccion Linea 3', 'Direccion Linea 4', 'Ciudad', 'Estado/Provincia','Código Postal'],
		validate: [
			{
			  validator: function (value) {
				return /^[a-zA-Z0-9\s]+$/.test(value);
			  },
			  message: 'El campo offering solo puede contener letras, números y espacios.',
			},
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
		enum: [ 'Cantidad de Viajeros',
			'Cantidad de Dormitorios',
			'Cantidad de Camas',
			'Cantidad de Baños'
		],
		validate: [
			{
			  validator: function (value) {
				// Verifica que todos los elementos del array estén en la lista predefinida
				return value.every(item => ['Cantidad de Viajeros', 'Cantidad de Dormitorios', 'Cantidad de Camas', 'Cantidad de Baños'].includes(item));
			  },
			  message: 'El campo spaces debe contener solo valores predefinidos.',
			},
			{
			  validator: function (value) {
				// Verifica que la longitud del array sea adecuada (por ejemplo, no más de 10 elementos)
				return value.length <= 10;
			  },
			  message: 'El campo spaces no debe contener más de 10 elementos.',
			},
		  ],
	},
	amenities: {
		type: [String],
		required: true,
		// enum:[- WiFi
		// 	- Tv
		// 	- Cocina
		// 	- Lavarropas
		// 	- Estacionamiento Gratis
		// 	en la propiedad.
		// 	- Estacionamiento Pago en 
		// 	las instalaciones.
		// 	- Aire Acondicionado
		// 	- Zona de Trabajo]
	},
	featured: {
		type: String,
		required: true,
	},
	security: {
		type: [String], // Cambiado a Array de Strings
		required: true,
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
	ownerUser_ID: {
		type: String,
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
