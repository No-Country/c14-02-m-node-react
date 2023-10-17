const { UserManager } = require('../dao');
const usermanager = new UserManager();
const EncryptService = require('../services/Encrypter');
const AuthService = require('../services/Auth');

async function createUser(req, res) {
	try {
		const data = req.body;

		const phoneEncrypted = await EncryptService.encrypt(req.body.phone); // en Airbnb podes loguearte con tu numero de celular, se deberia encriptar ?

		const newUser = await usermanager.createUser({ ...data, phone: phoneEncrypted });
		console.log('result db', newUser);

		//test token

		const token = await AuthService.saveToken(data.name + data.surname + data.phone); // decidir que conbinacion de datos generaria el token

		console.log(token);

		return res.status(200).send({ auth: true, token: token }); // al loguearte y crear usuario, deberiamos mandar el token para quedar iniciados.
	} catch (error) {
		console.error('Error al crear el usuario', error);
		return res.status(400).send(error);
	}
}

async function login(req, res) {
	try {
		const { email, phone } = req.body;
		// ver el tema de logueo
		const user = await usermanager.getOneUser({ email: email });
		if (!user) throw new Error('El email no esta registrado');
		const validate = await EncryptService.validate(phone, user.phone);
		if (!validate) throw new Error('El numero de telefono es incorrecto');
		const token = await AuthService.saveToken(user.name + user.surname + user.phone);
		res.status(200).json({ auth: true, token: token, user });
	} catch (error) {
		console.log(error);
		res.status(400).json({ auth: false, error: error.message });
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
		next();
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

module.exports = { createUser, getUser, getUsers, updateUser, login };
