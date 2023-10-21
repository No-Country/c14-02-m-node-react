const express = require('express');
const router = express.Router();

const { PhotoController } = require('../controllers');

router.post('/', PhotoController.createPhoto);
router.get('/', PhotoController.getPhotos);
router.get('/:id', PhotoController.getPhoto);
router.put('/:id', PhotoController.updatePhoto);
router.delete('/:id', PhotoController.deletePhoto);

module.exports = router;
