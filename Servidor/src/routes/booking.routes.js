const express = require('express');
const router = express.Router();
const { 
    createBookingController, 
    getBookingController,
    getAllBookingController,
    deleteBookingController 
    } = require('../controllers/booking.controller');

/** POST Crear una reserva
METHOD:  GET
URL:     http://localhost:3000/api/Booking
DATOS: Por Body los datos de reserva. 
RETURN: La reserva creada.
**/
router.post('/', createBookingController);

/** GET oneBooking
METHOD:  GET
URL:     http://localhost:3000/api/Booking/id
RETURN: La reserva con el id proporcionado.
*/
router.get('/:id', getBookingController);

/** GET oneAllBooking
METHOD:  GET
URL:     http://localhost:3000/api/Booking/all/email
RETURN: Devuelve un listado de reservas con ese email.
*/
router.get('/all/:email', getAllBookingController);

/** DELETE Eliminar una reserva x ID
METHOD:  DELETE
URL:     http://localhost:3000/api/Booking/id
DATOS: Id por Paramas de la reserva a eliminar. 
RETURN: La reserva eliminada.
**/
router.delete('/:id', deleteBookingController);

module.exports = router;
