const jwt = require('jsonwebtoken');
// import secret
require('dotenv').config();
const SECRET = process.env.SECRET;

class AuthService {
    async saveToken(id){
        try {
            if(!SECRET) throw new Error('Debe configurarse un secret de autentificación');
            const token = jwt.sign({ id }, SECRET, {
                expiresIn: 60 *60 *24
            });
            return token;
        } catch (err) {
            console.error(err)
            
        }
    }

    async validateToken(token){
        try {
            if(!token) throw new Error("No se proporcionó un token");
            const decoded = jwt.verify(token, SECRET);
            return decoded;
        } catch (err) {
            console.error(err);
        }
    }

    async ensureToken(req){
        const bearer = req.headers["access-token"];
        if(typeof bearer !== "undefined"){
            return bearer
        }else{
            throw new Error("usuario no autorizado");
        }
    }
}


module.exports = new AuthService();