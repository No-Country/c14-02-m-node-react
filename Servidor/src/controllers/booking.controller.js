
const BookingManager = require('../dao/managerBooking.dao');
const {validationBooking, isValidObjectId, isValidEmail} = require('../functions/validationBooking')
const bookingManager = new BookingManager();

const { ObjectId } = require('mongodb');

/* funcion para crear una reserva */
async function createBookingController(req, res) {
	try {
		const data = req.body;
		const errors = validationBooking(data);
		if(!errors.noErrors) throw new Error(errors.mensaje)
		const newBooking = await bookingManager.createBooking(data);
		return res.status(200).send(newBooking);
	} catch (error) {
		return res.status(400).send('Error al crear la reserva',error.message);
	}
}

/* Función para traer una reserva x ID */
async function getBookingController(req, res) {
	const id = req.params; 
	try {
    if (!isValidObjectId(id)) throw new Error ('El id no tiene un formato válido')
	  const objectIdToSearch = new ObjectId(id);
	  const Booking = await bookingManager.getOneBooking({ _id: objectIdToSearch });
    if(!Booking) throw new Error('El id no es válido o no pertence a una reserva en la BD')
	  return res.status(200).send(Booking);
	} catch (error) {
	  return res.status(400).send(error.message);
	}
}

/* Función para traer todas las reservas por un email */
async function getAllBookingController(req, res) {
  const email = req.params; 
  try {
    if (!isValidEmail(email)) throw new Error ('El email no tiene un formato válido')
    const allBooking = await bookingManager.getAllBooking(email);
    if (!allBooking) throw new Error ('No se encontraron reservas para ese email')
    return res.status(200).send(allBooking);
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

/* Función para eliminar una reserva por un id */




module.exports = { createBookingController, getBookingController,getAllBookingController };
