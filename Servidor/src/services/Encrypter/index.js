const bcrypt = require('bcryptjs');


class EncryptService {
    async encrypt(data){
        const salt = await bcrypt.genSalt(10);
        return bcrypt.hash(data, salt);
    }

    async validate(password, hashedData){
        return bcrypt.compare(password, hashedData);
    }
}

module.exports = new EncryptService();