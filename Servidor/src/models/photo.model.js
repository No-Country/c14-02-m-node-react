const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
	publicationId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'publication',
		required: true,
	},

	url: {
		type: String,
		required: true,
		validate: {
			validator: function (value) {
				return /^(https?):\/\/[^\s/$.?#].[^\s]*$/.test(value);
			},
			message: 'El campo URL no es una URL (http/https) valida.',
		},
	},
});

const PhotoModel = mongoose.model('Photo', photoSchema);
module.exports = PhotoModel;
