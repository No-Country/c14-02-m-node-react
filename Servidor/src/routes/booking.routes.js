const express = require('express');
const router = express.Router();
const { CreateBooking } = require('../controllers/user.controller');

router.post('/', CreateBooking);

module.exports = router;
