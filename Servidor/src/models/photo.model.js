const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
	url: {
		type: String,
		required: true,
	},

	publicationId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'publication',
		required: true,
	},
});

const PhotoModel = mongoose.model('Photo', photoSchema);
module.exports = PhotoModel;
