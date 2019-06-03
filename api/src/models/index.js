const iamport = require('./iamport');
const mongoose = require('./mongoose');

module.exports = {
  iamport,
  ...mongoose,
};
