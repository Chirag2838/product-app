const User = require("../../models/user")

const loginUser = async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email, password: req.body.password});
        if (user) {
            const token = await user.generateToken();
            return res.send({token});
        }
        res.send('Wrong Credentials');
    } catch (e) {
        res.status(400);
    }
}

module.exports = loginUser;