const express = require('express');
const router = express.Router();
const { postCreateUser, getUser, getAllUser, updateUser } = require('../controllers/user.controller');

/** GET USERS
METHOD:  GET
URL:     http://localhost:3000/api/user
*/
router.get('/', getAllUser);

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
router.post('/', postCreateUser);

/** UPDATE USER
METHOD:  PUT
URL:     http://localhost:3000/api/user/john.doe@mail.com
BODY:
         {
        "names": "Nikola",
         } 
*/
// agregar metodo put acá! <-

router.put('/:email', updateUser);

module.exports = router;
