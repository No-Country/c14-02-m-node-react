const UserManager = require('../dao/managerUser.cjs')
const usermanager = new UserManager

async function postCreateUser(req, res) {
    try {
        const data = req.body
        const newUser = await usermanager.createUser(data)

        return res.status(200).send(newUser)
    } catch (error) {
        console.error('Error al crear el usuario', error)
        return res.status(400).send(error)
    }
}

module.exports = {postCreateUser}

