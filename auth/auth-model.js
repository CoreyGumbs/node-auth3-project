const jwt = require('jsonwebtoken');
const {jwtSecret} = require('../config/secrets');

function generateToken(user){
    const payload = {
        username: user.username,
        role: user.departments || "user"
    }

    const options = {
        expiresIn: '1hr' 
    }

    return jwt.sign(payload, jwtSecret, options);
}

module.exports = generateToken;