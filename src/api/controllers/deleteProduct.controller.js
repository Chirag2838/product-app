const Product = require("../../models/product")

const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findOneAndDelete({_id: req.params.id, creator: req.user._id});
        if (!product) {
            return res.status(404).send();
        }
        res.send(product);
    } catch (e) {
        res.status(400).send();
    }
}

module.exports = deleteProduct;