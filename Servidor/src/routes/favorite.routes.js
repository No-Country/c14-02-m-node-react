const express = require("express");
const router = express.Router();

const { createFav, getAllFavorite, deleteFav } = require('../controllers/favorite.controller');

/** POST favorito
METHOD:  POST
URL: http://localhost:3000/api/favorite
Al hacer click en un favorito fuciona como un create crea un post/favorito

en el body se le pasa esto:
{
  "userId": "6527535dd201003c73f3f0c7",
  "publicationId": "6527d31fb94cd97e8dbd7879"
}
Y se crea esto:
{"_id":{"652d9f8e345315ef3abe1bf7"}, --> id propio del fav que se crea solo
"userId":{"$oid":"6527535dd201003c73f3f0c7"}, --> id el usuario
"publicationId":{"$oid":"6527d31fb94cd97e8dbd7879"} --> id de la publicacion
}

*/
router.post('/', createFav);

/** GET favorito
METHOD:  GET
URL: http://localhost:3000/api/favorite
Trae todos los favoritos juntos que fueron clickeados
*/
router.get('/', getAllFavorite);




/** DELETE favorito
METHOD:  DELETE
URL: http://localhost:3000/api/favorite/652a8ffc06fc9560b23f30fc   --> este es el id pasado
Elimina el id pasado 
*/
router.delete('/:id', deleteFav);


module.exports = router;