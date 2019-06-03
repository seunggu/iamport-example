const payment = require('./payment');
const product = require('./product');

const setRouters = app => {
  app.use('/payments', payment);
  app.use('/products', product);
}

module.exports = setRouters;
