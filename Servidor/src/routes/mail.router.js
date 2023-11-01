const express = require('express');
const router = express.Router();
const {MailController} = require('../controllers')

router.post('/',MailController.mailController)


module.exports = router;
