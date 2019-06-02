const express = require('express');

const setRouter = require('./routers')

const app = express();

// middlewares
app.use(express.json())

// routers
setRouter(app);

module.exports = app;
