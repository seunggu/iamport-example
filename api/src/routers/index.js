const router = require('express').Router();

const payment = require('./payment');

const setRouters = app => {
  app.use('/payments', payment);
}

module.exports = setRouters;
