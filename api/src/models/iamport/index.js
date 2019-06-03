const { Iamporter, IamporterError } = require('iamporter');

const config = require('../../config');

const iamporter = new Iamporter({
  apiKey: config.iamportApiKey,
  secret: config.iamportApiSecret,
});

/**
 * imp_uid를 이용해 결제 정보 가져오기
 * @param {string} impUid 
 */
const findByImpUid = (impUid) => {
  return iamporter.findByImpUid(impUid);
}

/**
 * imp_uid를 이용해 결제 취소
 * @param {string} impUid 
 */
const cancelByImpUid = (impUid) => {
  return iamporter.cancelByImpUid(impUid);
}

module.exports = {
  findByImpUid,
  cancelByImpUid,
};

