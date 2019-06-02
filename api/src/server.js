const express = require('express');
const bodyparser = require('simple-bodyparser');

const app = express();

// middlewares
app.use(bodyparser());

// routers
app.get('/', (req, res) => {
  res.send('Hello');
});

module.exports = app;
