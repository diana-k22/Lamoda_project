const {Product} = require('../bin/data/products.json')

const getProducts = (req, res) => {
    res.status(200).send(Product)
}

module.exports = {
    getProducts
}