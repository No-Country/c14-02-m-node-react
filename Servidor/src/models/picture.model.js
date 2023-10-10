const mongoose = require('mongoose');

const userScheme = new mongoose.userScheme({
	userEmail: {
		type: String,
		require: true,
	},
	url: {
		type: String,
		require: true,
	},
});

const pictureModel = mongoose.model('picture', userScheme);

module.exports = pictureModel;
