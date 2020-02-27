const jwt = require('jsonwebtoken');
// const {jwtSecret} = require('../config/secrets');

function generateToken(user){
    const payload = {
        username: user.username
    }

    const options = {
        expiresIn: '1hr' 
    }

    return jwt.sign(payload, process.env.JWT_SECRET, options);
}

module.exports = generateToken;