const router = require('express').Router();
const {
    getProducts,
    // getProductsWomen,
    // getProductsMan,
    // getProductsChildren,
} = require('../controllers/products');


router.get('/', getProducts);
// router.get('/women', getProductsWomen);
// router.get('/man', getProductsMan);
// router.get('/children', getProductsChildren);