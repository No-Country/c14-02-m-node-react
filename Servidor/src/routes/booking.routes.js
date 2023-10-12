const express = require('express');
const router = express.Router();
const { createBookingController, getBookingController } = require('../controllers/booking.controller');

router.post('/', createBookingController);

/** GET oneBooking
METHOD:  GET
URL:     http://localhost:3000/api/Booking/6526e5a3479659190deacbb8
RETURN: La reserva con el id proporcionado.
*/
router.get('/:id', getBookingController);



module.exports = router;
