const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    email : {
        type: String,
        required: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error('Email invalid');
            }
        }
    },
    password : {
        type: String,
        required: true
    },
    token : {
        type: String
    }
})

userSchema.virtual('products', {
    ref: 'Product',
    localField: '_id',
    foreignField: 'creator'
})

userSchema.methods.generateToken = async function () {
    const user = this;
    const token = jwt.sign({_id: user._id.toString()}, 'product app');
    user.token = token;
    await user.save();
    return token;
}

const User = mongoose.model('User', userSchema);

module.exports = User;