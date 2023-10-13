const Database = require('../config/mongodb.js');
const { createDocument, getOneDocument, allDocument,UpdateDocument, deleteDocument} = require('../config/factory.js');
const { BookingModel } = require('../models/index.js');

class BookingManager {
	constructor() {
		this.db = new Database();
		this.createDocument = createDocument;
		this.getOneDocument = getOneDocument;
        this.allDocument = allDocument;
		this.putUpdateDocument = UpdateDocument;
		this.deleteDocument = deleteDocument;
	}

	async createBooking(data) {
		const { 
			publicationID,
			email,
			dateIn,
			dateOut,
		} = data;

		const booking = BookingModel({
			publicationID,
			email,
			dateIn,
			dateOut,
		});
		await this.createDocument('bookingCollection', booking);
		return booking;
	}

	async getOneBooking(query) {
			const booking = await this.getOneDocument('bookingCollection', query);
			return booking;
		} catch (error) {
			console.error(error);
			throw new Error(`Error al obtener la reserva: ${error}`);
		}
	

	async getAllBooking(query) {
        try {
            const allBooking = await this.allDocument('bookingCollection', query);
		    return allBooking;
        } catch (error) {
            console.error(error);
            throw new Error(`Error al obtener la reserva: ${error.message}`);
        }
    }

	async deleteBooking(filter) {
		try {
			const delBooking = await this.deleteDocument('bookingCollection', filter);
			return delBooking;
		} catch (error) {
			throw new Error(`Error al eliminar la reserva: ${error}`)
		}
	}
}

module.exports = BookingManager;
