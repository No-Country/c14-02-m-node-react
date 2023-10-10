const express = require('express')
const {postCreateUser, getUser, getAllUser} = require('../controllers/userControler.cjs')
const UserRouter = express.Router();


UserRouter.get('/getAllUser',getAllUser);

UserRouter.get('/getUser',getUser);

UserRouter.post('/create', postCreateUser);


module.exports = UserRouter
