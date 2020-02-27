const jwt = require('jsonwebtoken');
//const {jwtSecret} = require('../config/secrets');

module.exports = (req, res, next) => {
    //gets authorization header
    const { authorization } = req.headers;
    //const secret = process.env.JWT_SECRET || "he who controls the spice, controls the universe";

    //checks for authorization header
    if(authorization){

        jwt.verify(authorization, process.env.JWT_SECRET, (err, decodedToken) => {

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