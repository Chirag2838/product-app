const Product = require("../../models/product")

const insertProducts = async (req, res) => {
    const arr = [];
    try {
        req.body.forEach(element => {
            element.creator = req.user._id;
            arr.push(element);
        })
        await Product.insertMany(arr);
        res.send('Product inserted');
    } catch (e) {
        res.status(400);
    }
}

module.exports = insertProducts;