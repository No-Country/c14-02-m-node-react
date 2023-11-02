const mongoose = require('mongoose');

const publicationScheme = new mongoose.Schema({
	type: {
		type: String,
		required: true,
	},
	offering: {
		type: String,
		required: true,
	},
	location: {
		type: String,
		required: true,
	},
	spaces: {
		type: [String],
		required: true,
	},
	photos: {
		type: [String],
		required: true,
	},
	amenities: {
		type: [String],
		required: true,
	},
	featured: {
		type: String,
		required: true,
	},
	security: {
		type: [String], // Cambiado a Array de Strings
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
	},
});

const PublicationModel = mongoose.model('Publication', publicationScheme);

module.exports = PublicationModel;
