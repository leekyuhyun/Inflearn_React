## JavaScript
#### 자바스크립트의 역할
![](https://velog.velcdn.com/images/minari0v0/post/d55bcded-b9ec-4029-9883-b552c6e09921/image.png)
근본적인 자바스크립트의 역할
- 웹 내부에서 다양한 기능을 발생

<br>


![](https://velog.velcdn.com/images/minari0v0/post/62f30785-92ec-4166-b465-9093b108fe4d/image.png)
- 스위치(본체): Node.js
- 타이틀(게임칩): JavaScript

---

### 변수와 상수
- 변수(`let`) - 다른 언어와 같은 역할
- 상수(`const`) - 선언 및 초기화 후, 재할당 불가

---

### 자료형
#### 원시타입
*값을 저장*

1. `number` 
NaN(Not a Number) 존재

2. `string`
템플릿 리터럴 문법: ``${myName}은 ${myLocation}``변수값을 문자열에 포함 가능

3. `boolean`
4. `null`
5. `undefined`

<br>

#### 객체 타입
*참조로 저장*

object → `Array`, `Function`, `RegExp`


---

### 형 변환

#### 묵시적
자바스크립트 엔진이 알아서
```js
let num = 10;
let str = "20";

const result = num + str;
console.log(result); // -> "1020"
```

#### 명시적
개발자가 직접
```js
let str2 = "10개";
let strToNum2 = parseInt(str2);
console.log(10 + strToNum2); // -> 20
```

---

### 연산자

- 산술/대입: `+`, `-`, `*`, `/`, `%` 및 `+=`, `-=`
- 증감: `++` (전위, 후위 존재)
- 논리: `||` OR, `&&` AND, `!` NOT
- 비교: `===`, `==`, `!==`
	특이하게 자료형까지 비교하는 === 존재
    ```js
		let comp1 = 1 === "1"; // -> false
   ```

- null 병합: `??`로 `null`이나 `undefined`이 아닌 값을 찾아냄
  ```js
  let var6 = var2 ?? var3; // 둘 다 변수일 시, 처음값 -> 10
  ```

- typeof: `typeof`로 타입 반환
  ```js
  var7 = true;
  let t1 = typeof var7; // -> boolean
  ```
  
- 삼항: `(조건문) ? (참 값) : (거짓 값)`
  ```js
  let var8 = 10;
  let res = var8 %2 === 0 ? "짝수" : "홀수"; // -> "짝수"
  ```
  
---
  
### 제어문
#### 조건문 
- if - else &rarr; *복잡한 조건문*
- switch &rarr; *변수의 값을 기준*

#### 반복문
- for문 : `for (초기식; 조건식; 증감식)`

#### 흐름 제어
- 반복문의 실행 흐름을 인위적으로 변경 | `continue`, `break`
- `continue`
  - 현재 반복을 즉시 종료 후 다음 반복으로
  - `continue` 아래 코드는 실행 x

- `break`
  - 반복문을 즉시 종료하고 반복문을 exit
  
---  

### 함수
- 선언: `function 함수명`
- **호이스팅**: 함수 선언이 어디에 있어도 실행 시, 끌어올려서 최상단으로 이동
   - 함수 사용 코드보다 아래에 위치해도 정상적으로 실행
- 함수표현식: java의 <u>익명클래스</u>처럼 익명함수 가능 단, **호이스팅 불가능**
```js
    let varB = function funcB(){ // 익명함수
      console.log("funcB");
    };
```

- 화살표 함수: java의 람다와 비슷
```js
	// (매개변수) => {(수행문)};
    let varC = (value) => value+1;
    // -> 11
```

---

### 콜백함수
다른 함수에 **인수로써 전달된** 함수

```js
function main(value){
    value();
}

function sub(){
    console.log("sub");
}

main(sub); // main 함수에 인수로 전달
```
<br>

익명함수와 콜백함수를 사용하여 중복되는 함수 생성을 피하고, 간결한 코드 구현 가능
```js
function repeat(count, callback){
    for (let idx = 1;idx<=count; idx++){
        callback(idx);
    }
}

repeat(5, function (idx){ // 익명함수
    console.log(idx);
});
```

---

### 스코프(범위)
변수나 함수에 접근하거나 호출할 수 있는 범위
&rarr; java의 전역 변수, 지역 변수 등

```js
let a = 1; // 전역

function funcA(){
    let b =2;
    console.log(a); // 정상 실행
}

funcA();
console.log(b); // 오류 발생
```

---

### 객체
#### 객체 생성
	1. `let obj1 = new Object();` 객체 생성자
	2. `let obj2 = {};` 객체 리터럴
    
<br>

---

#### 객체 속성

```js
  let person = {
      name: "미나리",
      age: 27,
      hobby: "랫풀다운",
  };
```

객체 속성 다루기

1. 점, 괄호 - java의 도트 연산자와 비슷
```js
    let name = person.name;

    let age = person["age"];
    // 쌍따옴표로 감싸야함
```

2. 새로운 속성 추가 및 수정
```js
	person["favoriteFood"] = "떡볶이"; // -> 없던 속성 추가(수정)
```

3. 속성 삭제 -> `delete`
```js
	delete person.job; // -> job 속성 삭제
```

4. 속성 존재 유무 -> `in`
```js
	let result1 = "name" in person;
```

#### 상수 객체
```js
const animal = {
    type: "고양이",
    name: "나비",
    color: "black",
};

animal.age =2;
animal.name = "까망이"
delete animal.color;
```
처럼 `const`타입 객체는 추가|수정|삭제 가 됨
>위에서 적었듯이, const는 참조이기 때문에 값 수정 x가 아님 

#### 메서드
- 값이 함수인 속성
```js
const person = {
    name: "미나리",
    // 메서드 선언
    sayHi() {
        console.log("안녕");
    },

}
```

### 배열
다른 언어와 비슷하게 생성 가능하지만, **타입이 자유로움**

```js
	let arrC = [1,2,3, true,"hello"];
```
