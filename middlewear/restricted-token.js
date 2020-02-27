const jwt = require('jsonwebtoken');
const {jwtSecret} = require('../config/secrets');

module.exports = (req, res, next) => {
    //gets authorization header
    const { authorization } = req.headers;

    //checks for authorization header
    if(authorization){

        jwt.verify(authorization, jwtSecret, (err, decodedToken) => {

            if(err){
                res.status(401).json({message: 'Invalid Credentials'});
            }else{
                req.decodedToken =   decodedToken;
                next();
            }     
        });     
    }else{
        
        res.status(401).json({message: 'Invalid Credentials'});
    }


};