# 동기와 비동기

## 동기란?

여러 개의 작업을 순서대로, 하나씩 처리하는 방식이다.
A를 처리하고 B를 처리하고 C를 처리한다.
![](https://velog.velcdn.com/images/leekh010502/post/1755961c-9c34-425f-bd55-b56ee7ed7ffa/image.png)

자바스크립트는 코드를 한 줄씩 실행하는 **싱글 스레드(일꾼이 한 명)**다.

만약 Task A 처리 시간 0.5초 / Task B 처리 시간 10초 / Task C 처리 시간 0.3초라고 가정을 하자. 자바스크립트는 싱글 스레드이기 때문에 Task C는 Task B가 처리되는 시간 10초동안 기다려야한다.

이러한 단점을 해결하기 위해서 자바스크립트의 비동기에 대한 개념을 확인해보자

## 비동기란?

동기와 반대로 여러 개의 작업이 들어와도 순서대로 끝날 때까지 기다리지 않고, 작업을 동시에 처리하는 방식이다.

예제를 통해서 확인해보자

## 예제

```javascript
// 1. 동기
console.log(1);
console.log(2);

/* ----------------- */

// 2. 비동기
console.log(1);

setTimeout(() => {
  console.log(2);
}, 3000);

console.log(3);
```

동기 코드: 순서대로 1을 출력한 뒤 바로 2를 출력한다.

비동기 코드: 1을 출력한 후 setTimeout을 만난다. 하지만 자바스크립트는 3초를 기다리지 않고 바로 다음 줄인 3을 출력한다. 그 후 3초가 지나면 미리 맡겨두었던 콜백 함수가 실행되어 2가 출력된다.

## 자바스크립트는 싱글스레드인데 어떻게 여러개 동시에 처리를 할 수 있을까??

자바스크립트 엔진은 싱글스레드이지만, 브라우저가 제공하는 Web APIs라는 조력자가 있기 때문에 여러 작업을 동시에 처리하는 것처럼 보일 수 있다.
![](https://velog.velcdn.com/images/leekh010502/post/0e83df1a-0643-43a4-b11b-3d58c8c3ae91/image.png)

자바스크립트 엔진: 코드를 한 줄씩 읽다가 `setTimeout` 같은 비동기 함수를 만나면, 직접 처리하지 않고 Web APIs에게 작업을 넘겨준다.

Web APIs (브라우저): 자바스크립트 엔진 대신 타이머를 작동시킨다. 그동안 엔진은 멈추지 않고 다음 줄에 있는 `console.log("3")`을 즉시 실행한다.

콜백 함수 전달: 타이머가 종료되면 Web APIs는 실행해야 할 함수(콜백 함수)를 태스크 큐라는 곳으로 보낸다.

최종 실행: 자바스크립트 엔진은 현재 수행 중인 모든 작업이 끝나서 'Call Stack'이 비게 되면, 그제야 큐에 대기 중인 콜백 함수를 가져와서 2를 출력한다.

---

# 비동기 작업 처리하기 1. 콜백함수

비동기 함수는 실행 결과가 즉시 나오지 않고 나중에 처리되기 때문에, 그 결과값을 함수 외부에서 사용하려면 특별한 방법이 필요하다.
이때 가장 기본적으로 사용되는 방식이 바로 **콜백 함수(Callback Function)**다.

## 1. 비동기 작업의 한계와 콜백의 필요성

단순히 비동기 함수 내부에서 값을 계산하고 출력하는 것만으로는 해당 데이터를 다른 로직에 전달하기 어렵다.

```javascript
// 1.1 단순 출력 예제
function task() {
  setTimeout(() => {
    console.log("안녕하세요.");
  }, 3000);
}
task();

// 1.2 비동기 계산 예제
function add(a, b) {
  setTimeout(() => {
    const sum = a + b;
    console.log(sum); // 내부에서만 출력하고 종료됨
  }, 3000);
}
add(1, 2);
```

### 콜백 함수를 통한 결과 전달

함수가 호출될 때 인자로 함수(콜백)를 전달하면, 비동기 처리가 끝난 시점에 그 결과값을 인자로 담아 호출해 줄 수 있다.

```javascript
function add2(a, b, callback) {
  setTimeout(() => {
    const sum = a + b;
    callback(sum); // 비동기 작업이 끝나면 콜백 함수에 결과 전달
  }, 3000);
}

add2(1, 2, (value) => {
  console.log(value); // 결과값인 3을 외부에서 사용 가능
});
```

## 2. 연속적인 비동기처리

음식을 주문하고, 식히고, 냉동하는 연속적인 과정을 비동기로 처리하는 상황을 가정해 보자.

```javascript
// 음식 주문 (3초 소요)
function orderFood(callback) {
  setTimeout(() => {
    const food = "허니콤보";
    callback(food);
  }, 3000);
}

// 음식 식히기 (2초 소요)
function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 2000);
}

// 음식 냉동하기
function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  });
}
```

## 3. 콜백 지옥

위의 연속적인 과정을 실행하기 위해서는 콜백 함수 안에 또 다른 콜백 함수를 넣어야 한다.

```javascript
orderFood((food) => {
  console.log(food); // "허니콤보" 출력

  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood); // "식은 허니콤보" 출력

    freezeFood(cooldownedFood, (freezedFood) => {
      console.log(freezedFood); // "냉동된 식은 허니콤보" 출력
    });
  });
});
```

## 정리

1. 콜백 함수의 역할
   비동기 작업이 언제 끝날지 모르는 상황에서, "작업이 끝나면 이 함수를 실행해 줘"라고 부탁하는 것과 같다.

비동기로 얻어낸 결과값(food, sum 등)을 다음 단계의 로직으로 안전하게 넘겨줄 수 있다.

2. 콜백 지옥의 단점
   예제처럼 작업이 3단계만 되어도 코드가 오른쪽으로 점점 밀려나며 들여쓰기가 깊어진다.

코드의 흐름을 한눈에 파악하기 어렵고, 에러 처리를 각각의 콜백마다 해줘야 하는 번거로움이 발생한다.

---

# 비동기 작업 처리하기 2. Promise

비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 객체이다.
![](https://velog.velcdn.com/images/leekh010502/post/7b1db5c1-e8a1-455f-8fb9-22264c97ef77/image.png)

### Promise의 3가지 상태

![](https://velog.velcdn.com/images/leekh010502/post/21aab692-a90e-4cb9-b95a-27fc16bc67d0/image.png)

대기 (Pending): 작업이 완료되지 않은 초기 상태.

성공 (Fulfilled): 비동기 작업이 성공적으로 완료된 상태 (resolve 호출).

실패 (Rejected): 작업이 실패하거나 오류가 발생한 상태 (reject 호출).

## 1. Promise 생성과 실행자 (executor)

Promise 객체를 생성할 때 전달되는 함수를 '실행자(executor)'라고 부르며, 객체가 생성되는 즉시 자동으로 실행된다.

```javascript
const promise = new Promise(() => {
  // 비동기 작업을 실행하는 함수 (executor)
  setTimeout(() => {
    console.log("안녕");
  }, 2000);
});

console.log(promise); // 2초 전에는 <pending> 상태 출력
```

## 2. 상태 변화와 결과 전달 (Resolve, Reject)

비동기 작업이 성공하면 `resolve`를, 실패하면 `reject`를 호출하여 상태를 변경하고 결과값을 전달한다.

### 성공 상황 (resolve)

```javascript
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("안녕");
    resolve(); // 상태를 fulfilled로 변경
  }, 2000);
});

setTimeout(() => {
  console.log(promise2); // 3초 뒤 확인 시 <fulfilled> 상태
}, 3000);

// 결과값(데이터)을 함께 전달하는 경우
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("안녕");
    resolve("안녕"); // 결과값 "안녕"을 함께 전달
  }, 2000);
});

setTimeout(() => {
  console.log(promise3); // 데이터 "안녕"이 담긴 상태
}, 3000);
```

### 실패 상황 (reject)

```javascript
const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("안녕");
    reject("왜 실패했는지 이유..."); // 상태를 rejected로 변경하고 에러 메시지 전달
  }, 2000);
});

setTimeout(() => {
  console.log(promise4); // <rejected> 상태와 에러 메시지 출력
}, 3000);
```

## 3. 조건부 비동기 처리

실행자 내부 로직에 따라 성공과 실패를 나누어 처리할 수 있다.

```javascript
const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const num = 10;

    if (typeof num === "number") {
      resolve(num + 10); // 숫자라면 성공
    } else {
      reject("num이 숫자가 아닙니다."); // 아니라면 실패
    }
  }, 2000);
});
```

## 4. then/catch 메서드

Promise를 통해 처리된 결과는 `then`과 `catch`를 사용하여 받아온다.

```javascript
// then: 성공 시 실행 / catch: 실패 시 실행
promise5
  .then((value) => {
    console.log(value); // resolve에서 보낸 20 출력
  })
  .catch((error) => {
    console.log(error); // reject에서 보낸 에러 메시지 출력
  });
```

## 5. Promise 체이닝 (Chaining)

Promise를 반환하는 함수를 이용하면 여러 비동기 작업을 줄지어 처리할 수 있다. 이를 통해 콜백 지옥을 방지한다.

```javascript
function add10(num) {
  const promise6 = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다.");
      }
    }, 2000);
  });
  return promise6; // 생성된 Promise 객체를 반환
}

add10(0)
  .then((result) => {
    console.log(result); // 10
    return add10(result); // 다시 Promise 반환 (체이닝)
  })
  .then((result) => {
    console.log(result); // 20
    return add10(undefined); // 고의로 실패 유도
  })
  .then((result) => {
    console.log(result); // 앞선 단계가 실패하면 실행되지 않음
    return add10(result);
  })
  .catch((error) => {
    // 체이닝 도중 발생한 에러를 통합 관리
    console.log(error); // "num이 숫자가 아닙니다."
  });
```

## 정리

1. Resolve와 Reject의 역할
   Resolve: 비동기 작업이 끝났음을 알리고 결과 데이터를 넘겨주는 스위치 역할을 한다.

Reject: 예기치 못한 에러가 발생했을 때 이를 알리는 역할을 한다.

2. then과 catch의 가독성
   콜백 함수 방식은 작업이 많아질수록 코드가 오른쪽으로 깊어졌지만, Promise 체이닝은 아래로 길게 나열되기 때문에 데이터의 흐름을 파악하기 훨씬 쉽다.

`catch` 메서드를 마지막에 한 번만 써주면 중간에 어디서 에러가 나든 모두 잡아낼 수 있다는 큰 장점이 있다.

---

# 비동기 작업 처리하기 3. Async/Await

`async`와 `await`는 프로미스 객체를 기반으로 동작하며, 비동기 작업을 마치 동기 작업을 작성하는 것과 같은 가독성을 제공하는 키워드다.

## 1. async 키워드

어떤 함수를 비동기 함수로 만들어주는 키워드다. 이 키워드가 붙은 함수는 결과값으로 무엇을 반환하든 항상 프로미스 객체를 반환하게 된다.

```javascript
// 1.1 일반 객체를 반환하는 async 함수
async function getData() {
  return {
    name: "이규현",
    id: "kyulee",
  };
}

// 호출 결과는 객체가 아닌, 성공(fulfilled) 상태의 프로미스 객체다.
console.log(getData());

// 1.2 명시적으로 프로미스를 반환하는 async 함수
async function getData2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "이규현",
        id: "kyulee",
      });
    }, 1500);
  });
}

console.log(getData2());
```

함수 내부에서 직접 프로미스를 생성하지 않더라도, async가 붙으면 반환값을 resolve하는 프로미스로 감싸서 내보낸다.

## 2. await 키워드

`async` 함수 내부에서만 사용할 수 있는 키워드로, 비동기 작업이 완료될 때까지 기다리는 역할을 한다.

```javascript
// 2.1 기존 .then() 방식
function printData() {
  getData2().then((result) => {
    console.log(result); // 비동기 처리가 끝나면 결과 출력
  });
}
printData();

// 2.2 await 방식
async function printData2() {
  // getData2()가 완료되어 결과값을 던져줄 때까지 다음 줄로 넘어가지 않고 기다린다.
  const data = await getData2();

  // 비동기 작업의 결과값을 일반 변수에 담아 동기 코드처럼 편하게 사용한다.
  console.log(data);
}
printData2();
```

await를 사용하면 비동기 함수의 처리 결과를 기다렸다가 변수에 바로 할당할 수 있다. 이는 .then() 체이닝보다 코드의 흐름을 파악하기 훨씬 쉽게 만든다.

await는 반드시 async 키워드가 붙은 함수 내부에서만 사용 가능하다.
