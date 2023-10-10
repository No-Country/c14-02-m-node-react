const mongoose = require('mongoose');

// Definimos un esquema llamado 'userScheme' para la colección de usuarios
const userScheme = new mongoose.Schema({
	// Definimos los campos del esquema y sus tipos de datos

	names: {
		type: String,
		required: true, // Este campo es obligatorio
	},

	surname: {
		type: String,
		required: true,
	},

	birthDate: {
		type: String,
		required: true,
	},

	email: {
		type: String,
		required: true,
	},

	phone: {
		type: String,
		required: true,
	},

	address: {
		type: String,
		required: true,
	},

	officialId: {
		type: String,
		required: true,
	},

	phoneUrgency: {
		type: String,
		required: true,
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
