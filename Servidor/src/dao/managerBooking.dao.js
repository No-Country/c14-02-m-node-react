const Database = require('../config/mongodb.js');
const { createDocument, getOneDocument, allDocument,UpdateDocument } = require('../config/factory.js');
const { BookingModel } = require('../models/index.js');

class BookingManager {
	constructor() {
		this.db = new Database();
		this.createDocument = createDocument;
		this.getOneDocument = getOneDocument;
        this.allDocument = allDocument;
		this.putUpdateDocument = UpdateDocument;
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
			const booking = await this.getOneDocument('bookingCollection', query);
			return booking;
		} catch (error) {
			console.error(error);
			throw new Error(`Error al obtener la reserva: ${error.message}`);
		}
	

	async getAllBooking(query) {
        try {
            const allBooking = await this.allDocument('bookingCollection', query);
            return users;
        } catch (error) {
            console.error(error);
            throw new Error(`Error al obtener el usuario: ${error.message}`);
        }
    }
}

module.exports = BookingManager;
