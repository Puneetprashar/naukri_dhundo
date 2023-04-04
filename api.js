const express = require('express');
const bodyParser = require('body-parser');
const User = require('./user');

const router = express.Router();
router.use(bodyParser.json());

router.post('/signup', async (req, res) => {
    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        await user.save();
        res.json({ message: 'User created' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.post('/signin', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            res.status(401).json({ error: 'Invalid email or password' });
            return;
        }
        if (user.password !== req.body.password) {
            res.status(401).json({ error: 'Invalid email or password' });
            return;
        }
        res.json({ message: 'User authenticated' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
