const jwt = require('jsonwebtoken');

function generateToken(user){
    const payload = {
        username: user.username
    }

    const secret = 'he who controls the spice, controls the universe';

    const options = {
        expiresIn: '1hr' 
    }

    return jwt.sign(payload, secret, options);
}

module.exports = generateToken;