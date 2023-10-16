const express = require("express");
const router = express.Router();

const { createFav, getAllFavorite, deleteFav } = require('../controllers/favorite.controller');


router.post('/', createFav);

router.get('/', getAllFavorite);

router.delete('/:id', deleteFav);


module.exports = router;