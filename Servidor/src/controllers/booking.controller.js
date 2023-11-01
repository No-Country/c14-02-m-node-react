const BookingManager = require('../dao/managerBooking.dao');
const {
	validationBooking,
	isValidObjectId,
	isValidEmail,
} = require('../functions/validationBooking');
const bookingManager = new BookingManager();
const UserManager = require('../dao/managerUser.dao');
const userManager = new UserManager();
const UserPublication = require('../dao/managerPublication.dao');
const userPublication = new UserPublication();
const sendMail = require('../functions/sendmail');
const { ObjectId } = require('mongodb');

/* funcion para crear una reserva */
async function createBookingController(req, res) {
	try {
		const data = req.body;
		const errors = validationBooking(data);
		if (!errors.noErrors) throw new Error(errors.mensaje);
		const newBooking = await bookingManager.createBooking(data);

		const id_publicacion = new ObjectId(data.publicationID);
		const publicacion = await userPublication.getOnePublication(id_publicacion);

		const email_anfitrion = publicacion[0].email;
		const anfitrion = await userManager.getOneUser({ email: email_anfitrion });

		const email_huesped = data.email;
		const huesped = await userManager.getOneUser({ email: email_huesped });

		sendMail({
			type: 'reserva',
			email: email_huesped,
			Nombre_Huesped: huesped.names,
			Titulo_Propiedad: publicacion[0].title,
			Fecha_Inicial: data.dateIn,
			Fecha_Final: data.dateOut,
			Nombre_Anfitrion: `${anfitrion.names} ${anfitrion.surname}`,
			Telefono_Anfitrion: anfitrion.phone,
		});

		return res.status(200).send(newBooking);
	} catch (error) {
		return res.status(400).send('Error al crear la reserva' + error.message);
	}
}

/* Función para traer una reserva x ID */
async function getBookingController(req, res) {
	const id = req.params;
	console.log(req.params);
	try {
		// if (!isValidObjectId(id)) throw new Error ('El id no tiene un formato válido')
		const objectIdToSearch = new ObjectId(id);
		console.log('este es el objetid', objectIdToSearch);
		const Booking = await bookingManager.getOneBooking({ _id: objectIdToSearch });
		if (!Booking) throw new Error('El id no es válido o no pertence a una reserva en la BD');
		return res.status(200).send(Booking);
	} catch (error) {
		return res.status(400).send(error.message);
	}
}

/* Función para traer todas las reservas por un email Y ENTRE FECHAS */
async function getAllBookingController(req, res) {
	const { publicationID, dateIn, dateOut } = req.params;
	const filter = {};

	if (publicationID) {
		filter.publicationID = publicationID;
	} else {
		return res.status(400).send('Se requiere un id para filtrar las reservas.');
	}

	if (dateIn && dateOut) {
		const dateInObj = new Date(dateIn);
		const dateOutObj = new Date(dateOut);

		if (dateInObj > dateOutObj) {
			return res
				.status(400)
				.send('La fecha de ingreso (dateIn) no puede ser mayor que la fecha de egreso (dateOut).');
		}

		filter.$and = [{ dateIn: { $lte: dateOutObj } }, { dateOut: { $gte: dateInObj } }];
	} else {
		return res
			.status(400)
			.send('Se requieren ambas fechas (dateIn y dateOut) para filtrar por fechas.');
	}

	try {
		const allBooking = await bookingManager.getAllBooking(filter);
		if (!allBooking)
			throw new Error('No se encontraron reservas para ese email y rango de fechas.');
		return res.status(200).send(allBooking);
	} catch (error) {
		return res.status(400).send(error.message);
	}
}

/* Función para eliminar una reserva por un id */
async function deleteBookingController(req, res) {
	const id = req.params.id;
	console.log(id);
	try {
		if (!isValidObjectId(id)) throw new Error('El id no tiene un formato válido');
		const objectIdToDelete = new ObjectId(id);
		console.log(objectIdToDelete);

		// Verifica si la reserva existe antes de eliminarla
		const bookingDel = await bookingManager.getOneBooking({ _id: objectIdToDelete });

		if (!bookingDel) {
			throw new Error('El id no pertenece a una reserva o no es correcto');
		}

		// Elimina la reserva
		const delBooking = await bookingManager.deleteBooking({ _id: objectIdToDelete });

		if (delBooking.deletedCount > 0) {
			return res
				.status(200)
				.json({ message: 'Se ha eliminado la reserva correctamente', deletedBooking: bookingDel });
		}
	} catch (error) {
		return res.status(400).send(error.message);
	}
}

async function getBookingByPublicationID(req, res) {
	const id = req.params;
	try {
		const publicationId = new ObjectId(id);
		const BookingByPublicationID = await bookingManager.getAllBooking({
			publicationID: publicationId,
		});
		return res.status(200).send(BookingByPublicationID);
	} catch (error) {
		console.error('Error al obtener la reserva por id', error);
		return res.status(400).send(error);
	}
}

/* Funcion para traer la reserva por fecha */

module.exports = {
	createBookingController,
	getBookingController,
	getAllBookingController,
	deleteBookingController,
	getBookingByPublicationID,
};
