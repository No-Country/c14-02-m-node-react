const Database = require('../config/mongodb');
const { createDocument, getOneDocument, allDocument, putUpdateDocument } = require('../config/factory.js');
const { PhotoModel } = require('../models');

class PhotoModel {
	constructor() {
		this.db = new Database();
		this.createDocument = createDocument;
		this.getOneDocument = getOneDocument;
		this.allDocument = allDocument;
		this.putUpdateDocument = putUpdateDocument;
	}

	async createUser(data) {
		const { url } = data;
		console.log(data);

		const photo = PhotoModel({
			url,
		});
		await this.createDocument('photoCollection', photo);
	}
}
