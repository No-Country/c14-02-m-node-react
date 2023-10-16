const { PhotoManager } = require('../dao');
const photoManager = new PhotoManager();

const createPhoto = async (req, res) => {
	try {
		const url = req.body;
		const newPhoto = await photoManager.createPhoto(url);
		return res.status(201).send(newPhoto);
	} catch (error) {
		console.log('Error al agregar la imagen', error.message);
		return res.status(500).json({ error: error.message });
	}
};

const getPhoto = async (req, res) => {
	try {
		const url = req.body;
		const photo = await photoManager.getOnePhoto(url);
		return res.status(201).json(photo);
	} catch (error) {
		console.log('Error al obtener la imagen', error.message);
		return res.status(500).json({ error: error.message });
	}
};

const getPhotos = async (req, res) => {
	try {
		const photos = await photoManager.getAllPhotos();
		return res.status(201).json(photos);
	} catch (error) {
		console.log('Error al obtener las imagenes', error.message);
		return res.status(500).json({ error: error.message });
	}
};

const updatePhoto = async (req, res) => {
	try {
		const id = req.params;
		const url = req.body;
		const photo = await photoManager.updatePhoto(id, url);
		if (photo.matchedCount > 0) {
			const photoUp = await photoManager.getOnePhoto(url);
			return res.status(201).json(photoUp);
		}
	} catch (error) {
		console.log('Error al actualizar la imagen', error.message);
		return res.status(500).json({ error: error.message });
	}
};

const deletePhoto = async (req, res) => {
	try {
		const id = req.params;
		const photo = await photoManager.deletePhoto(id);
		console.log(photo);
		return res.status(200).json(photo);
	} catch (error) {
		console.log('Error al eliminar la imagen', error.message);
		return res.status(500).json({ error: error.message });
	}
};

module.exports = { createPhoto, getPhoto, getPhotos, updatePhoto, deletePhoto };
