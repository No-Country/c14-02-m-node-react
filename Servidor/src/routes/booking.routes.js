const express = require('express');
const router = express.Router();
const { CreateBooking } = require('../controllers/booking.controller');

router.post('/', CreateBooking);

module.exports = router;
