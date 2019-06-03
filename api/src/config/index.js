const config = {
    port: 4000,
    iamportApiKey: process.env.IAMPORT_API_KEY,
    iamportApiSecret: process.env.IAMPORT_API_SECRET,
    mongoHost: 'localhost',
    mongoPort: 27017,
    mongoDatabase: 'test',
};

module.exports = config;
