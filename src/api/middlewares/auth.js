const User = require("../../models/user");
const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, 'product app');
        const user = await User.findOne({_id: decoded._id, token: token});
        if (!user) {
            throw new Error();
        }
        req.user = user;
        next();
    } catch (e) {
        res.status(400).send();
    }
}

module.exports = auth;