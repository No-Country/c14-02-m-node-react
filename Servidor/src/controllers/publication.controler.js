const PublicationManager = require('../dao/managerPublication.dao');
const publicatinManage = new PublicationManager();
const PublicationModel = require('../models/publication.model')

async function postPublicationController(req, res) {
	try {
		const data = req.body;
		// Valida los datos utilizando el modelo
		//uso la funcion validateSync de mongo para valodar compos definido en el modelo
		//se puede usar en el dao tambien como .validate
		const validationError = PublicationModel(data).validateSync();

		if (validationError) {
			return res.status(400).send(validationError);
		}

		const newPublication = await publicatinManage.createPublication(data);
		console.log("esto",newPublication)

		return res.status(200).send(newPublication);
	} catch (error) {
		console.error('Error al crear la publicación', error);
		return res.status(400).send(error);
	}
}


async function getPublicationController(req, res) {
	const email = req.body;
	try {
		const Publication = await publicatinManage.getOnePublication(email);
		return res.status(200).send(Publication);
	} catch (error) {
		console.error('Error al obtener la publicación', error);
		return res.status(400).send(error);
	}
}

async function getAllPublicationController(req, res) {
	try {
		const Publications = await publicatinManage.getAllPublication();
		return res.status(200).send(Publications);
	} catch (error) {
		console.error('Error al obtener la publicación', error);
		return res.status(400).send(error);
	}
}

async function putUpdatePublicationController(req, res) {
	const email = req.params;
	const data = req.body;
	try {
		const Publications = await publicatinManage.putUpdatePublication(email, data);
		if (Publications.matchedCount > 0) {
			const PublicationUp = await publicatinManage.getOneUser(email)
			return res.status(200).send(PublicationUp)
		}
	} catch (error) {
		console.error("Error al actualizar la publicación", error);
		return res.status(400).send(error)
	}
}

module.exports = { postPublicationController, getPublicationController, getAllPublicationController, putUpdatePublicationController };
