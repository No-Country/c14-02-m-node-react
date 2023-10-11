const mongoose = require('mongoose');

// Definimos un esquema llamado 'bookingScheme' para la colección de reservas
const bookingScheme = new mongoose.Schema({
	// Definimos los campos del esquema y sus tipos de datos
	// Referencia a la publicacion de la reversa
	publicationID: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'publication', // Hace referencia a la colección 'publication'
		required: true,
	},
	userID: {
		type: String,
		required: true,
	},

	dateIn: {
		type: Date,
		required: true,
	},

	dateOut: {
		type: Date,
		required: true,
	},
});

// Creamos un modelo llamado 'bookingModel' basado en el esquema 'bookingScheme'
const BookingModel = mongoose.model('Booking', bookingScheme);

module.exports = BookingModel;
