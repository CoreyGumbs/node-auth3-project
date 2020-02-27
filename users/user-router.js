const express = require('express');
const router =  express.Router();
const User = require('./user-model');

router.get('/', (req, res) => {
    User.find()
    .then(user => {
        res.status(200).json(user);
    })
    .catch(error => {
        res.status(500).json({error: 'There was an error retrieving users'});
    })
});

router.get('/:id', (req, res) => {
    User.findById(req.params.id)
    .then(user => {
        res.status(200).json(user);
    })
    .catch(error => {
        res.status(500).json({error: 'There was an error retrieving user'});
    });
})

module.exports = router;