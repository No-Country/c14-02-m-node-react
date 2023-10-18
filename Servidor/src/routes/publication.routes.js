const express = require('express');
const router = express.Router();
const { PublicationControler } = require('../controllers');


router.get('/', PublicationControler.getAllPublicationController);

/** GET Publication devuelve todas las publicaciones
METHOD:  GET
URL:     http://localhost:3000/api/Publication
*/
router.get('/:email', PublicationControler.getPublicationController);

/** GET Publication devuelve todas las publicaciones por el email espesificado
METHOD:  GET
URL:     http://localhost:3000/api/publication/:email
*/


router.get('/byId/:id', PublicationControler.getPublicationByIdController);

/** GET PublicationbyId devuelve publicacion por id
METHOD:  GET
URL:     http://localhost:3000/api/publication/byId/652a8ffc06fc9560b23f30fc
*/

router.post('/', PublicationControler.postPublicationController);

/** CREATE Publication
METHOD:  POST
URL:     http://localhost:3000/api/publication
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

router.put('/:id', PublicationControler.putUpdatePublicationController);

/** UPDATE Publication actualiza un publicacion por el parametro espesificado 
METHOD:  PUT
URL:     http://localhost:3000/api/Publication/john.doe@mail.com
BODY:
         {
        "names": "Nikola",
         } 
*/

router.delete('/:id',PublicationControler.deletePublicationByIdController);

/** Delete Elimina publicacon por id 
 METHOD: DELETE
URL:     http://localhost:3000/api/Publication/652a9ba8752533560587e0fc

 */ 


module.exports = router;
