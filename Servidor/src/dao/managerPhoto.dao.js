const Database = require('../config/mongodb');
const { createDocument, getOneDocument, getAllDocuments, updateDocument, deleteDocument } = require('../config/factory.js');
const { PhotoModel } = require('../models');

class PhotoManager {
	constructor() {
		this.db = new Database();
		this.createDocument = createDocument;
		this.getOneDocument = getOneDocument;
		this.getAllDocuments = getAllDocuments;
		this.updateDocument = updateDocument;
		this.deleteDocument = deleteDocument;
	}

	async createPhoto(data) {
		const { url } = data;
		console.log('Photo URL', url);

		const photo = PhotoModel({
			url,
		});

		await this.createDocument('photoCollection', photo);
	}

	async getOnePhoto(query) {
		try {
			const photo = await this.getOneDocument('photoCollection', query);
			return photo;
		} catch (error) {
			throw new Error(`Error al obtener la imagen: ${error.message}`);
		}
	}

	async getAllPhotos() {
		try {
			const photos = await this.getAllDocuments('photoCollection');
			return photos;
		} catch (error) {
			throw new Error(`Error al obtener las imagenes: ${error.message}`);
		}
	}

	async updatePhoto(filter, dataUpdate) {
		try {
			const photo = await this.updateDocument('photoCollection', filter, dataUpdate);
			return photo;
		} catch (error) {
			throw new Error(`Error al actualizar la imagen: ${error.message}`);
		}
	}

	async deletePhoto(filter) {
		try {
			const photo = await this.deleteDocument('photoCollection', filter);
			return photo;
		} catch (error) {
			throw new Error(`Error al eliminar la imagen: ${error.message}`);
		}
	}
}

module.exports = PhotoManager;
