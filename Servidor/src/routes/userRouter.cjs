const express = require('express')
const {postCreateUser} = require('../controllers/userControle.cjs')
const UserRoueter = express.Router();


UserRoueter.post('/crear', postCreateUser);


module.exports = UserRoueter
