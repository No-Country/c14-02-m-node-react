const  PublicationManager  = require('../dao/managerPublication.dao');
const publicatinManage = new PublicationManager();

async function postPublicationController(req, res) {
	try {
		const data = req.body;
		const newUser = await publicatinManage.createPublication(data);

		return res.status(200).send(newUser);
	} catch (error) {
		console.error('Error al crear la publicación', error);
		return res.status(400).send(error);
	}
}

async function getPublicationController(req, res) {
	const email = req.body;
	try {
		const User = await publicatinManage.getOnePublication(email);
		return res.status(200).send(User);
	} catch (error) {
		console.error('Error al obtener la publicación', error);
		return res.status(400).send(error);
	}
}

async function getAllPublicationController(req, res) {
	try {
		const Users = await publicatinManage.getAllPublication();
		return res.status(200).send(Users);
	} catch (error) {
		console.error('Error al obtener la publicación', error);
		return res.status(400).send(error);
	}
}

async function putUpdatePublicationController(req, res) {
    const email = req.params;
    const data = req.body;
    try {
        const Users = await publicatinManage.putUpdatePublication(email, data);
        if (Users.matchedCount > 0) {
			const userUp = await usermanager.getOneUser(email) 
			return res.status(200).send(userUp)
		}
    } catch (error) {
        console.error("Error al actualizar la publicación", error);
        return res.status(400).send(error)
    }
}

module.exports = { postPublicationController,getPublicationController,getAllPublicationController,putUpdatePublicationController };
