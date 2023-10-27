const mongoose = require('mongoose');

// Definimos un esquema llamado 'userScheme' para la colección de usuarios
const userScheme = new mongoose.Schema({
	// Definimos los campos del esquema y sus tipos de datos

	names: {
		type: String,
		required: true, // Este campo es obligatorio
		trim: true, // Elimina espacios en blanco al principio y al final
	},

	surname: {
		type: String,
		required: true,
		trim: true,
	},
	photo: {
		type: String,
		required: true,
		trim: true,
	},
	birthDate: {
		type: String,
		required: true,
		validate: {
			validator: (value) => /\d{2}\/\d{2}\/\d{4}/.test(value), // Valida el formato de fecha (DD/MM/YYYY)
			message: 'Formato de fecha no válido (DD/MM/YYYY)',
		},
	},

	email: {
		type: String,
		required: true,
		trim: true,
		validate: {
			validator: function (value) {
				// Utiliza una expresión regular para validar el formato del correo electrónico
				return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value);
			},
			message: 'El campo email no es una dirección de correo electrónico válida.',
		},
	},

	phone: {
		type: String,
		required: true,
		trim: true,
		validate: {
			validator: (value) => /^\+\d+$/.test(value),
			message: 'Número de teléfono no válido',
		},
	},

	address: {
		type: String,
		required: true,
		trim: true,
	},

	phoneUrgency: {
		type: String,
		required: true,
		trim: true,
		validate: {
			validator: (value) => /^\+\d+$/.test(value),
			message: 'Número de teléfono no válido',
		},
	},

	// Referencia a la imagen de perfil del usuario almacenada en la colección 'picture'
	// pictureID: {
	// 	type: mongoose.Schema.Types.ObjectId,
	// 	ref: 'picture', // Hace referencia a la colección 'picture'
	// 	required: true,
	// },

	// Rol del usuario (puede ser 'admin' o 'user', con valor predeterminado 'user')
	role: {
		type: String,
		enum: ['admin', 'user'], // Solo permite valores 'admin' o 'user'
		default: 'user', // Valor predeterminado si no se especifica
	},
});

// Creamos un modelo llamado 'UserModel' basado en el esquema 'userScheme'
const UserModel = mongoose.model('User', userScheme);

module.exports = UserModel;
