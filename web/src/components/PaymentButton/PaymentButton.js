import React, { Component } from 'react';
import './PaymentButton.css';

export default class PaymentButton extends Component {

  static iamportId = 'imp43326529';

  onClick = () => {
    this.initIamportId();
    this.requestPayment(
      'sg_merchant_' + new Date().getTime(),
      '상품명',
      'imaster0209@naver.com',
      '정승현',
      '010-2055-2099',
      '서울특별시 강남구 삼성동',
      '608-833',
    );
  }

  initIamportId = () => {
    const IMP = window.IMP;
    IMP.init(PaymentButton.iamportId);
  }

  requestPayment = (
    marchantId, merchantName,
    buyerEmail, buyerName, buyerTel, buyerAddr, buyerPostal,
  ) => {
    const IMP = window.IMP;
    IMP.request_pay({
      pg : 'danal',
      pay_method : 'card',
      company: '가맹점 이름',
      merchant_uid : marchantId,
      name : merchantName,
      amount : 1000,
      buyer_email : buyerEmail,
      buyer_name : buyerName,
      buyer_tel : buyerTel,
      buyer_addr : buyerAddr,
      buyer_postcode : buyerPostal,
  }, function(rsp) {
      console.log(rsp);
      if ( rsp.success ) {
          var msg = '결제가 완료되었습니다.';
          msg += '고유ID : ' + rsp.imp_uid;
          msg += '상점 거래ID : ' + rsp.merchant_uid;
          msg += '결제 금액 : ' + rsp.paid_amount;
          msg += '카드 승인번호 : ' + rsp.apply_num;
      } else {
          var msg = '결제에 실패하였습니다.';
          msg += '에러내용 : ' + rsp.error_msg;
      }
      alert(msg);
  });
  }

  render() {
    return (
      <button
        className="payment-btn"
        onClick={this.onClick}
      >
        결재 요청
      </button>
    );
  }
}
