const { PhotoManager } = require('../dao');
const photoManager = new PhotoManager();
const { isValidObjectId, isValidURL } = require('../functions/validationPhotos.js');

const createPhoto = async (req, res) => {
	try {
		const { url } = req.body;
		if (!isValidURL(url)) {
			res.status(400).json({ error: 'El campo URL debe ser una URL válida con formato HTTP o HTTPS.' });
			return;
		}
		if (await photoManager.getOnePhotoByURL(url)) {
			res.status(400).json({ error: 'La foto ya éxiste' });
			return;
		}
		const newPhoto = await photoManager.createPhoto(url);
		console.log(newPhoto);
		res.status(201).json(newPhoto);
	} catch (error) {
		console.log('Error al agregar la imagen', error.message);
		return res.status(500).json({ error: error.message });
	}
};

const getPhoto = async (req, res) => {
	try {
		const { id } = req.params;
		if (!isValidObjectId(id)) {
			res.status(400).json({ error: 'Ingrese un ID valido' });
			return;
		}
		const photo = await photoManager.getOnePhoto(id);
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
		const { id } = req.params;
		const { url } = req.body;
		if (!isValidObjectId(id)) {
			res.status(400).json({ error: 'Ingrese un ID valido' });
			return;
		}
		if (!isValidURL(url)) {
			res.status(400).json({ error: 'El campo URL debe ser una URL válida con formato HTTP o HTTPS.' });
			return;
		}
		if (!(await photoManager.getOnePhotoByURL(url))) {
			// <-- esto queda pendiente
			res.status(404).json({ error: 'La foto no éxiste' });
			return;
		}
		const dataUpdate = { url };
		const photo = await photoManager.updatePhoto(id, dataUpdate);
		console.log(photo);
		if (photo.matchedCount > 0) {
			const photoUp = await photoManager.getOnePhoto(dataUpdate);
			res.status(201).json(photoUp);
			return;
		}
	} catch (error) {
		console.log('Error al actualizar la imagen', error.message);
		res.status(500).json({ error: error.message });
		return;
	}
};

const deletePhoto = async (req, res) => {
	try {
		const { id } = req.params;
		if (!isValidObjectId(id)) {
			res.status(400).json({ error: 'Ingrese un ID valido' });
			return;
		}
		const photo = await photoManager.deletePhoto(id);
		if (photo.deletedCount !== 1) {
			res.status(404).json({ error: 'Foto no encontrada' });
			return;
		}
		res.status(200).json({ message: 'Foto eliminada con éxito', data: photo });
	} catch (error) {
		console.log('Error al eliminar la imagen', error.message);
		return res.status(500).json({ error: error.message });
	}
};

module.exports = { createPhoto, getPhoto, getPhotos, updatePhoto, deletePhoto };
