const express = require('express');
const router = express.Router();

const { PhotoController } = require('../controllers');

router.post('/', PhotoController.createPhoto);
router.get('/', PhotoController.getPhotos);
router.get('/:img', PhotoController.getPhoto);
router.put('/:img', PhotoController.updatePhoto);
router.delete('/:img', PhotoController.deletePhoto);

module.exports = router;
