const Database = require('../config/mongodb.js');
const { createDocument } = require('../config/factory.js');
const UserModel = require('../models/user-models.js');

class UserManager {
	constructor() {
		this.db = new Database();
		this.createDocument = createDocument;
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
}

module.exports = UserManager;
