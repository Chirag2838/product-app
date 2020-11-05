const User = require('../../models/user');

const registerUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.send('user successfully registered');
    } catch(e) {
        res.status(400);
    }
}

module.exports = registerUser;