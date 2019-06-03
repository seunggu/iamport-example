const { Product } = require('../models');

const getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.json({
    message: '모든 상품 가져오기 완료',
    result: {
      count: products.length,
      products,
    },
  });
}

module.exports = {
  getAllProducts,
};
