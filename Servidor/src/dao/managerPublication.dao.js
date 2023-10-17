const Database = require('../config/mongodb.js');
const { createDocument, getOneDocument, getAllDocuments, updateDocument,deleteDocument } = require('../config/factory.js');
const PublicationModel = require('../models/publication.model.js');

class PublicationManager {
	constructor() {
		this.db = new Database();
		this.createDocument = createDocument;
		this.getOneDocument = getOneDocument;
		this.getAllDocuments = getAllDocuments;
		this.updateDocument = updateDocument;
		this.deleteDocument = deleteDocument
	}

	async createPublication(data) {
		try {
			const newPublication = new PublicationModel(data);
			const result = await this.createDocument('publicationCollection', newPublication);
			return result, newPublication;
		} catch (error) {
			throw error;
		}
	}

	async getOnePublication(query) {
		try {
			const Publication = await this.getAllDocuments('publicationCollection', query);
			return Publication;
		} catch (error) {
			console.error(error);
			throw new Error(`Error al obtener la publicación: ${error.message}`);
		}
	}

	async getAllPublication() {
		try {
			const Publications = await this.getAllDocuments('publicationCollection');
			return Publications;
		} catch (error) {
			console.error(error);
			throw new Error(`Error al obtener el publicación: ${error.message}`);
		}
	}

	async getPublicationById(id) {
		try {
			const PublicationId = await this.getOneDocument('publicationCollection', id)
			return PublicationId;
		} catch (error) {
			console.error(error);
			throw new Error(`Error al obtener el publicación por id: ${error.message}`);
		}
	}

	async putUpdatePublication(filter, dataUpdate) {
		try {
			const Publications = await this.updateDocument('publicationCollection', filter, dataUpdate);
			return Publications;
		} catch (error) {
			console.error(error);
			throw new Error(`Error al actualizar publicación: ${error.message}`);
		}
	}

	async deletePublicationById(id) {
		try {
			const PublicationId = await this.deleteDocument('publicationCollection',id)
			console.log(PublicationId)
			return PublicationId;
		} catch (error) {
			console.error(error);
			throw new Error(`Error al eliminar el publicación por id: ${error.message}`);
		}
	}

}

module.exports = PublicationManager;
