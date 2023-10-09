const Database = require('../config/mongodb.cjs')
const { createDocument } = require('../config/factory.cjs')
const  UserModel  = require('../models/user-models.cjs')


class UserManager {
    constructor() {
        this.db = new Database
        this.createDocument = createDocument
        
    }

    async createUser(data) {
        const {names,surname,birthDate,email,phone,address,
            officialId,phoneUrgency,pictureID,role } = data
            console.log(data)

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
            role
        });
        await this.createDocument('usersCollection', user)
    }
}
    
module.exports = UserManager
