const mongoose = require('mongoose');

const connect = (host, port, database) => {
  mongoose.connect(`mongodb://${host}:${port}/${database}`, {
    useNewUrlParser: true
  });
  const connection = mongoose.connection;
  connection.once('open', () => console.log('mongoose connected!'));
  connection.on('error', err => console.error(err));
}

module.exports = {
  connect,
};
