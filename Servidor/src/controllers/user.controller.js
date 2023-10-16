const { UserManager } = require('../dao');
const usermanager = new UserManager();

async function createUser(req, res) {
	try {
		const data = req.body;
		const newUser = await usermanager.createUser(data);

		return res.status(200).send(newUser);
	} catch (error) {
		console.error('Error al crear el usuario', error);
		return res.status(400).send(error);
	}
}

async function getUser(req, res) {
	const email = req.body;
	try {
		const User = await usermanager.getOneUser(email);
		return res.status(200).send(User);
	} catch (error) {
		console.error('Error al obtener el usuario', error);
		return res.status(400).send(error);
	}
}

async function getUsers(req, res) {
	try {
		const Users = await usermanager.getAllUser();
		return res.status(200).send(Users);
	} catch (error) {
		console.error('Error al obtener el usuario', error);
		return res.status(400).send(error);
	}
}

async function updateUser(req, res) {
	const email = req.params;
	const data = req.body;
	try {
		const Users = await usermanager.updateUser(email, data);
		if (Users.matchedCount > 0) {
			const userUp = await usermanager.getOneUser(email);
			return res.status(200).send(userUp);
		}
	} catch (error) {
		console.error('Error al actualizar el usuario', error);
		return res.status(400).send(error);
	}
}

module.exports = { createUser, getUser, getUsers, updateUser };
