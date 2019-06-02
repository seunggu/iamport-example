require('dotenv-safe').config();

const config = require('./config');

const app = require('./server');

const port = config.port;
app.listen(port, () => console.log(`server start (port: ${port})`));
