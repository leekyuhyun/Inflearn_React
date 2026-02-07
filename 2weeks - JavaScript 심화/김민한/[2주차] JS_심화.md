# 02. JavaScript 심화
## JavaScript

### Truthy & Falsy
![](https://velog.velcdn.com/images/minari0v0/post/c7a2ae6d-23d7-4986-8634-47489cf8113a/image.png)

자바스크립트에서는 `true` 혹은 `false`을 의미하지 않는 값도,
조건문 내에서는 참이나 거짓으로 평가함
7가지의 Falsy를 제외한 나머지 값(유효한)들은 다 Truthy라고 보면 됨

7가지 Falsy 한 값

1. `undefined`
2. `null`
3. `0`
4. `-0`
5. `NaN`
6. `""`
7. `0n` // Big Integer

---

### 단락 평가
```js
let varA = false;

let varB = true;

console.log(varA && varB); // -> false만
```
&&이나 || 에서 앞에 부분으로 조건이 확정이 될 때, 뒤에 값을 실행하지 않음

---

### 구조 분해 할당
```js
let arr = [1, 2, 3];

// let one = arr[i];
let [one, two, three, four = 4] = arr;
```

원래의 `arr[i]`와 같이 저장하는 게 아닌,
괄호 안에 변수명들을 적어서 할당 가능

---

### Spread 연산자

```js
let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];
```
처럼 `...`연산자를 사용하여 풀어헤쳐 전달

---

### Rest 매개변수

```js
function funcB(one, ...rest) {
    console.log(rest);
}

funcB(...arr1);
```
사용법
- Spread와 `...`을 사용하는 것은 동일
- 매개변수에 위치(엄연히 다름)

주의사항
- 항상 Rest 매개변수는 맨 뒤에 존재해야함
	- 나머지 전부를 배열로 받기 때문
> 뭔가 **C++ 기본값 매개변수**처럼 맨 뒤에 오는 것이 비슷한 것 같다

---

### 원시 타입 / 객체 타입

![](https://velog.velcdn.com/images/minari0v0/post/f4738de7-9986-47fc-9313-806d01321e3c/image.png)

#### 객체 타입 주의 사항

1. side effect
  ```js
  o1 = { name: "미나리"};
  o2.name = "미나리2";
  ```
  &rarr; 메모리 상 수정이기에 `o1.name` 또한 수정됨

2. 객체간 비교는 참조값(메모리 주소 기준)
다른 객체간 `===`으로 비교 시, 다른 참조값을 가리키면 False 반환함
&rarr; java의 `String.equal()` 처럼 문자열 비교와 같은 `JSON.stringify()`를 사용 권장

3. 배열과 함수도 객체

---

## 순회(Iteration)

배열, 객체에 저장된 여러개의 값에 순서대로 하나씩 접근

1. 배열 순회
	1. 배열 인덱스
		- 흔히 쓰는 arr[i]과 같음
    2. for of 반복문
    	- `for (let item of 배열명)`으로 반복 가능

2. 객체 순회
	1. Object.keys
    	- `let keys = Object.keys(객체명);`
객체에서 key값만 뽑아 배열로 반환
	2. Object.values
    	- `let values = Object.values(객체명);`
객체에서 value값만 뽑아 배열로 반환

3. for in 반복문
	- `for (let key in 객체명)` **객체**에만 사용 가능 -> 뭔가 python의 `for i in ~`과 비슷함
    
---

## 배열 메소드
### 요소 조작

1. `배열명.push(i,j)`: 맨 뒤에 추가
2. `배열명.pop()`: 맨 뒤에 하나 삭제 및 반환
3. `배열명.shift()`: 맨 앞 요소를 제거, 반환 &rarr; pop 반대
4. `배열명.unshift(i)`: 맨 앞 새로운 요소 추가 &rarr; push 반대
- **주의** shift와 unshift는 한 칸씩 밀거나 땡겨와야하기 때문에 O(n) 동작 시간이기에, push/pop 보다 느림
5. `배열명.slice(start, 선택:end)`: 예시로 .slice(2,5) &rarr; 2 이상 5미만으로 2,3,4 해당 인덱스 슬라이스 됨(python과 동일)
	- `.slice(2)`: 2부터 맨 끝까지
6. `배열명.concat(다른 배열명)`: [1,2]과 [3,4]가 concat으로 [1,2,3,4]로 이어짐

---

### 순회와 탐색

1. `forEach`: 각각의 요소에 특정 동작을 수행
2. `includes`: 배열에 특정 요소가 있는지
3. `indexOf`: 특정 요소의 인덱스 위치를 반환
	- 얕은 비교로 동작되기 때문에 객체 타입 비교 x
4. `findIndex`: 콜백함수를 만족하는 특정 요소의 인덱스를 반환하는 메서드
	- 객체 타입의 요소를 찾을 때
5. `find`: `findIndex`는 인덱스 반환이라면, `find`는 요소 그대로 반환

---

### 배열 변형

1. `filter`: 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환
2. `map`: 모든 요소에 콜백함수를 실행 후, 그 결과값을 모아 새로운 배열로 반환
3. `sort`: **사전순**으로 정렬
	- 숫자에 대한 정렬은 기본적으로 안되고, 화살표함수로 특정 조건을 넣으면 숫자 정렬 가능
    
    ```js
    arr3.sort((a, b) => {
        if (a > b) {
            return 1; // 양수: b가 a 앞으로
        } else if (a < b) {
            return -1; // 음수: b가 a 뒤로
        } else {
            return 0; // 유지
        }
    });
    ```
    
  4. `toSorted`: 정렬된 새로운 배열을 반환 &rarr; 최신 추가 함수
  5. `join`: 배열의 모든 요소를 하나의 문자열로 합쳐서 반환
  
---

### Date 객체와 날짜

1. 객체 생성
```js
let date1 = new Date(); // 생성자

let date2 = new Date("1997-01-07");
```

2. 타임 스탬프
- 특정 시간으로부터 몇 ms가 지났는지 의미하는 숫자값
- 특정 시간: UTC(1970.01.01 00:00:00)
```js
let ts1 = date1.getTime();
```

3. 시간 요소의 get/set
추출 / 수정을 할 수 있음
```js
let year = 시간객체.get형식()
// .getFull ~ .getSeconds

date1.setMonth(2);
// 밑 .setSeconds(59) 등
```
- 주의사항: JS는 month의 시작점이 0임

4. 시간 여러 포맷으로 출력
- `date1.toLocaleString()` -> 결과: 2023. 3. 30. 오후 11:59:59
- `date1.toDateString()` -> 결과: Thu Mar 30 2023

### 동기와 비동기
JS 엔진은 Thread가 1개 밖에 없기 때문에
동기적으로 코드가 처리되어 아래와 같은 문제가 발생할 수 있음
![](https://velog.velcdn.com/images/minari0v0/post/3a4d166b-5954-4ca2-89c7-e304bfc8b6f3/image.png)
<br>


그래서 Java나 C#에서는 이러한 문제를 해결하기 위해 MultiThread 기법을 사용함
![](https://velog.velcdn.com/images/minari0v0/post/b9aceab7-1281-4ecf-a12d-098f77201eed/image.png)

<br>

JS에서는 **비동기**적으로 실행하고 그 결과값을 이용해야할 때는
콜백함수로 값을 넘겨받아 사용할 수 있음
![](https://velog.velcdn.com/images/minari0v0/post/704a8bc5-81ff-4dd8-9e7b-c13d5fffcf40/image.png)


```js
console.log(1);

// 비동기 지원
// WebAPIs
setTimeout(() => {
    console.log(2);
}, 3000);

console.log(3);
```

`setTimeout` 실행 시, 타이머 설정은 Web APIs에 위임된다.
타이머 만료 후 콜백 함수는 태스크 큐(Task Queue)에 적재된다.
이벤트 루프는 호출 스택이 비어 있을 때 태스크 큐의 콜백을 JS 엔진으로 전달하며,
JS 엔진은 이를 실행한다.

![](https://velog.velcdn.com/images/minari0v0/post/8f06df05-58b2-4fb3-8427-eb368a226c62/image.png)
출처: [velog.io/@kcj_dev96](https://velog.io/@kcj_dev96/%EB%B9%84%EB%8F%99%EA%B8%B0-%ED%95%A8%EC%88%98%EC%9D%98-%EB%8F%99%EC%9E%91-%EC%9B%90%EB%A6%ACWeb-API-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%A3%A8%ED%94%84-%ED%83%9C%EC%8A%A4%ED%81%AC-%ED%81%90#web-api%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%A3%A8%ED%94%84%ED%83%9C%EC%8A%A4%ED%81%AC%ED%81%90%EB%8A%94-%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EC%9D%98-%EA%B8%B0%EB%8A%A5%EC%9D%B8%EA%B0%8)

---

### 비동기 - 콜백함수

```js
function orderFood(callback) {
    setTimeout(() => {
        const food = "떡볶이";
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
        const freezedFood = `내동된 ${food}`;
        callback(freezedFood);
    }, 1500);
}

// 실행파트
orderFood((food) => {
    console.log(food);

    cooldownFood(food, (cooldownedFood) => {
        console.log(cooldownedFood);


        freezeFood(cooldownedFood, (freezedFood) => {
            console.log(freezedFood);
        });
    });
});
// 들여쓰기가 많아져서 가독성↓
```

3초 뒤에 테스크 큐에 있던 콜백함수가 실행되어
`떡볶이`가 출력되고 그 이후도 계속 콜백되어 출력됨

---

### 비동기 - Promise

비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트 내장 객체
![](https://velog.velcdn.com/images/minari0v0/post/0a92689e-193c-464a-b17e-38aecd406d7a/image.png)

Promise 3가지 상태
- 대기(Pending)
- 성공(Fulfilled)
- 실패(Rejected)

성공 시 &rarr; `resolve()` 로 작성가능
실패 시 &rarr; `reject()` 로 작성가능

<br>

```js
function add10(num) {
    const promise = new Promise((resolve, reject) => {
        // 비동기 작업
        // executor
        setTimeout(() => {

            if (typeof num === 'number') {
                resolve(num + 10);
            } else {
                reject("num이 숫자가 아닙니다");
            }

            console.log("안녕");
            reject("왜 실패함");
        }, 2000);
    });
    return promise;
}
```

#### Promise 체이닝

```js
add10(0)
    .then((result) => {
        console.log(result);
        return add10(result);
    })
    .then((result) => {
        console.log(result);

        return add10(result);
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
```
- .then 이라는 성공 시, 이어지는 코드에 계속 콜백함 - `add10(result)`
- .catch 로 실패 시, 실행될 코드

---

### async / await

- `async`: 비동기 함수 키워드
- `await`: 비동기 함수가 다 처리되기를 기다림

```js
async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: "이정환",
                id: "winterlood",
            });
        }, 1500);
    });
}

async function printData() {
    const data = await getData();
    console.log(data);
}

printData();
```

이런 코드가 있다고 보자.

그렇다면 실행 순서는

```js
printData() 호출
→ getData() 실행
→ setTimeout 예약
→ await로 printData 일시정지
→ 1.5초 후 resolve
→ await 풀림
→ console.log 실행
```
으로 볼 수 있다.

아마 파이썬 코루틴의 `async` / `await`과 매우 비슷하지만,
파이썬은 이벤트 루프에 추가하는걸 명시해야함(asyncio.create_task(f())