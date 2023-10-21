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
			validator: isEmail, // Utiliza la función isEmail del paquete 'validator'
			message: 'El correo electrónico no es válido',
		},
	},

	phone: {
		type: String,
		required: true,
		trim: true,
		validate: {
			validator: (value) => isMobilePhone(value, 'any', { strictMode: false }), // Valida el formato del número de teléfono
			message: 'Número de teléfono no válido',
		},
	},

	address: {
		type: String,
		required: true,
		trim: true,
	},

	officialId: {
		type: String,
		required: true,
		trim: true,
		validate: {
			validator: (value) => /\d{8}-\d{1}/.test(value), // Valida el formato de identificación (XXXXXXXX-X)
			message: 'Formato de identificación no válido (XXXXXXXX-X)',
		},
	},

	phoneUrgency: {
		type: String,
		required: true,
		trim: true,
		validate: {
			validator: (value) => isMobilePhone(value, 'any', { strictMode: false }), // Valida el formato del número de teléfono
			message: 'Número de teléfono de emergencia no válido',
		},
	},

	// Referencia a la imagen de perfil del usuario almacenada en la colección 'picture'
	pictureID: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'picture', // Hace referencia a la colección 'picture'
		required: true,
	},

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
