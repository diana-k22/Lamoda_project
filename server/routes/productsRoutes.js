const router = require('express').Router();
const {
    getProductsFilter,
    getProductsId
} = require('../controllers/productsControllers');


router.get('/products', getProductsFilter);
router.get('/products/:id', getProductsId)



module.exports = router; 