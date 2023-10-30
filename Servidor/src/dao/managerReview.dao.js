const Database = require('../config/mongodb');
const {
	createDocument,
	getOneDocument,
	getAllDocuments,
	updateDocument,
	deleteDocumentById,
} = require('../config/factory');

const { ReviewModel } = require('../models/');

class ReviewManager {
	constructor() {
		this.db = new Database();
		this.createDocument = createDocument;
		this.getOneDocument = getOneDocument;
		this.getAllDocuments = getAllDocuments;
		this.updateDocument = updateDocument;
		this.deleteDocumentById = deleteDocumentById;
	}

	async createReview(data) {
		const { stars, text } = data;
		const review = ReviewModel({
			stars,
			review_text: text,
		});
		try {
			const result = await this.createDocument('reviewCollection', review);
			if (result.insertedId) {
				const createdReview = await this.getOneReview(result.insertedId);
				return createdReview;
			} else {
				throw new Error('Error al insertar la review');
			}
		} catch (error) {
			console.log(error);
			throw new Error(`Error al crear la reseña: ${error.message}`);
		}
	}

	async getOneReview(query) {
		try {
			const review = await this.getOneDocument('reviewCollection', query);
			return review;
		} catch (error) {
			console.error(error);
			throw new Error(`Error al obtener la reseña: ${error.message}`);
		}
	}

	async getAllReview() {
		try {
			const reviews = await this.getAllDocuments('reviewCollection');
			return reviews;
		} catch (error) {
			console.error(error);
			throw new Error(`Error al obtener las reseñas: ${error.message}`);
		}
	}

	async updateReview(filter, dataUpdate) {
		try {
			const review = await this.updateDocument('reviewCollection', filter, dataUpdate);
			return review;
		} catch (error) {
			console.error(error);
			throw new Error(`Error al actualizar la reseña: ${error.message}`);
		}
	}

	async deleteReview(filter) {
		try {
			const review = await this.deleteDocumentById('reviewCollection', filter);
			return review;
		} catch (error) {
			throw new Error(`Error al eliminar la reseña: ${error.message}`);
		}
	}
}

module.exports = ReviewManager;
