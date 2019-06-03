require('dotenv-safe').config();

const config = require('./config');

const app = require('./server');
const mongo = require('./mongo');

const { port, mongoHost, mongoPort, mongoDatabase } = config;

// connect mongo
mongo.connect(mongoHost, mongoPort, mongoDatabase)

// run server
app.listen(port, () => console.log(`server start (port: ${port})`));
