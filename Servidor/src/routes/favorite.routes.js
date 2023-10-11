const express = require("express");
const router = express.Router();

const { createFavorite, getAllFavorite } = require('../controllers/favorite.controller');


router.post('/', createFavorite);

router.get('/', getAllFavorite);


module.exports = router;