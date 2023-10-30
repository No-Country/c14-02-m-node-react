const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
	},
	publicationId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'publication', // Referencia al modelo de publicación que se ha marcado como favorita
		required: true,
	},
});

const FavoriteModel = mongoose.model('Favorite', favoriteSchema);

module.exports = FavoriteModel;
