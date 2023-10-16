const express = require("express");
const router = express.Router();

const { createFavorite, getAllFavorite, deleteFavorite } = require('../controllers/favorite.controller');


router.post('/', createFavorite);

router.get('/', getAllFavorite);

router.delete('/:publicationId', deleteFavorite);


module.exports = router;