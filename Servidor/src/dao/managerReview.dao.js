const Database = require('../config/mongodb');

const { createDocument, getOneDocument, getAllDocuments, updateDocument } = require('../config/factory');

const { ReviewModel } = require('../models/');

class ReviewManager {
	constructor() {
		this.db = new Database();
		this.createDocument = createDocument;
		this.getOneDocument = getOneDocument;
		this.getAllDocuments = getAllDocuments;
		this.updateDocument = updateDocument;
	}

	async createReview(data) {
		try {
			await this.createDocument('reviewsCollection', data);
		} catch (error) {
			console.log(error);
			throw new Error('Error al crear la reseña', error.message);
		}
	}

	async getOneReview(query) {
		try {
			const review = await this.getOneDocument('reviewsCollection', query);
			return review;
		} catch (error) {
			console.error(error);
			throw new Error(`Error al obtener la reseña: ${error.message}`);
		}
	}

	async getAllReview() {
		try {
			const reviews = await this.getAllDocuments('reviewsCollection');
			return reviews;
		} catch (error) {
			console.error(error);
			throw new Error(`Error al obtener las reseñas: ${error.message}`);
		}
	}

	async updateReview(filter, dataUpdate) {
		try {
			const review = await this.updateDocument('reviewsCollection', filter, dataUpdate);
			return review;
		} catch (error) {
			onsole.error(error);
			throw new Error(`Error al actualizar la reseña: ${error.message}`);
		}
	}
}

module.exports = ReviewManager;
