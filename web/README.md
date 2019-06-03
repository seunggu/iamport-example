
## 웹 클라이언트

아임포트 예제 웹 클라이언트 입니다.


## 라이브러리 선택

아임포트에서 공식적으로 제공하는 결재 요청 라이브러리는 jQuery 기반의 라이브러리인데,
React와 함께 사용시 프로젝트와 비교적 덜 깔끌하게 합쳐지는 이슈가 있기 때문에
아래와 같이 리액트 컴포넌트로 포팅 된 것을 사용해도 된다.
그렇지만 라이브러리 성숙도가 문제가 될 수 있다.
해당 프로젝트는 공식 라이브러리로 진행했음.

- [react-iamport](https://www.npmjs.com/package/react-iamport)

## 라이브러리 설치

`index.html` 에 라이브러리 추가

```javascript
<!-- jQuery -->
<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js" ></script>

<!-- 아임포트 공식 라이브러리 -->
<script type="text/javascript" src="https://cdn.iamport.kr/js/iamport.payment-1.1.5.js"></script>

```

## 아임포트 가맹점 식별코드 초기화

결제 요청을 보내기 전에 가맹점 식별코드를 아래 코드와 같이
초기화 하여야 함

```javascript
const IMP = window.IMP;
IMP.init(PaymentButton.iamportId);
```

## 아임포트 결제 요청

결제 요청은 아래와 같이 request_pay 메서드를 이용하여 보냅니다

```javascript
IMP.request_pay({
    pg : 'html5_inicis',
    pay_method : 'card',
    merchant_uid : 'merchant_' + new Date().getTime(),
    name : '주문명:결제테스트',
    amount : 14000,
    buyer_email : 'iamport@siot.do',
    buyer_name : '구매자이름',
    buyer_tel : '010-1234-5678',
    buyer_addr : '서울특별시 강남구 삼성동',
    buyer_postcode : '123-456'
}, function(rsp) {
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
```

## request_pay 파라미터 정보

[파라미터 정보 문서](https://github.com/iamport/iamport-manual/blob/master/%EC%9D%B8%EC%A6%9D%EA%B2%B0%EC%A0%9C/README.md#211-param-%EC%86%8D%EC%84%B1%EA%B3%B5%ED%86%B5-%EC%86%8D%EC%84%B1)


## request_pay 콜백 구성

[콜백 구성 정보 문서](https://github.com/iamport/iamport-manual/blob/master/%EC%9D%B8%EC%A6%9D%EA%B2%B0%EC%A0%9C/README.md#214-callback%EC%9D%98-%EA%B5%AC%EC%84%B1)

## 참고 링크

- [아임포트 인증결제 매뉴얼](https://github.com/iamport/iamport-manual/blob/master/인증결제/README.md)
- [결제 모듈 데모 버전](https://www.iamport.kr/demo)
- [인증 결제 전체 Flow](https://github.com/iamport/iamport-manual/blob/master/%EC%9D%B8%EC%A6%9D%EA%B2%B0%EC%A0%9C/background.md)
