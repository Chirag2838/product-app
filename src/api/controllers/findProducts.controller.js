const findProducts = async (req, res) => {
    try {
        await req.user.populate('products').execPopulate();
        res.send(req.user.products);
    } catch (e) {
        res.status(400).send();
    }
}

module.exports = findProducts;