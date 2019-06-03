
## 서버

아임포트 예제 서버

## 라이브러리 선택

아임포트에서는 공식적으로 REST API 만을 지원하지만,
사용하는 사용자와 기업이 많아 각 플랫폼별로 신뢰성 있고
인터페이스가 깔끔한 라이브러리가 클라이언트보다 많다

Node.js 아임포트 라이브러리 목록

- [iamporter](https://www.npmjs.com/package/iamporter) 추천!
- [iamport-rest-client-nodejs](https://github.com/iamport/iamport-rest-client-nodejs)

## 결제시 서버가 해줘야 되는 일

클라이언트(웹, 앱)에서 결제 요청을 하여 인증 및 결제가 완료되면,
클라이언트의 보안이 충분하지 않기 때문에(비정상적 금액 변경, 상품 변경 등)
클라이언트가 진행한 결제에 대해서 서버가 imp_uid를 전달 받아 REST API나 라이브러리를 통해 아임포트 서버로 정보를 받아 해당 상품과 금액이 정확히 일치하는지 확인해야 한다.

그리고 도메인 유효성 검사(현재 구입이 안되는 상태 확인), 중복된 결제 요청(이미 저장된 imp_uid에 대한 중복 결제) 등을 검사 해줘야 한다.

## 보안 이슈

가맹점 식별코드는 노출이 되어도 크게 문제가 없지만, 
REST API KEY와 SECRET KEY는 노출 시 결제 정보들을 아무나 생성, 수정 할 수 있으므로 절대 노출이 되어서는 안된다.

## 테스팅 모드시 부분 결제 취소 이슈

현재 아임포트에서는 테스팅 모드에서는 부분 결제 취소를 지원하지 않음.
부분 결제 취소 요청 보낼시에 200 성공 응답이 오지만,
에러 메시지에 "현재 가맹점은 부분 결제 취소가 불가능합니다" 라고 뜸.

## iamporter 부록

iamporter에서는 문서에 명시되어 있지 않지만 imp_uid를 이용해 부분 결제 취소를 하는 일 필요함. 라이브러리 구현 코드를 보고 아래와 같이 할 수 있음

```javascript
iamporter.cancelByImpUid('imp_uid', {
  amount: 2500,
  reason: '예약 변경'
}).then(...);
```

## 참고 링크

- [인증 결제 전체 Flow](https://github.com/iamport/iamport-manual/blob/master/%EC%9D%B8%EC%A6%9D%EA%B2%B0%EC%A0%9C/background.md)
- [아임포트 베타버전 공식문서](https://docs.iamport.kr/tech/access-token)
- [아임포트 REST API 문서](https://api.iamport.kr/#/)
- [결제 모듈 데모 버전](https://www.iamport.kr/demo)
- [아임포트 인증결제 매뉴얼](https://github.com/iamport/iamport-manual/blob/master/인증결제/README.md)
- [인증결제 PG사별 샘플](https://github.com/iamport/iamport-manual/tree/master/%EC%9D%B8%EC%A6%9D%EA%B2%B0%EC%A0%9C/sample)
