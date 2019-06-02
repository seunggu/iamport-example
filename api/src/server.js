const express = require('express');
const bodyparser = require('simple-bodyparser');

const setRouter = require('./routers')

const app = express();

// middlewares
app.use(bodyparser());

// routers
setRouter(app);

module.exports = app;
