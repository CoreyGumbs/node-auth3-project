const express = require('express');
const bcrypt = require('bcryptjs');
const Users = require('../users/user-model');
const router = express.Router();

router.post('/register', (req, res) => {
    let user = req.body;
    console.log(user);
    const salt = bcrypt.genSaltSync(10); 
    const hash = bcrypt.hashSync(user.password, salt);

    user.password = hash;

    Users.add(user)
    .then(user => {
        res.status(201).json(user);
    })
    .catch(error => {
        res.status(500).json({error: 'There was a problem registering your account'});
    });
});

router.post('/login', (req, res) => {
    let {username, password} = req.body;

    Users.findBy({username})
    .first()
    .then(user => {
        if(user && bcrypt.compareSync(password, user.password)){
            res.status(200).json({message: `Welcome ${user.username}, you are currently logged in.`});
        } else{
            res.status(401).json({message: "Invalid Credentials"});
        }
    })
    .catch(error => {
        res.status(500).json({error: 'There was a problem logging in.'});
    });
});

module.exports = router;