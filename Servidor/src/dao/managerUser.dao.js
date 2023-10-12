const Database = require('../config/mongodb.js');
const { createDocument, getOneDocument, allDocument, UpdateDocument } = require('../config/factory.js');
// const UserModel = require('../models/user.model.js');
const { UserModel } = require('../models/');

class UserManager {
	constructor() {
		this.db = new Database();
		this.createDocument = createDocument;
		this.getOneDocument = getOneDocument;
		this.allDocument = allDocument;
		this.UpdateDocument = UpdateDocument;
	}

	async createUser(data) {
		const { names, surname, birthDate, email, phone, address, officialId, phoneUrgency, pictureID, role } = data;
		console.log(data);

		const user = UserModel({
			names,
			surname,
			birthDate,
			email,
			phone,
			address,
			officialId,
			phoneUrgency,
			pictureID,
			role,
		});
		await this.createDocument('usersCollection', user);
	}

	async getOneUser(query) {
		try {
			const user = await this.getOneDocument('usersCollection', query);
			return user;
		} catch (error) {
			console.error(error);
			throw new Error(`Error al obtener el usuario: ${error.message}`);
		}
	}

	async getAllUser() {
		try {
			const users = await this.allDocument('usersCollection');
			return users;
		} catch (error) {
			console.error(error);
			throw new Error(`Error al obtener el usuario: ${error.message}`);
		}
	}

	async updateUser(filter, dataUpdate) {
		try {
			const users = await this.UpdateDocument('usersCollection', filter, dataUpdate);
			return users;
		} catch (error) {
			console.error(error);
			throw new Error(`Error al actualizar usuario: ${error.message}`);
		}
	}
}

module.exports = UserManager;
