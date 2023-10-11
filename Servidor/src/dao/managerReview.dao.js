const Database = require('../config/mongodb');

const { createDocument, getOneDocument, allDocument, UpdateDocument } = require('../config/factory');

const { ReviewModel } = require('../models/');


class ReviewManager {

    constructor() {
        this.db = new Database();
        this.createDocument = createDocument;
        this.getOneDocument = getOneDocument;
        this.allDocument = allDocument;
        this.UpdateDocument = UpdateDocument;

    }

    async createReview(data) {
        try {
            await this.createDocument('reviewsCollection', data)
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
            const reviews = await this.allDocument('reviewsCollection')
            return reviews;
        } catch (error) {
            console.error(error);
			throw new Error(`Error al obtener las reseñas: ${error.message}`);
        }
    }

    async updateReview(filter, dataUpdate) {
        try {
            const review = await this.UpdateDocument('reviewsCollection', filter, dataUpdate);
            return review;
        } catch (error) {
            onsole.error(error);
            throw new Error(`Error al actualizar la reseña: ${error.message}`);
        }
    }
}

module.exports = ReviewManager;