
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

## PaymentButton 컴포넌트

해당 컴포넌트의 주 기능은 아래의 두 가지

- 가맹점 식별코드 설정
- 버튼 클릭시 결제 요청

