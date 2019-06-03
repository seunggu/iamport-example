const mongoose = require('mongoose');

const { Product } = require('./models/mongoose');

// mongoose promise를 standard promise로 변경
mongoose.Promise = global.Promise;

const connect = (host, port, database) => {
  mongoose.connect(`mongodb://${host}:${port}/${database}`, {
    useNewUrlParser: true
  });
  const connection = mongoose.connection;

  connection.once('open', () => {
    initData()
      .then(() => console.log('mongoose connected!'))
      .catch(err => console.error(err));
  });

  connection.on('error', err => console.error(err));
}

const initData = () => {
  const product1 = new Product({ name: '상품1', price: 3000 });
  const product2 = new Product({ name: '상품2', price: 4000 });
  const product3 = new Product({ name: '상품3', price: 5000 });
  return Promise.all([product1.save(), product2.save(), product3.save()]);
}

module.exports = {
  connect,
};
