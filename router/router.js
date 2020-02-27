const express = require('express');
const authRouter = require('../auth/auth-router');
const userRouter =  require('../users/user-router');
const restricted  = require('../middlewear/restricted-token.js');
const checkRole = require('../middlewear/check-role');
const router =  express.Router();



router.use('/auth', authRouter);
router.use('/users', restricted, checkRole('maintenance'), userRouter);

router.get('/', (req, res) => {
    res.status(200).json({message: 'api end point working'});
})

module.exports = router;