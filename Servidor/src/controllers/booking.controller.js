// const UserManager = require('../dao/managerUser.dao.js');
const { BookingManager } = require('../dao');
const bookingmanager = new BookingManager();

async function CreateBooking(req, res) {
	try {
		const data = req.body;
		const newBooking = await bookingmanager.createBooking(data);
		return res.status(200).send(newBooking);
	} catch (error) {
		console.error('Error al crear la reserva', error);
		return res.status(400).send(error);
	}
}



module.exports = { CreateBooking };
