const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    //gets authorization header
    const { authorization } = req.headers;

    //checks for authorization header
    if(authorization){

    }else{

    }


};