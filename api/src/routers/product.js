const router = require('express').Router();

const { products } = require('../controllers');

router.get('/', products.getAllProducts);

module.exports = router;
