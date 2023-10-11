const express = require('express');
const router = express.Router();
const { postPublicationController, getPublicationController, getAllPublicationController, putUpdatePublicationController } = require('../controllers/publication.controler');

/** GET USERS
METHOD:  GET
URL:     http://localhost:3000/api/Publication
*/
router.get('/', getAllPublicationController);

/** GET Publication
METHOD:  GET
URL:     http://localhost:3000/api/Publication
*/
router.get('/:email', getPublicationController);

/** CREATE Publication
METHOD:  POST
URL:     http://localhost:3000/api/Publication
BODY:
     {
  "type": "Apartment",
  "offering": "Rent",
  "location": "123 Main Street, Thunder City",
  "spaces": [
    "bedrooms",
    "bathrooms",
    "livingRoom",
    "kitchen"]
  ,
  "amenities": ["WiFi", "Swimming Pool", "Gym", "Parking"],
  "featured": true,
  "security": [
    "securityGuard",
    "surveillanceCameras",
    "alarmSystem"],
  "photos": [
    "https://example.com/photo1.jpg",
    "https://example.com/photo2.jpg",
    "https://example.com/photo3.jpg"
  ],
  "title": "Cozy Two-Bedroom Apartment with Pool View",
  "description": "A beautiful apartment with a great pool view. Perfect for a family or a group of friends.",
  "type_guest": "Family",
  "price": 1200,
  "discount": 10,
  "extra_Security": "Security deposit required",
  "ownerUser_ID": "user123"
}
*/
router.post('/', postPublicationController);

/** UPDATE Publication
METHOD:  PUT
URL:     http://localhost:3000/api/Publication/john.doe@mail.com
BODY:
         {
        "names": "Nikola",
         } 
*/
// agregar metodo put acá! <-

router.put('/update/:email', putUpdatePublicationController)

module.exports = router;