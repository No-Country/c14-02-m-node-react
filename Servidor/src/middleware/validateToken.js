const AuthService = require('../services/Auth');



module.exports = {

    validateMiddleware: async (req, res, next)=>{
        try {
            const token = await AuthService.ensureToken(req);
            req.token = token;
            const isValidate = await AuthService.validateToken(token)
            if(!isValidate) throw new Error("El token no es valido");
            next();
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }
}