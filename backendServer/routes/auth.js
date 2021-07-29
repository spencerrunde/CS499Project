const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {

    // Used to hash passwords
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        email: req.body.email,
        password: hashedPassword // Stores hashed password in database
    });

    try{
        const savedUser = await user.save();
        res.send({user: user._id});
    }catch(err){
        res.status(400).send(err);
    }
});

router.post('/login', async (req, res) => {

    // email check
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Email does not exist')

    // password check
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send('Password is incorrect')

    // creating token for user
    const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET);
    res.header('auth-token', token).send({
        token: token
    });
});

module.exports = router;