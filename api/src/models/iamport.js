const { Iamporter, IamporterError } = require('iamporter');

const config = require('../config');

const iamporter = new Iamporter({
  apiKey: config.iamportApiKey,
  secret: config.iamportApiSecret,
});

const findByImpUid = (impUid) => {
  return iamporter.findByImpUid(impUid);
};

module.exports = {
  findByImpUid,
};

