const express = require('express');

const router = express.Router();

const { ReviewController } = require('../controllers');

router.get('/', ReviewController.getAllReviews);

router.get('/:email', ReviewController.getReview);

router.post('/', ReviewController.createReview);

router.put('/update/:email', ReviewController.updateReview);

module.exports = router;
