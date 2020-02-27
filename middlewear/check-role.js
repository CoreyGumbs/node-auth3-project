
function checkRole(role){
    return (req, res, next) =>{
       if(req.decodedToken && req.decodedToken.role && req.decodedToken.role.toLowerCase() === role){
        
        next();

       }else{
        res.status(403).json({error: "Invalid Credentials."});
       }
    }
}


module.exports = checkRole;