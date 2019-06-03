const { iamport } = require('../models'); 

const validation = (req, res) => {
  const { imp_uid } = req.body;

  // imp_uid로 결제 정보 가져오기
  // merchant_uid로 해당 물품이 가격이 맞는지 확인 (중요)
  // 가격이 맞지 않는 경우 에러 리스폰 및 결제 취소
  // 가격이 맞는 경우 성공 리스폰 및 결제 정보 저장
  iamport.findByImpUid(imp_uid)
    .then((data) => console.log(data))
    .then(() => res.send('payments'))
    .catch(err => console.error(err));
}

const cancel = (req, res) => {
  const { imp_uid } = req.body;

  iamport.cancelByImpUid(imp_uid)
    .then(res => console.log(res))
    .then(() => res.json({ message: '결제 취소 완료' }))
    .catch(err => console.error(err));
}

module.exports = {
  validation,
  cancel,
};
