# 자바스크립트 1주차 정리 - 정현구

## 1. 변수와 상수

- **변수 (let)**
  - 값을 바꿀 수 있는 저장 공간
- **상수 (const)**
  - 한 번 정하면 바꿀 수 없는 저장 공간
  - 선언 시 초기화 필수
- **명명 규칙**
  - `$`, `_`를 제외한 특수문자 사용 불가
  - 숫자로 시작 불가
  - 예약어 사용 불가

## 2. 자바스크립트의 자료형 (Data Type)

### 원시 타입 (Primitive Type)

- `number`, `string`, `boolean`, `null`, `undefined`
- 하나의 값만 저장
- 값 자체를 복사

### 객체 타입 (Object Type)

- `object` → `Array`, `Function`, `RegExp`
- 여러 개의 값을 저장 가능
- 참조(reference)로 저장

## 3. 형 변환 (Type Casting)

### 묵시적 형 변환

- 자바스크립트 엔진이 자동으로 변환

```javascript
console.log("1" + 2); // "12"
```

### 명시적 형 변환

- 개발자가 직접 변환
- 사용 함수: Number(), String(), parseInt()

```javascript
Number("123"); // 123
String(100); // "100"
parseInt("12.5"); // 12
```

## 4. 연산자

- 산술 & 대입: +, -, \*, /, % 및 +=, -= 등
- 비교 & 논리: === (자료형까지 비교/ ==는 값만 비교), && (AND), || (OR), ! (NOT)
- null 병합 (??): null이나 undefined가 아닌 값을 찾아냄

```javascript
let value = null ?? "기본값";
```

- 삼항 연산자: 조건 ? 참일*때*값 : 거짓일*때*값

## 5. 제어문

- 조건문: if-else 문과 다수 조건에 유리한 switch 문
- 반복문 (for): 조건이 만족하는 동안 코드를 반복 실행 (break, continue 활용)

## 6. 함수

- 함수 선언: function 키워드 사용, 호이스팅(선언 전 호출) 가능
- 함수 표현식: 변수에 함수를 담는 방식 (익명 함수 활용)
- 화살표 함수: () => {} 형태로 간결하게 함수를 정의

```javascript
const add = (a, b) => {
  return a + b;
};
```

## 7. 콜백 함수

- 다른 함수의 인수로 전달되어 내부에서 실행되는 함수
- 중복된 구조의 코드를 하나로 합치고, 내부 동작만 인수로 넘겨줄 때 유용

```javascript
function repeat(count, callback) {
  for (let i = 1; i <= count; i++) {
    callback(i); // 인수로 받은 함수 실행
  }
}
repeat(5, (idx) => console.log(idx)); // 1~5 출력
```

## 8. 스코프(범위)

- 변수나 함수에 접근할 수 있는 '범위'

```javascript
let global = 1; // 전역 스코프

function func() {
  let local = 2; // 지역 스코프
  console.log(global); // 접근 가능
}
// console.log(local); // 오류: 지역 변수는 외부에서 접근 불가
```

## 9. 객체

- key:value 형태의 자료형 {}을 사용
- 점 표기법이나 괄호 표기법을 사용하여 추가/수정/삭제 가능

```javascript
let person = {
  name: "정현구",
  age: 26,
};

person.job = "developer"; // 추가
delete person.age; // 삭제
```

## 10. 배열

- []을 이용해 생성하여, 0인 인덱스부터 접근

```javascript
let colors = ["red", "green", "blue"];
console.log(colors[0]); // "red" 출력

let mixed = [1, "hello", true, null]; // 다양한 타입 저장 가능
```
