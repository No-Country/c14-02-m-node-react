const express = require('express');

const router = express.Router();

const { ReviewController } = require('../controllers');

router.post('/', ReviewController.createReview);
router.get('/', ReviewController.getAllReviews);
router.get('/:id', ReviewController.getReview);
router.put('/:id', ReviewController.updateReview);
router.delete('/:id', ReviewController.deleteReview);

module.exports = router;
