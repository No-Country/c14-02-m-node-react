
const BookingManager = require('../dao/managerBooking.dao');
const UserManager = require('../dao/managerUser.dao');
const userManager = new UserManager();
const bookingManager = new BookingManager();

const { ObjectId } = require('mongodb');

async function createBookingController(req, res) {
	try {
		const data = req.body;
		const newBooking = await bookingManager.createBooking(data);
		return res.status(200).send(newBooking);
	} catch (error) {
		console.error('Error al crear la reserva', error);
		return res.status(400).send(error);
	}
}


async function getBookingController(req, res) {
	const id = req.params; 
	try {
	  const objectIdToSearch = new ObjectId(id);
	  const Booking = await bookingManager.getOneBooking({ _id: objectIdToSearch });
	  if (Booking) {
		return res.status(200).send(Booking);
	  } else {
		return res.status(404).send({ mensaje: 'Reserva no encontrada' });
	  }
	} catch (error) {
	  console.error('Error al obtener la reserva', error);
	  return res.status(400).send(error);
	}
  }

  async function getAllBookingController(req, res) {
	const email = req.params; 
	try {
		const allBooking = await bookingManager.getAllBooking();
		return res.status(200).send(allBooking);
	} catch (error) {
		console.error('Error al obtener las reservas con ese email', error);
		return res.status(400).send(error);
	}
}

module.exports = { createBookingController, getBookingController };
