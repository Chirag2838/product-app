const Product = require("../../models/product");

const updateProduct = async (req, res) => {
    const updateReq = Object.keys(req.body);
    const updateAvail = ['name', 'price'];
    const isValid = updateReq.every(update => updateAvail.includes(update));
    if (!isValid) {
        return res.status(400).send();
    }
    try {
        const product = await Product.findOne({_id: req.params.id});
        if (!product) {
            return res.status(404).send();
        }
        updateReq.forEach(update => {
            product[update] = req.body[update];
        })
        await product.save();
        res.send(product);
    } catch (e) {
        res.status(400).send(e);
    }
}

module.exports = updateProduct;