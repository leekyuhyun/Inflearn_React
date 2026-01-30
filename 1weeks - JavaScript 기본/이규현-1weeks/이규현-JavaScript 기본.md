본 스터디는 이정환님의 한입 크기로 잘라먹는 리액트 기반으로 진행됩니다!!

# 변수와 상수

## 변수, 상수란?

변수, 상수는 값을 저장하는 박스이다.

- 변수
  특징: 담긴 값을 언제든 바꿀 수 있음.

- 상수
  특징: 한 번 값을 담으면 절대 바꿀 수 없음. (재할당 금지)

![](https://velog.velcdn.com/images/leekh010502/post/a4902776-ea17-4306-80a4-e7af9a8a3d8a/image.png)

### 변수 선언 및 초기화

```javascript
let age; // 변수 선언

age = 30; // 변수 초기화

let age = 30; // 변수 선언과 초기화 같이

age = 40; // age 값이 40으로 변경
```

- `let age` -> age 라는 변수를 선언한다. (초기화를 하지 않으면 undefined로 출력)
- `age = 30;` -> 30이라는 숫자를 age에 초기화한다.
- `let age = 30` -> age라는 변수를 선언과 동시에 30으로 초기화 (보통 변수 선언과 초기화를 동시에 진행하는 경우가 많다.)
- `age = 40` -> age 값이 40으로 변경된다.

### 상수 선언 및 초기화

```javascript
const birth = "2001.05.02"; // 상수 선언 및 초기화

birth = "2001.05.01"; // (x) 상수는 재할당이 되지 않음
```

- `const birth = "2001.05.02"` -> 상수는 `const` 키워드를 사용하여 선언을 한다.

- 상수는 절대 바뀌지 않을 값을 선언하는 것이기 때문에 선언과 동시에 초기화를 진행해야함

### 네이밍 규칙

1. $, \_(언더바) 제외한 기호는 사용할 수 없다.

2. 숫자로 시작할 수 없다.

3. 예약어를 사용할 수 없다.

4. 변수 네이밍 가이드
   누가봐도 바로 이해할 수 있게 의미있는 변수명을 설정하는 것이 좋음 (협업, 수정 등에 좋음)

```javascript
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;
```

---

# 자료형 (타입)

## 자료형이란?

자료형(Type) = 집합

- 동일한 속성이나 특징을 가진 원소들을 묶은 것
  ex) 고양이와 강아지는 "동물"이라는 집합으로 묶임

![](https://velog.velcdn.com/images/leekh010502/post/810915e7-ef47-4386-bfd8-70d7d49feaab/image.png)

## 원시 타입

기본형 타입이라고도 불린다.
프로그래밍에 있어 가장 기본적인 값들의 타입을 의미한다.

### Number Type

```javascript
// 일반적인 숫자들
let num1 = 27; // 정수
let num2 = 1.5; // 실수
let num3 = -20; // 음수

// 특수한 숫자 값들 (수학적 개념)
let inf = Infinity; // 양의 무한대: 어떤 숫자보다도 큰 값 (예: 1 / 0)
let mInf = -Infinity; // 음의 무한대: 어떤 숫자보다도 작은 값 (예: -1 / 0)
let nan = NaN; // Not a Number: 숫자가 아님을 나타내는 값 (예: "문자" / 2)
```

- 기본적인 숫자 값들 말고 독특한 값도 Number Type에 포함된다 (양의 무한대, 음의 무한대, NaN 등)

### String Type

```javascript
let myName = "이규현"; // 문자열 변수 선언 및 할당 (큰따옴표 사용)
let myLocation = "시흥"; // 문자열 변수 선언 및 할당

//  문자열 연결 연산자 (+)
let introduce = myName + myLocation; // 단순히 글자들을 이어 붙인다.

// 템플릿 리터럴 문법 (Template Literal)
let introduceText = `${myName}은 ${myLocation}에 거주합니다.`; // 백틱(`)을 사용하며, ${} 안에 변수를 넣어 동적으로 문자열을 표현할 수 있다. 백틱과 ${}을 사용하는 템플릿 리터럴은 실무에서 문자열과 변수를 조합할 때 가장 많이 쓰이는 방식이므로 꼭 익혀두는 것이 좋다.
```

- String Type 변수를 초기화할 때 큰 따옴표, 작은 따옴표(" / ')를 반드시 사용해야한다.
- 백틱을 사용하며, ${} 안에 변수를 넣어 동적으로 문자열을 표현할 수 있다. -> 템플릿 리터럴 문법 (실무에서 자주 사용하고 유용하다.)

### Boolean Type

```javascript
let isSwitchOn = true;
let isEmpty = false;
```

- 참과 거짓을 저장하는 타입

### Null Type

```javascript
let empty = null;
```

- 어떠한 변수에 아무런 값도 담겨져있지 않을 때 사용한다.

### Undefined Type

```javascript
let none;
```

- 초기화를 하지않을 때 자동으로 `undefined`가 출력된다.

> Null Type과 Undefined Type는 아무것도 없지만 의미가 조금 다름
>
> > Null -> 개발자가 직접 이 변수에 어떠한 값도 없을때 사용
> >
> > Undefined -> 변수를 초기화 하지 않았거나, 존재하지 않은 값을 불러올 때 발생

---

# 형 변환 (Type Casting)

## 형 변환이란?

어떤 값의 타입을 다른 타입으로 변경하는 것을 말함
![](https://velog.velcdn.com/images/leekh010502/post/faec3fcf-6611-4aa5-aa56-736ee76ed489/image.png)

![](https://velog.velcdn.com/images/leekh010502/post/20b1cca6-97c7-4914-a907-15639c704b70/image.png)

간단 정리

- 묵시적 형 변환 - 생각지도 못하게 바뀔수 있는 것
- 명시적 형 변환 - 내가 시켜야만 바뀌는 것

## 묵시적 형 변환

```javascript
let num = 10;
let str = "20";

const result = num + str; // num이 str로 묵시적 형 변환이 일어남
console.log(result); // result = 1020
```

- 덧셈하는 과정에서 num 타입 10이 str 형태의 "10"으로 변환되어 1020으로 출력되었다.

## 명시적 형 변환

```javascript
// 문자열 -> 숫자
let str1 = "10";
let strNum1 = Number(str1); // 문자열을 숫자로 형 변환
console.log(10 + strNum1); // result = 20

// 숫자 -> 문자열
let num1 = 26;
let numToStr1 = String(num1);
console.log(numToStr1 + "살 입니다"); // result : 26살 입니다
```

- Number를 통해 "10"이 10으로 형 변환이 되었다.
- String을 통해 26이 "26"으로 형 변환이 되었다.

---

# 연산자 (Operator)

## 연산자란?

프로그래밍에서의 다양한 연산을 위한 기호, 키워드를 말한다.
![](https://velog.velcdn.com/images/leekh010502/post/b44f2237-03ab-4edf-9fcf-45e64699af61/image.png)

### 1. 기본 연산자

```javascript
// 1. 대입 연산자
let var1 = 1; // 값을 저장할 이름과 저장한 값을 입력

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2; // 나머지 연산자

// 3. 복합 대입 연산자
let num7 = 10;
num7 += 20; // num7 = num7 + 20과 같음
num7 -= 20;

// 4. 증감 연산자
let num8 = 10;
console.log(++num8); // 전위 연산: 11 (계산 후 출력)
console.log(num8++); // 후위 연산: 11 (출력 후 계산)

// 5. 논리 연산자
let or = true || false; // 하나만 참이면 참
let and = true && false; // 둘 다 참이어야 참
let not = !true; // 값을 반전

// 6. 비교 연산자
let comp1 = 1 === 2; // 일치 (값과 타입 비교)
let comp2 = 1 !== 2; // 불일치
let comp3 = 2 > 1; // 대소 비교
```

- 대입 및 산술: 값을 변수에 할당하거나 기본적인 사칙연산을 수행한다.

- 증감 연산자: ++나 --가 앞에 붙느냐(전위), 뒤에 붙느냐(후위)에 따라 값이 반영되는 시점이 다르다.

- 논리 연산자: Boolean 타입을 다룰 때 사용하며, 조건문에서 매우 중요하게 쓰인다.

- 비교 연산자: 두 값을 비교하여 true 혹은 false를 반환한다.

### 2. 특수 연산자

```javascript
// 1. null 병합 연산자
// null, undefined가 아닌 값을 찾아내는 기능
let userName;
let userNickName = "kyulee";
let displayName = userName ?? userNickName; // 결과: "kyulee"

// 2. typeof 연산자
// 값의 타입을 문자열로 반환
let var7 = 1;
let t1 = typeof var7; // 결과: "number"

// 3. 삼항 연산자
// 조건식을 이용해 참, 거짓일 때의 값을 다르게 반환
let var8 = 10;
let res = var8 % 2 === 0 ? "짝수" : "홀수"; // 결과: "짝수"
```

- null 병합 연산자 : 변수가 `null`이나 `undefined`일 때 사용할 대체 값을 찾을 때 유용합니다.

- typeof 연산자: 자바스크립트는 변수의 타입이 동적으로 변할 수 있기 때문에, 현재 어떤 타입인지 확인하는 역할을 합니다.

- 삼항 연산자: 항을 3개 사용하며, `조건 ? 참일_때_값 : 거짓일_때_값` 형태로 사용해 코드를 간결하게 만든다.

---

# 조건문 (Conditonal Statement)

## 조건문이란?

특정 조건을 만족했을 때에만 실행되는 코드를 작성하기 위한 문법이다.
대표적으로 if, switch 조건문이 존재한다.
![](https://velog.velcdn.com/images/leekh010502/post/9bc86f27-44ef-4150-b5ad-344a31866d48/image.png)

### If문

```javascript
// 1. if 문
// 조건을 만족할 때만 실행
let num = 9;

if (num >= 10) {
  console.log("num은 10 이상입니다.");
  console.log("조건이 참 입니다.");
} else if (num >= 5) {
  console.log("num은 5 이상입니다.");
} else if (num >= 3) {
  console.log("num은 3 이상입니다.");
} else {
  console.log("조건이 거짓입니다!");
}
```

- if: 조건이 참일 때 실행된다.
- else if: 위 조건이 거짓일 때 새로운 조건을 검사한다.
- else: 모든 조건이 만족하지 않을 때 마지막으로 실행된다.

### Switch

```javascript
// 2. switch 문
// 하나의 변수가 여러 값 중 무엇과 같은지 확인할 때 사용
let animal = "cat";

switch (animal) {
  case "cat": {
    console.log("고양이입니다.");
    break; // 각 케이스 끝에 break를 써주는 것이 일반적입니다.
  }
  case "dog": {
    console.log("강아지입니다.");
    break;
  }
  case "bear": {
    console.log("곰입니다.");
    break;
  }
  case "tiger": {
    console.log("호랑이입니다.");
    break;
  }
  default: {
    console.log("해당하는 동물이 없습니다.");
  }
}
```

- case: 변수의 값과 일치하는 케이스를 찾아 실행한다.
- default: 어떤 케이스와도 일치하지 않을 때 실행된다.
- 주의사항: `switch`문에서는 일치하는 `case` 이후의 모든 코드를 실행하는 특성이 있어, 원하는 구간만 실행하려면 `break`를 사용하는 것이 좋다.만약 `break`가 없다면 조건이 일치한 케이스 이후의 모든 `case` 문장들이 결과와 상관없이 전부 실행되어 버리기 때문이다.

---

# 반복문 (Loop, Iteration)

## 반복문이란?

어떠한 동작을 반복해서 수행할 수 있도록 만들어 주는 문법이다.

```javascript
// 반복문 예제입니다.

// 1. 기본적인 for 문
for (let idx = 0; idx < 5; idx++) {
  console.log("반복!");
}

// 2. break와 continue 활용
for (let idc = 0; idc <= 10; idc++) {
  // 짝수일 때는 아래 코드를 실행하지 않고 다음 반복으로 넘어감
  if (idc % 2 === 0) {
    continue;
  }

  console.log(idc); // 홀수만 출력됨

  // idc가 5 이상이 되면 반복문을 완전히 종료
  if (idc >= 5) {
    break;
  }
}
```

1. for 문
   가장 많이 사용되는 반복문으로, `초기식`, `조건식`, `증감식`을 이용해 원하는 횟수만큼 코드를 반복한다.

- `let idx = 0:` 반복문에서 사용할 변수를 초기화한다.
- `idx < 5:` 이 조건이 참일 때까지만 코드가 실행된다.
- `idx++:` 한 번 반복이 끝날 때마다 변수 값을 증가시킨다.

2. 반복문 제어하기

- continue: 현재 반복 회차를 건너뛰고 바로 다음 증감식/조건식 단계로 넘어간다. 특정 조건에서 코드를 실행하고 싶지 않을 때 사용한다.

- break: 반복문을 즉시 종료하고 빠져나온다. 특정 조건을 만족했을 때 반복을 멈춰야 하는 상황에서 유용하다.

---

# 함수 (Function)

## 함수

공통으로 자주 사용하는 유사한 코드들을 묶어서 이름을 붙일 수 있게 해줌으로써 해당 기능이 필요할 때 이름만 붙여서 간단하고 편하게 기능을 가져다 쓸 수 있도록 도와주는 문법이다.

```javascript
// 1. 기본적인 함수 선언과 호출
function getArea() {
  let width = 10;
  let height = 20;
  let area = width * height;
  console.log(area);
}
getArea();

// 2. 매개변수(Parameter)와 인수(Argument) 활용
// 함수를 선언할 때 소괄호 안에 변수를 선언 -> 매개변수
function getAre(width, height) {
  let area = width * height;
  console.log(area);
}
// 함수를 호출하면서 값을 전달 -> 인수 (10 -> width / 20 -> height)
getAre(10, 20);

// 3. 반환값 (Return)
function getAr(width, height) {
  let area = width * height;
  return area; // 결과값을 함수 밖으로 내보냄
}
let area1 = getAr(10, 20);
console.log(area1);

// 4. 호이스팅 (Hoisting)
// 선언문을 호출문 아래에 두어도 최상단으로 끌어올려지기 때문에 문제없이 실행됨
let area2 = getA(10, 20);
console.log(area2);

function getA(width, height) {
  let area = width * height;
  return area;
}
```

## 함수 표현식과 화살표 함수

함수를 변수에 담거나 더 간결한 문법으로 작성할 수 있다.

```javascript
// 1. 함수 표현식
// 함수를 값처럼 취급하여 변수에 담을 수 있으며, 변수명으로 호출 가능함
function funcA() {
  console.log("funcA");
}

let varA = funcA;
varA();

// 2. 화살표 함수
// 더 간결한 문법으로 함수를 생성하는 방법
let varB = (value) => {
  return value + 1;
};

console.log(varB(10));
```

- 매개변수 & 인수: 함수 내부에서 사용할 데이터를 동적으로 전달받을 수 있다.

- return: 함수 실행 결과를 외부 변수에 저장하거나 다른 연산에 활용할 때 사용한다.

- 호이스팅: 자바스크립트의 특징으로, 함수 선언 전에도 호출이 가능하게 해준다.

- 함수 표현식: 함수가 값으로 취급되어 변수에 할당될 수 있음을 보여준다.

- 화살표 함수: =>를 사용하여 코드를 훨씬 간결하게 작성할 수 있는 현대적인 문법이다.

---

# 콜백 함수 (Callback Function)

## 콜백 함수란?

자신이 아닌 다른 함수에, 인수로써 전달된 함수를 의미 한다.

```javascript
// 1. 콜백함수 기본
function main(value) {
  console.log(1);
  console.log(2);
  value(); // 인수로 받은 함수를 내부에서 실행
  console.log("end");
}

main(() => {
  console.log("I am sub");
});

// 2. 콜백함수의 활용
// 공통된 로직(반복)은 두고, 수행할 동작만 바꿀 때 유용함
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, function (idx) {
  console.log(idx);
});

repeat(5, function (idx) {
  console.log(idx * 2);
});

repeat(5, function (idx) {
  console.log(idx * 3);
});
```

1. 콜백 함수의 개념
   함수를 호출할 때 인수로 함수 자체를 전달하는 방식이다.

- `main` 함수 입장에서 `value`라는 매개변수로 들어온 함수가 바로 콜백 함수이다.
- 필요한 시점에 원하는 동작을 호출(Callback)할 수 있게 된다.

2. 콜백 함수의 활용

- 위 코드의 `repeat` 함수처럼 반복 횟수 같은 기본 로직은 고정해두고, 내부에서 처리할 작업만 익명 함수로 전달하여 다양하게 활용할 수 있다.
- 똑같은 반복문이라도 어떤 콜백을 넣느냐에 따라 `1, 2, 3...`이 출력될 수도 있고, `2, 4, 6...`처럼 배수가 출력될 수도 있다.

---

# 스코프 (Scope)

## 스코프란?

우리말로 "범위"를 뜻한다.
변수나 함수에 접근하거나 호출할 수 있는 범위를 말한다.

```javascript
// 1. 전역(전체 영역) 스코프
// 전체 영역에서 접근 가능함
let a = 1;

function funcA() {
  // 2. 지역(특정 영역) 스코프
  // 특정 영역에서만 접근 가능함
  let b = 2;
  console.log(a); // 전역 변수이므로 1 출력 가능
}

funcA();
// console.log(b); // ReferenceError: b is not defined
// 함수 내부에서 b를 선언했기 때문에 외부에서 접근할 수 없음

// 3. 블록 스코프 (지역 스코프의 일종)
// 중괄호 안에서 선언된 변수들은 모두 해당 블록 내부에서만 접근 가능
if (true) {
  let c = 1;
}
// console.log(c); // 에러 발생

for (let i = 0; i < 10; i++) {
  let d = 1;
}
// console.log(d); // 에러 발생
```

**1. 전역 스코프 (Global Scope)**

- 코드의 가장 바깥 영역에 변수를 선언하면 **스코프**를 가진다.
- 어디서든 해당 변수에 접근하고 값을 사용할 수 있다.

**2. 지역 스코프 (Local Scope)**

- 함수 내부(`function`)나 중괄호(`{ }`) 블록 내부에서 선언된 변수는 **지역 스코프**를 가진다.
- 자신이 선언된 영역 안에서만 유효하며, 그 외부에서는 접근할 수 없다.

3. 블록 스코프의 주의점

- `if`문이나 `for`문 같은 제어문의 중괄호 안에서 `let`이나 `const`로 선언한 변수도 지역 스코프에 해당한다.
- 따라서 반복문 안에서 쓰던 변수를 밖에서 출력하려고 하면 에러가 발생하므로 주의해야 한다.

---

# 객체 (Object)

## 객체란?

원시 타입이 아닌 객체 타입의 자료형이다.
여러가지 값을 동시에 저장할 수 있는 자료형을 의미한다.

```javascript
// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
// key : value 형태
let person = {
  name: "이규현",
  age: 26,
  hobby: "baseball",
  job: "student",
  extra: {},
  10: 20,
  "like cat": true, // 띄어쓰기가 포함된 키는 따옴표로 감싸야 함
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;
let age = person["age"]; // 반드시 따옴표와 함께 사용해야 함

// 3.2 새로운 프로퍼티를 추가하는 방법
person.favoriteFood = "삼겹살";
person["home"] = "서울";

// 3.3 프로퍼티를 수정하는 방법
person.job = "Baseball Player";

// 3.4 프로퍼티를 삭제하는 방법
delete person.job;

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person; // true
```

### 상수 객체와 메서드

```javascript
// 1. 상수 객체
// 상수에 저장된 객체라도 프로퍼티의 추가, 수정, 삭제는 가능하다.
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

animal.age = 2; // 추가 가능
animal.name = "까망이"; // 수정 가능
delete animal.color; // 삭제 가능

// 2. 메서드
// 값이 함수인 프로퍼티를 말한다. 객체의 동작을 정의할 때 사용한다.
const person2 = {
  name: "이규현",
  // 메서드 선언
  sayHi() {
    console.log("안녕");
  },
};

person2.sayHi(); // 점 표기법으로 호출
person2["sayHi"](); // 괄호 표기법으로 호출
```

**1. 객체 프로퍼티 다루기**

- 점 표기법과 괄호 표기법: 프로퍼티에 접근할 때 가장 많이 사용되는 방식이다. 괄호 표기법의 경우 키 값을 동적으로 가져와야 할 때 매우 유용하다.

- 프로퍼티 관리: 객체가 생성된 이후에도 자유롭게 프로퍼티를 추가, 수정, 삭제할 수 있다는 점이 객체의 큰 특징이다.

- in 연산자: 특정 키가 객체 내부에 존재하는지 확인할 때 사용하며, 결과는 불리언(`true`/`false`) 값으로 반환된다.

**2. 상수 객체와 메서드의 특징**
상수 객체의 가변성: `const`로 선언한 객체 자체를 다른 객체로 바꾸는 것(재할당)은 불가능하지만, 객체 내부의 프로퍼티 값을 바꾸는 것은 자유롭다.

메서드: 객체는 단순한 데이터뿐만 아니라 동작(함수)도 담을 수 있다. 이를 메서드라고 부르며, 객체의 특정한 기능을 수행하는 용도로 활용한다.

---

# 배열 (Array)

## 배열이란?

여러개의 값을 순차적으로 담을 수 있는 자료형이다.

```javascript
// 1. 배열 생성
let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴 (대부분 사용)

// 배열에는 모든 타입의 값을 담을 수 있다.
let arrC = [1, 2, 3, true, "hello", null, undefined, () => {}, {}, []];

// 2. 배열 요소 접근
let item1 = arrC[0];
let item2 = arrC[1];

console.log(item1, item2); // 1, 2 출력

// 3. 배열 요소 수정
arrC[0] = "hello";
console.log(arrC); // 0번 인덱스의 값이 1에서 "hello"로 변경됨
```

**1. 배열의 특징**
다양한 자료형 수용: 자바스크립트의 배열은 숫자, 문자열, 불리언뿐만 아니라 함수, 객체, 심지어 다른 배열까지도 요소로 포함할 수 있다. 자바스크립트에서 배열은 객체의 한 종류이기에 객체처럼 프로퍼티와 메서드를 가질 수 있다는 특징이 있다.

순차적 저장: 값들이 순서대로 저장되며, 각 값은 고유한 위치 번호인 인덱스(Index)를 가진다.

**2. 인덱스를 통한 접근과 수정**
인덱스 활용: 배열의 요소에 접근할 때는 대괄호`[] `안에 인덱스 번호를 넣어 접근한다. 이때 인덱스는 1이 아닌 0부터 시작한다는 점에 유의해야 한다.

값의 변경: 특정 인덱스에 새로운 값을 할당하는 방식으로 배열 내부의 데이터를 자유롭게 수정할 수 있다.
