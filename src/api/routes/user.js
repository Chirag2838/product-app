const express = require('express');
const router = express.Router();

const registerUser = require('../controllers/registerUser.controller');
const loginUser = require('../controllers/login.controller');
const insertProducts = require('../controllers/insertProducts.controller');
const updateProduct = require('../controllers/updateProduct.controller');
const deleteProduct = require('../controllers/deleteProduct.controller');
const auth = require('../middlewares/auth');
const findProducts = require('../controllers/findProducts.controller');

router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/findProducts', auth, findProducts);

router.post('/insertProducts', auth, insertProducts);

router.patch('/updateProduct/:id', auth, updateProduct);

router.delete('/deleteProduct/:id', auth, deleteProduct);

module.exports = router;