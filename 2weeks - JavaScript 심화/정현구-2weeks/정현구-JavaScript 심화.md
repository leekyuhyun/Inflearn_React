# **[JavaScript]** 2주차 자바스크립트 심화 내용 정리(정현구)

## 1. Truthy, Falsy

> 참이나 거짓을 의미하지 않는 값도, 조건문 내에서 참이나 거짓으로 평가

### 1-1 Falsy한 값

- undefined, null, 0, -0
- NaN, "", 0n

### 1-2. Truthy 한 값

- 7가지 falsy 한 값을 제외한 나머지 모든 값

### 1-3. 활용 사례

```javascript
function printName(person) {
  if (!person) {
    // (person === undefined || person === null)할 시 비효율
    console.log("person의 값이 없음");
    return; // 아래 콘솔 접근 방지 (오류방지)
  }
  console.log(person.name);
}
```

> 효율적으로 조건문에서 활용할 수 있음

## 2. 단락 평가

> 논리 연산에서 앞에 확정되는 값이 나오면 뒤에 값을 사용하지 않고 해당 값 반환

### 2-1. 활용 사례

```javascript
function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName(); // person의 값이 없음
printName({ name: "정현구" }); // 정현구
```

- 이와 같이 _&&_ 연산자에서 앞에 값이 *falsy*한 경우 확정
- _||_ 연산자 경우 앞에 값이 *truthy*한 값인 경우 확정

## 3. 구조 분해 할당

### 3-1. 배열의 구조 분해 할당

```javascript
let arr = [1, 2, 3];
let [one, two, three, four = 4] = arr;
```

- 배열의 순서대로 값을 각각 새로운 변수에 할당
- 요소를 추가할 경우 four=4 처럼 안에서 값을 할당해야된다.

### 3-2. 객체의 구조 분해 할당

```javascript
let person = {
  name: "정현구",
  age: 26,
  hobby: "축구",
};

let { name, age: myAge, hobby, extra = "hello" } = person;
```

- 객체의 *key*값을 새로운 변수에 값을 할당

### 3-3. 객체 구조 분해 할당으로 함수의 매개변수 받기

```javascript
const func = ({ name, age, hobby, exgra }) => {
  console.log(name, age, hobby, extra);
};
func(person);
```

- 매개변수 선언부에 구조 분해 할당 적용
- 접근 제어자 사용없이 사용 가능

## 4. Spread연산자, Rest 매개변수

### 4-1. Spread 연산자

- spread: 흩뿌리다, 펼치다
- 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할
- ...(배열 이름) 을 사용

> 배열의 경우

```javascript
let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];
console.log(arr2); // [4,1,2,3,5,6]
```

> 객체의 경우

```javascript
let obj1 = {
  a: 1,
  b: 2,
};
let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};

function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}
```

- funcA(arr1[0],arr[1],arr[2]); 으로 본래의 방식보다 효율적

### 4-2. Rest 매개변수

- rest: 나머지, 나머지 매개변수
- 함수의 매개변수 정의 시 사용하여 무조건 뒤에 위치

```javascript
function funcB(one, two, ...rest) {
  console.log(rest); // 1,2가 차례대로 들어오고 뒤에 값은 rest로 들어옴
}

funcB(...arr1);
```

#### 4-3. 주의점

- rest 매개변수는 앞에 변수가 있으면 차례대로 할당하다가 rest매개변수에 다 넣는 방식으로 뒤에 매개변수 추가할 시 들어오지 않음.
- (...rest)는 매개변수를 정의하는 공간에서 사용하기에 spread연산자가 아님

## 5. 원시타입 vs 객체타입

### 5-1. 원시타입

- "불변값": 실제 메모리 값이 수정되지 않음
- 값 자체로써 변수에 저장되고 복사된다.

```javascript
let p1 = 1;
let p2 = p1;

p2 = 2;
```

- p2 = p1에서 메모리에 1이라는 값이 복사된다.
- p2 = 2에서는 p2 변수에 2라는 값에 메모리가 새로 생성된다.
- p1의 값은 그대로 1로 실제 메모리값은 수정되지 않는다.

### 5-2. 객체타입

- "가변값": 실제 메모리 값이 수정됨.
- 참조값을 통해 변수에 저장되고 복사된다.

```javascript
let o1 = { name: "정현구" };
let o2 = o1;

o2.name = "홍길동";
```

- 원시 타입과 달리 let o2 = o1;에서 참조 값을 통해 메모리 상 같은 값을 참조한다.
- o2.name = "홍길동" 에서 같은 참조값이기에 o1도 홍길동으로 수정된다.

#### 5-2-1. 객체 타입 주의사항1 (의도치 않게 값이 수정됨)

> 위에 예제 코드와 같이 o1의 값도 수정되기에 이를 방지하는 방벙

```javascript
let o1 = {name:"정현구"};
let o2 = ...o1;
```

- spread 연산자를 통해 o2의 새로운 객체를 생성하여 프로퍼티만 따로 복사
- o1 객체의 수정될 일이 없어 안전한 방법

#### 5-2-2. 객체 타입 주의사항2 (객체 간 비교는 기본적으로 참조값을 기준으로)

```javascript
let o1 = {name:"정현구"};
let o1 = o2; //참조값 복사
let o3 = {...o1}; //새로운 객체 생성 다른 참조값

console.log(o1 === o2); // true
console.log(o1 === o3); // false

console.log(
    JSON.stringify(o1) === JSON.stringify(o3);
); //true
```

- console.log(o1 === o2); 의 경우 참조값을 그대로 복사하였기에 true
- console.log(o1 === o3); 의 경우 새로운 객체를 만들어 서로 다른 참조값이기에 false
- _JSON.stringify_ : 객체를 문자열로 변환하는 기능으로 프로퍼티만 비교할 시 사용

> - 얕은 비교 vs 깊은 비교

- 얕은 비교 : *참조값을 기준*으로 비교
- 깊은 비교 : 객체를 문자열로 변환하여 비교 ex) JSON.stringify 내장 함수

## 6. 반복문으로 배열과 객체 순회하기

> 순회란? : 배열, 객체에 저장된 여러개의 값을 순서대로 하나씩 접근

### 6-1. 배열 순회

#### 1. 배열 인덱스

```javascript
let arr = [1, 2, 3];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
} // 1,2,3
```

#### 2. for of 반복문

```javascript
for (let item of arr) {
  // arr 배열에 있는 값을 순차적으로 item에 삽입
  console.log(item);
}
```

- 배열에 있는 값을 순회만 하는 방식

### 6-2. 객체 순회

#### 1. Object.keys

- 객체에서 key 값들만 뽑아서 새로운 배열로 반환

```javascript
let person = { name: "정현구", age: 26, hobby: "테니스" };
let keys = Object.keys(person);

for (let key of keys) {
  const value = person[key];
  console.log(key);
}
```

#### 2. Object.values

- 객체에서 value값들만 뽑아서 새로운 배열로 반환

```javascript
let values = Object.values(person);

for (let value of values) {
  console.log(value);
}
```

#### 3. for in

```javascript
for (let key in person) {
  const value = person[key];
  console.log(key, value);
}
```

> 주의점: for of는 배열, for in은 객체에서만 사용 가능하다.

## 7. 배열1. 요소 조작 메서드 (6가지)

arr = [1,2,3];

### 1. push(a): 배열의 맨 뒤에 새로운 요소 추가

- ex) arr.push(4,5); // [1,2,3,4,5]

### 2. pop(): 배열의 맨 뒤에 있는 요소를 제거, 반환

- ex) arr.pop(); // [1,2]

### 3. shift(): 배열의 맨 앞 요소를 제거, 반환

- ex) arr.shift() // [2,3]

### 4. unshift(): 배열의 맨 앞에 요소를 추가

- ex) arr.unshift(0) // [0,1,2,3]

> 알아야 할 점: shift나 unshift는 앞에 있는 pop,push에 비해 인덱스 전체적으로 변화가 있기에 느리게 동작

### 5. slice

- 배열의 특정 범위를 잘라내서 새로운 배열로 반환
- slice(시작인덱스, 끝 인덱스+1);
- 뒤에서 부터 잘라낼 경우 -1부터 시작하여 범위 지정

```javascript
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr.slice(2, 5); // [3,4,5]
let sliced1 = arr.slice(-3); // [3,4,5]
```

### 6. concat()

- 두 개의 서로 다른 배열을 이어 붙여 새로운 배열 반환

```javascript
let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr); // [1,2,3,4]
```

## 8. 배열2. 요소 순회 및 탐색 메서드(5가지)

> 반복문뿐만 아닌 자바스크립트에는 배열 순회 및 탐색 메서드 제공

### 1. forEach

- 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드

```javascript
function cb(item, index, array) {
  // 요소에 무언가를 할 수 있다.
}

arr.forEach(cb);
```

- item: 현재 순회하는 배열 요소
- idx: 현재 순회하는 배열 요소의 "인덱스"
- arr: 순회 중인 배열

사용 예시)

```javascript
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
  console.log(idx, item * 2); // 0,2 1,4 2,6
});
```

### 2. includes

- 배열의 특저 요소가 있는 지 확인하는 메서드
- 존재할 시 true 없으면 false를 반환

```javascript
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);

console.log(isInclude); // true (5)로 할 시 false
```

### 3. indexOf

- 특정 요소의 인덱스를 찾아서 반환하는 메서드
- 중복으로 있을 경우 앞부터 탐색하여 반환
- 없는 값을 반환하는 경우 -1

```javascript
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);
console.log(index); //1
// [2,2,2] 인 경우 첫 번째 인덱스 0을 반환
```

### 4.findIndex

- 모든 요소를 순회하면서, 콜백함수를 만족하는
- 특정 요소의 인덱스를 반환하는 메서드

```javascript
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => {
  if (item % 2 !== 0) return true; //* 만족하는 값이 1이기에 0
});
//* 간결화 버전
const findedIndex1 = arr4.findIndex((item) => item % 2 !== 0);

console.log(findedIndex);
```

> indexOf와 findIndex의 차이점
>
> - indexOf는 기본적으로 얕은 비교, 즉 객체값들을 참조값을 기준으로 비교
> - 프로퍼티 기준으로 비교되지 않아 특정 객체 값이 존재하는 지 찾을 수 없음
> - 결론적으로 단순한 원시 값에는 indexOf 복잡한 객체 타입 값 찾을 때는 findIndex

### 5. find

- 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환

```javascript
let arr5 = [{ name: "정현구" }, { name: "별이" }];

const finded = arr5.find((item) => item.name === "정현구");

console.log(finded); // name: "정현구" -> 요소 그대로 반환
```

## 9. 배열3. 변형 메서드(5가지)

### 1. filter

- 기본 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열 변환
- 웹서비스 만들 때 카테고리별 필터와 같은 기능 만드는데 용이

```javascript
let arr1 = [
  { name: "정현구", hobby: "축구" },
  { name: "김선빈", hobby: "축구" },
  { name: "이규현", hobby: "야구" },
  { name: "김민한", hobby: "야구" },
];
const soccerPeople = arr1.filter((item) => item.hobby === "축구");
```

### 2. map

- 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값을 모아 새로운 배열로 반환

```javascript
let names = arr1.map((item) => item.name);
console.log(names);
```

### 3. sort

- 배열을 사전순으로 정렬하는 메서드
- 주의: 숫자인 경우는 해당 x
- 숫자를 오름차순으로 하고 싶은 경우

```javascript
let arr = [10,3,5];

arr.sort((a,b)=>{
    if(a>b){
        // b가 a앞에 와라
        return 1;
    } else{
        // a가 b 앞에 와라
        return -1;
    } else {
        //두 값의 자리를 바꾸지 마라
        return 0;
    }
})
```

### 4. toSorted (최신 함수)

- 정렬된 *새로운 배열*을 반환하는 메서드

```javascript
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted(); //a,b,c
```

### 5. join

- 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드

```javascript
let arr6 = ["hi", "im", "hyungu"];
const joined = arr6.join(" "); //"-", "*" 등 문자열 사이 구분자를 넣을 수 있음
console.log(joined);
```

## 10. Date 객체와 날짜

### 10-1. Date 객체를 생성하는 방법

```javascript
let date1 = new Date(); // 생성자 (현재 시간 출력)
console.log(date1);

let date2 = new Date("1999-01-08-10:10:10"); // .,/,- 사용 가능
console.log(date2);
```

### 10-2. 타임 스탬프

- 특정 시간이 "1970.01.01 00시 00분 00초"(utc)로 부터 몇 ms가 지났지는를 의미하는 숫자값

```javascript
let ts1 = date1.getTime();
let date4 = new Date(ts1);

console.log(date1, date4);
```

### 10-3. 시간 요소들을 추출하는 방법

```javascript
let year = date1.getFullYear();
let month = date1.getMonth() + 1;
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();
```

- 자바스크립트에는 달이 0부터 시작하기에 +1을 해주어야 한다.(like 배열)

### 10-4. 시간 수정하기 및 여러 포맷으로 출력하기

```javascript
// date1의 날짜 및 시간 수정
date1.setFullYear(2023);
date1.setMonth(2); // 2를 인수로 던지면 3월
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

// 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString());
console.log(date1.toLocaleDateString()); // 현지화된 시간이 문자열로 출력
```

## 11. 동기와 비동기

### 동기

- 여러개의 작업을 순서대로, 하나씩 처리하는 방식

> 쓰레드(thread): 작업을 직접 실행하고 처리해주는 역할

- 동기적 방식의 _단점_
  - task A와 B,C가 있을 때 B의 작업 속도가 오래 걸릴 경우 다음 C의 작업을 할 수가 없어 성능이 악화된다.
  - 다른 C# 이나 java같은 경우는 멀티쓰레드의 이론으로 가능하지만 자바스크립트 엔진에는 _쓰레드가 1개(싱글 쓰레드) 밖에 없어_ 해결할 수 없다.

### 비동기

- 작업을 순서대로 처리하지 않고, 다음 작업을 동시에 처리하는 방식
- 동기적 방식의 단점을 보완
- 자바스크립트 엔진은 비동기 처리를 제공하지 않는다.

```javascript
console.log(1);

setTimeout(() => {
  console.log(2);
}, 3000);
//* 비동기적 작동 함수

console.log(3);
```

1. console.log(1) 실행
2. setTimeout()함수 호출 - 콜백함수를 이용하고, 3000은 ms 단위로 시간이 지난 후 콜백함수가 실행된다.
   > 이때 어떻게 비동기 처리가 이루어 지는지?

- setTimeout()함수는 비동기 처리 함수로 자바스크립트 엔진에 있는 스레드가 실행되는 게 아닌 *Web APIs*라는 웹 브라우저가 직접 관리하는 별도의 공간에서 실행

- 따라서 setTimeout()함수를 만나 비동기 작업을 Web APIs에게 실행을 맡긴다.
- 타이머가 끝나면 콜백함수까지 넘겨준다.

3. 자바스크립트 엔진은 타이머를 기다리지 않고 console.log(3) 실행
4. 콜백함수를 다시 자바스크립트 엔진에게 돌려주어 (2) 실행

> - 비동기 API 예시: setTimeout,XMLHttpRequest,fetch 등
> - node.js의 경우 파일 처리 API, 암호화 API 등을 제공한다.

## 12. 비동기 작업 처리 (1. 콜백함수)

- 콜백함수의 핵심 원리
  1. 함수 전달: 비동기 함수를 호출할 때, 결과값을 처리할(콜백) 인자를 넘긴다.
  2. 시점 보장: 작업이 완료되면, js엔진이 전달받은 콜백함수를 실행한다.
  3. 데이터 전달: 비동기 작업의 결과물을 콜백함수의 매개변수로 넘겨주어 함수 *외부*에서도 사용할 수 있다.

### 예제1. 두 수의 합 구하기

```javascript
function add(a, b, callback) {
  setTimeout(() => {
    const sum = a + b; // 3
    callback(sum);
  }, 3000);
}

add(1, 2, (value) => {
  //sum 변수를 add함수 바깥에서도 사용
  console.log(value);
});
```

- 흐름: add 호출 -> setTimeout 타이머 시작 -> 3초 후 내부 로직 실행 -> callback(sum)을 통해 외부로 값 전달

### 예제2. 음식 주문 프로세스

```javascript
function orderFood(callback) {
  setTimeout(() => {
    const food = "뼈찜";
    callback(food);
  }, 3000);
}

function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 2000);
}

function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  }, 1500);
}
orderFood((food) => {
  console.log(food);

  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood);

    freezeFood(cooldownedFood, (freezedFood) => {
      console.log(freezedFood);
    });
  });
});
```

- 각 단계의 비동기 작업이 이전 단계의 결과물을 필요로 하기 때문에 함수가 계속 중첩된다.

### 콜백함수의 한계: 콜백 지옥

1. 가독성 저하: 코드가 깊게 들여쓰기(indent)되어 한눈에 로직 파악 어려움
2. 유지보수 어려움: 코드의 흐름을 추적하기 어렵고, 에러 처리 복잡

> 해결책: Promise라는 비동기 작업을 도와주는 객체를 사용

## 13. 비동기 작업 처리하기 (2.Promise)

- 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트 내장 객체
- SetTimeoout함수와 같은 비동기 작업들을 랩핑하는 객체
- 비동기 처리의 순서를 표현할 수 있다.
- 비동기 작업 실행, 상태 관리, 결과 저장, 병렬 실행 등등의 효능을 가짐.

### Promise의 3가지 상태

대기(pending) -> settled(성공(resolved,fulfilled) 혹은 실패(rejected) 상태)

_대기_: 아직 작업이 완료되지 않은 상태

_성공_: 비동기 작업이 성공적으로 마무리 된 상태 (resolve:해결)

_실패_: 비동기 작업이 실패한 상태 (reject: 거부)

### promise 구조 분석

- 비동기 작업을 수행하는 함수를 **Executor(실행자)**라고 부름

#### 예제 코드

```javascript
function add(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수
    //executor

    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10); // 성공 시 결과값 전달
      } else {
        reject("num이 숫자가 아닙니다."); //실패 시 에러메세지 전달
      }
    }, 2000);
  });
  return promise;
}
```

#### 결과 처리 메서드(then,catch)

- .then(); resolve가 호출 되었을 때 실행 (성공 처리)
- .catch(): reject가 호출되거나 코드 실행 중 에러 발생 됐을 때 실행(예외 처리)
  > then만 사용하면 에러처리가 누적되기에, 항상 마지막에 catch를 붙여주는 것은 관례

#### Promise Chaining

- 비동기 작업을 순차적으로 여러번 수행할 때 사용하는 기법
- then 안에서 새로운 Promise 객체를 반환하는 것이 핵심

```javascript
add(0)
  .then((result) => {
    console.log(result); //10
    return add(result); // 다음 단계로 Promise 전달
  })
  .then((result) => {
    console.log(result); //20
    return add(undefined); //에러 유도
  })
  .then((result) => {
    console.log(result); // 30
  })
  .catch((error) => {
    console.log(error); //num이 숫자가 아닙니다.
  });
```

## 14. 비동기 작업 처리하기 (3.async/await)

### 1. async

- 역할: 함수 앞에 붙여서 해당 함수를 비동기 함수로 선언
- 특징
  - async 함수는 항상 Promise를 반환
  - 만약 함수 내부에서 직접 Promise를 반환하지 않고 일반값을 반환하더라도, 자바스크립트가 자동으로 resolve하는 Promise로 감싸서 내보냄.

### 2. await

- 역할: Promise가 완료될 때까지 함수의 실행을 일시 정지시킨다.
- 특징
  - 반드시 async 함수 내부에서만 사용 가능
  - await 뒤에 오는 Promise가 resolve되면, 그 결과값을 바로 할당할 수 있게 해준다. -> 덕분에 .then()을 길게 늘어뜨릴 필요가 없음

```javascript
async function getData() {
  // new Promise를 직접 반환하는 정석적인 비동기 함수
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "정현구",
        id: "lhjjhg",
      });
    }, 1500); // 1.5초 뒤에 객체 반환
  });
}
```

- console.log(getData());를 실행하면 결과값인 객체가 출력되는 게 아니라, Promise (pending) 상태의 객체가 출력된다.
- 왜냐하면 함수가 즉시 실행되어 Promise 객체 자체를 반환했기 때문

```javascript
async function PrintData() {
  // await이 없었다면 data에는 Promise 객체가 담겨 있을 것
  const data = await getData();

  // 하지만 await 덕분에 1.5초를 기다린 후,
  // Promise의 결과값(resolve된 객체)이 data 변수에 들어감.
  console.log(data);
}
```
