const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
	url: {
		type: String,
		required: true,
		validate: {
			validator: function (value) {
				const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
				return urlPattern.test(value);
			},
			message: 'El campo URL debe ser una URL válida con formato HTTP o HTTPS.',
		},
	},

	publicationId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'publication',
		required: true,
	},
});

const PhotoModel = mongoose.model('Photo', photoSchema);
module.exports = PhotoModel;
