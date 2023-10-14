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
            return result;
        } catch (error) {
            throw error;
        }
    }

    async getOnePublication(query) {
        try {
            const user = await this.getOneDocument('publicationCollection', query);
            return user;
        } catch (error) {
            console.error(error);
            throw new Error(`Error al obtener la publicación: ${error.message}`);
        }
    }

    async getAllPublication() {
        try {
            const users = await this.allDocument('publicationCollection');
            return users;
        } catch (error) {
            console.error(error);
            throw new Error(`Error al obtener el usuario: ${error.message}`);
        }
    }

    async putUpdatePublication(filter, dataUpdate) {
        try {
            const users = await this.putUpdateDocument('publicationCollection', filter, dataUpdate);
            return users;
        } catch (error) {
            console.error(error);
            throw new Error(`Error al actualizar usuario: ${error.message}`);
        }
    }

}

module.exports = PublicationManager;
