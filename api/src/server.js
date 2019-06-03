const express = require('express');
const cors = require('cors');

const setRouter = require('./routers');

const app = express();

// middlewares
app.use(cors());
app.use(express.json())

// routers
setRouter(app);

module.exports = app;
