const PublicationManager = require('../dao/managerPublication.dao');
const publicatinManage = new PublicationManager();
const PublicationModel = require('../models/publication.model')
const { ObjectId } = require('mongodb');

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
		console.log("esto", newPublication)

		return res.status(200).send(newPublication);
	} catch (error) {
		console.error('Error al crear la publicación', error);
		return res.status(400).send(error);
	}
}


async function getPublicationController(req, res) {
	const email = req.params;
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

async function getPublicationByIdController(req, res) {
	const id = req.params.id;
	try {
		const publicationId = new ObjectId(id);
		const Publication = await publicatinManage.getPublicationById({ _id: publicationId });
		return res.status(200).send(Publication)
	} catch (error) {
		console.error('Error al obtener la publicación por id', error);
		return res.status(400).send(error);
	}
}

async function putUpdatePublicationController(req, res) {
	const id = req.params.id;
	const data = req.body;

	try {
		const publicationId = new ObjectId(id);
		const result = await publicatinManage.putUpdatePublication({ _id: publicationId }, data);

		if (result.matchedCount > 0) {
			const publicationUp = await publicatinManage.getOnePublication({ _id: publicationId });
			return res.status(200).send(publicationUp);
		} else {
			return res.status(404).send("No se encontró la publicación con el ObjectID proporcionado.");
		}
	} catch (error) {
		console.error("Error al actualizar la publicación", error);
		return res.status(400).send(error);
	}
}

async function deletePublicationByIdController(req, res) {
	const id = req.params.id;
	try {
		const deletePublicationById = new ObjectId(id);
		const deletionResult = await publicatinManage.deletePublicationById({ _id: deletePublicationById });

		if (deletionResult.deletedCount > 0) {
			return res.status(200).send('Publicación eliminada con éxito');
		} else {
			return res.status(404).send('No se encontró la publicación con el ObjectID proporcionado o no se eliminó.');
		}
	} catch (error) {
		console.error("Error al eliminar la publicación", error);
		return res.status(400).send(error);
	}
}



module.exports = { postPublicationController, getPublicationController, getAllPublicationController, putUpdatePublicationController, getPublicationByIdController, deletePublicationByIdController };
