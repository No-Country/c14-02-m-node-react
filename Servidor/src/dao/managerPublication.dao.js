const Database = require('../config/mongodb.js');
const { createDocument, getOneDocument, allDocument, UpdateDocument } = require('../config/factory.js');
// const UserModel = require('../models/user.model.js');
const PublicationModel = require('../models/publication.model.js');

class PublicationManager {
    constructor() {
        this.db = new Database();
        this.createDocument = createDocument;
        this.getOneDocument = getOneDocument;
        this.allDocument = allDocument;
        this.putUpdateDocument = UpdateDocument;
    }

    async createPublication(data) {
        try {
            const newPublication = new PublicationModel(data);
            const result = await this.createDocument('publicationCollection', newPublication);
            return (result,newPublication);
        } catch (error) {
            throw error;
        }
    }

    async getOnePublication(query) {
        try {
            const Publication = await this.getOneDocument('publicationCollection', query);
            return Publication;
        } catch (error) {
            console.error(error);
            throw new Error(`Error al obtener la publicación: ${error.message}`);
        }
    }

    async getAllPublication() {
        try {
            const Publications = await this.allDocument('publicationCollection');
            return Publications;
        } catch (error) {
            console.error(error);
            throw new Error(`Error al obtener el publicación: ${error.message}`);
        }
    }

    async putUpdatePublication(filter, dataUpdate) {
        try {
            const Publications = await this.putUpdateDocument('publicationCollection', filter, dataUpdate);
            return Publications;
        } catch (error) {
            console.error(error);
            throw new Error(`Error al actualizar publicación: ${error.message}`);
        }
    }

}

module.exports = PublicationManager;
