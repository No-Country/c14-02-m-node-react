const Database = require('../config/mongodb.js');
const { createDocument, getOneDocument, allDocument,putUpdateDocument } = require('../config/factory.js');
// const UserModel = require('../models/user.model.js');
const { BookingModel } = require('../models/index.js');

class BookingManager {
	constructor() {
		this.db = new Database();
		this.createDocument = createDocument;
	}

	async createBooking(data) {
		const { 
			publicationID,
			userID,
			dateIn,
			dateOut,
		} = data;

		const booking = BookingModel({
			publicationID,
			userID,
			dateIn,
			dateOut,
		});
		await this.createDocument('bookingCollection', booking);
	}

	async getOneBooking(query) {
		try {
			const booking = await this.getOneDocument('bookingCollection', query);
			return booking;
		} catch (error) {
			console.error(error);
			throw new Error(`Error al obtener la reserva: ${error.message}`);
		}
	}
}

module.exports = BookingManager;
