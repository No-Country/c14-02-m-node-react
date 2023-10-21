const Database = require('../config/mongodb');
const { createDocument, getOneDocumentById, getOneDocument, getAllDocuments, updateDocumentById, deleteDocumentById } = require('../config/factory.js');
const { PhotoModel } = require('../models');

class PhotoManager {
	constructor() {
		this.db = new Database();
		this.createDocument = createDocument;
		this.getOneDocumentById = getOneDocumentById;
		this.getOneDocument = getOneDocument;
		this.getAllDocuments = getAllDocuments;
		this.deleteDocumentById = deleteDocumentById;
		this.updateDocumentById = updateDocumentById;
	}

	async createPhoto(data) {
		try {
			const url = data;
			const photo = PhotoModel({
				url,
			});
			const result = await this.createDocument('photoCollection', photo);
			if (result.insertedId) {
				// Recupera el documento completo después de la inserción
				const createdPhoto = await this.getOnePhoto(result.insertedId);
				return createdPhoto;
			} else {
				throw new Error('Error al insertar la foto');
			}
		} catch (error) {
			throw new Error(`Error al crear la imagen: ${error.message}`);
		}
	}

	async getOnePhoto(id) {
		try {
			const photo = await this.getOneDocumentById('photoCollection', id);
			return photo;
		} catch (error) {
			throw new Error(`Error al obtener la imagen: ${error.message}`);
		}
	}

	async getOnePhotoByURL(url) {
		try {
			const filter = { url };
			const photo = await this.getOneDocument('photoCollection', filter);
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

	async updatePhoto(id, dataUpdate) {
		try {
			const photo = await this.updateDocumentById('photoCollection', id, dataUpdate);
			return photo;
		} catch (error) {
			throw new Error(`Error al actualizar la imagen: ${error.message}`);
		}
	}

	async deletePhoto(id) {
		try {
			const photo = await this.deleteDocumentById('photoCollection', id);
			return photo;
		} catch (error) {
			throw new Error(`Error al eliminar la imagen: ${error.message}`);
		}
	}
}

module.exports = PhotoManager;
