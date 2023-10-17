const express = require('express');
const router = express.Router();
const { createUser, getUser, getUsers, updateUser, login } = require('../controllers/user.controller');
const { validateMiddleware } = require('../middleware');

/** GET USERS
METHOD:  GET
URL:     http://localhost:3000/api/user
*/
router.get('/', validateMiddleware, getUsers);

/** GET USER
METHOD:  GET
URL:     http://localhost:3000/api/user/john.doe@mail.com
*/
router.get('/:email', getUser);

/** CREATE USER
METHOD:  POST
URL:     http://localhost:3000/api/user
BODY:
         {
        "names": "John",
        "surname": "Doe",
        "birthDate": "01/03/1999",
        "email": "john.doe@mail.com",
        "phone": "+54 9999 9999",
        "address": "home 1234",
        "officialId": "18999999-4",
        "phoneUrgency": "+54 9999 9998",
        "role": "user"
         } 
*/
router.post('/', createUser);

router.post('/login', login);

/** UPDATE USER
METHOD:  PUT
URL:     http://localhost:3000/api/user/john.doe@mail.com
BODY:
         {
        "names": "Nikola",
         } 
*/
router.put('/:email', updateUser);

// router.delete('/:email', deleteUser);

module.exports = router;
