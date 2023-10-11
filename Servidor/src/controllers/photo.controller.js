const { PhotoManager } = require('../dao');
const photoManager = new PhotoManager();

const createPhoto = async (req, res) => {
	try {
		const img = req.body;
		const newPhoto = await photoManager.createPhoto(img);
		return res.status(201).json(newPhoto);
	} catch (error) {
		console.log('Error al agregar la imagen', error.message);
		return res.status(500).json({ error: error.message });
	}
};

const getPhoto = async (req, res) => {
	try {
		const img = req.body;
		const photo = await photoManager.getOnePhoto(img);
		return res.status(201).json(photo);
	} catch (error) {
		console.log('Error al obtener la imagen', error.message);
		return res.status(500).json({ error: error.message });
	}
};

const getAllPhotos = async (req, res) => {
	try {
		const photos = await photoManager.getAllPhotos();
		return res.status(201).json(photos);
	} catch (error) {
		console.log('Error al obtener las imagenes', error.message);
		return res.status(500).json({ error: error.message });
	}
};

// revisar esta version
const updatePhoto = async (req, res) => {
	try {
		const img = req.body;
		const photo = await photoManager.updatePhoto(img);
		if (photo.matchedCount > 0) {
			const photoUp = await photoManager.getPhoto(img);
			return res.status(201).json(photoUp);
		}
	} catch (error) {
		console.log('Error al actualizar la imagen', error.message);
		return res.status(500).json({ error: error.message });
	}
};

module.exports = { createPhoto, getPhoto, getAllPhotos, updatePhoto };
