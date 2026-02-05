# Truthy & Falsy

자바스크립트는 어떠한 값이 boolean 타입에 해당하는 참이거나 또는 거짓이지 않아도 상황에 따라서 참으로 판단하거나 거짓으로 판단하는 경우가 있다.

```javascript
if (123) {
  console.log("123 is true"); // Truthy 한 값 (참 같은 값)
} else {
  console.log("123 is false");
}

if (undefined) {
  console.log("undefined is true");
} else {
  console.log("undefined is false"); // Falsy 한 값 (거짓 같은 값)
}
```

자바스크립트의 모든 값은 Truthy 하거나 Falsy하다. 이를 이용하면 조건문을 간결하게 만들 수 있다.

## 예제

```javascript
// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

// 2. Truthy 한 값
// -> 7가지 Falsy 한 값을 제외한 나머지 모든 값
let t1 = "hello"; // 문자열
let t2 = 123; // 숫자
let t3 = []; // 빈 배열
let t4 = {}; // 빈 객체
let t5 = () => {}; // 함수

// 3. 활용 사례
/*
// 값이 없는 경우를 일일이 undefined인지, null인지 확인해야한다
function printName(person) {
    if (person === undefined || person === null) {
        console.log("person의 값이 없음")
    }
  console.log(person.name);
}

let person = { name: "이규현" };
printName(person);

let person or let person = null;
printName(person);
*/

function printName(person) {
  // person이 Falsy(null, undefined 등)하면 !연산자에 의해 참이 되어 실행됨
  if (!person) {
    console.log("person의 값이 없음");
  }
  console.log(person.name);
}

let person = { name: "이규현" };
printName(person); // 결과: 이규현
```

**예제 코드 설명**

1. 자바스크립트에서 아래의 7가지 값은 조건문에서 `false`로 판단한다.

2. 위에서 언급한 7가지 Falsy 한 값을 제외한 나머지 모든 값은 `true`로 판단한다.

3. 매개변수로 전달된 객체가 null이거나 undefined인 경우를 Falsy 특징을 이용해 한 번에 처리할 수 있다.

---

# 단락 평가 (short-circuit Evaluation)

## 단락 평가란?

AND나 또는 OR 같은 논리 연산식에서 이 첫 번째 피연산자의 값만으로도 해당 연산의 결과를 확정할 수 있다면 두 번째 피연산자의 값에는 아예 접근하지 않는 자바스크립트의 특징이다.

```javascript
let varA = false;
let varB = true;

//And 연산자
console.log(varA && varB);
console.log(varB || varA);
```

## 예제

```javascript
// 1. 단락 평가 간단
function returnFalse() {
  console.log("False 함수");
  return false;
}

function returnTrue() {
  console.log("True 함수");
  return true;
}

// AND 연산: 앞이 false면 뒤는 보지도 않고 false 확정
console.log(returnFalse() && returnTrue());

// OR 연산: 앞이 true면 뒤는 보지도 않고 true 확정
console.log(returnTrue() || returnFalse());

// 2. Truthy & Falsy
// 논리 연산식에, Truthy 하거나 Falsy한 값이 사용되었을 때
// 연산 결과가 그냥 Truthy 하거나 Falsy한 값 그 자체가 되어버린다.
function returnFalse() {
  console.log("False 함수");
  return undefined; // Falsy 한 값
}

function returnTrue() {
  console.log("True 함수");
  return 10; // Truthy 한 값
}

// AND 연산: 앞이 Truthy 하면 뒤의 값을 반환한다.
console.log(returnTrue() && returnFalse()); // 결과: undefined

// OR 연산: 앞이 Truthy 하면 바로 그 값을 반환한다.
console.log(returnTrue() || returnFalse()); // 결과: 10

// 3. 단락 평가 활용 사례
function printName(person) {
  // person이 있으면 person.name을, 없으면 Falsy 한 person을 name에 할당한다.
  const name = person && person.name;

  // name이 존재하면 name을 출력하고, 없으면 뒤의 문자열을 출력한다.
  console.log(name || "person의 값이 없음");
}

printName(); // 결과: "person의 값이 없음"
printName({ name: "이규현" }); // 결과: "이규현"
```

**예제 코드 설명**

1. 논리 연산자의 우선순위에 따라 결과가 확정되면 뒤쪽의 함수는 아예 호출되지 않는다.

2. 논리 연산식에 Truthy 하거나 Falsy 한 값이 사용되면, 연산 결과는 Boolean 값이 아닌 해당 값 그 자체가 된다.

3. 단락 평가를 이용하면 if문을 길게 쓰지 않고도 null이나 undefined 예외 처리를 간결하게 할 수 있다.

---

# 구조 분해 할당

## 구조 분해 할당이란?

배열이나 객채에 저장된 여러 개의 값들을 말 그대로 분해해서 각각 다른 변수에 할당하는 문법이다.
![](https://velog.velcdn.com/images/leekh010502/post/ad494c2e-ebfa-4e44-9ea3-7eed922570c0/image.png)

## 1. 배열의 구조 분해 할당

배열의 요소들을 개별 변수에 담을 때, 기존의 번거로운 방식 대신 사용하는 간결한 문법이다.

### 예제

```javascript
// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

/* [기존방식] 배열 선언 및 할당
let one = arr[0];
let two = arr[1];
let three = arr[2];
*/

// 배열의 구조 분해 할당 적용
let [one, two, three] = arr;
console.log(one, two, three);

// 특정 원소를 제외하고 할당하고 싶으면 변수명을 생략할 수 있다.
let [onee, twoo] = arr;
console.log(one, two);

// 배열의 원소의 개수를 넘어서 four라는 변수를 추가로 선언해도 오류가 발생하진 않음
let [oneee, twooo, threee, four] = arr;
console.log(oneee, twooo, threee, four); // four - undefined 출력

// 기본값을 설정하는 것도 가능하다.
let [oneeee, twooo0, threeee, fourr = 4] = arr;
console.log(oneeee, twoooo, threeee, four); // four - 4 출력
```

**예제 코드 설명**

1. 기존 방식에서는 배열의 각 요소에 접근하기 위해 인덱스를 사용하여 하나씩 변수에 할당해야 했다.
   **구조 분해 할당**을 사용하면 대괄호 `[]`를 이용해 배열의 원소를 순서대로 한 번에 할당할 수 있어 코드가 매우 간결해진다.

2. 배열의 모든 원소를 변수에 담을 필요는 없다. 필요한 개수만큼만 변수를 선언하면 앞의 원소부터 순서대로 할당되며, 저장하고 싶지 않은 원소는 변수명을 생략하여 무시할 수 있다.

3. 배열의 실제 원소 개수보다 더 많은 변수를 선언하더라도 오류가 발생하지 않는다. 값이 매칭되지 않는 변수에는 자동으로 `undefined`가 할당된다. 또한, 할당될 값이 없을 경우를 대비해 `=`을 사용하여 기본값을 미리 설정할 수도 있다.

## 2. 객체의 구조 분해 할당

### 예제

```javascript
// 2. 객체의 구조 분해 할당

let person = {
  name: "이규현",
  age: 26,
  hobby: "야구",
};

/* [기존 방식] 객체 할당
let userName = person.name;
let userAge = person.age;
let userHobby = person.hobby
console.log(userName,userAge,userHobby);
*/

// 객체의 구조 분해 할당
let { userName, useAge, userHobby } = person;

// 존재하지 않는 프로퍼티를 구조 분해할 수도 있다.
let { userNamee, userAgee, userHobbyy, extra } = person; // extra -> undefined 출력

// 기본값을 설정하는 것도 가능하다.
let { userNameee, userAgeee, userHobbyyy, extraa = "hello" } = person;

/*----------------------*/

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra);
};

func(person);
```

**예제 코드 설명**

1. 기존에는 객체의 특정 값에 접근하기 위해 `점 표기법(.)`을 사용하여 변수마다 하나씩 할당해야 했다.
   **구조 분해 할당**을 사용하면 중괄호`{}`를 이용해 객체의 키와 동일한 이름의 변수에 값을 한 번에 담을 수 있다.

2. 객체에 존재하지 않는 키 이름을 변수로 선언하면 undefined가 할당된다. 배열과 마찬가지로 =을 통해 기본값을 설정해두면, 해당 프로퍼티가 없을 때 지정한 값이 대신 들어간다.

3. 함수에서 객체를 인수로 받을 때, 매개변수 부분에서 바로 구조 분해 할당을 적용하면 내부 코드가 훨씬 간결해진다.

---

# Spread 연산자 & Rest 매개변수

## Spread 연산자

### Spread 연산자란??

객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할을 하는 연산자이다.

### 예제

```javascript
// 1. Spread 연산자
// -> Spread : 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

// 배열에서의 활용
let arr1 = [1, 2, 3];

// [기존 방식] 인덱스를 일일이 지정하여 나열함
// let arr2 = [4, arr1[0], arr1[1], arr1[2], 5, 6];

// [Spread 연산자 활용] ...을 사용하여 arr1의 모든 원소를 펼쳐서 넣음
let arr2 = [4, ...arr1, 5, 6];
console.log(arr2); // [4, 1, 2, 3, 5, 6] 출력

// 객체에서 활용
let obj1 = {
  a: 1,
  a: 2,
};

let obj2 = {
  ...obj1, // obj1의 프로퍼티(a: 1, b: 2)를 그대로 흩뿌림
  c: 3,
  d: 4,
};

// 함수의 인수로 활용
function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}

// arr1의 원소 [1, 2, 3]을 각각 p1, p2, p3에 매칭하여 전달함
funcA(...arr1); // {a: 1, b: 2, c: 3, d: 4} 출력
```

**예제 코드 설명**

1. 배열 내부에 다른 배열의 원소들을 하나씩 꺼내어 넣어야 할 때, 인덱스로 일일이 접근하지 않고도 간편하게 합칠 수 있다.

2. 기존 객체의 프로퍼티들을 그대로 가져오면서 새로운 프로퍼티를 추가하거나 수정할 때 유용하다.

3. 배열의 원소들을 함수의 매개변수에 순서대로 전달하고 싶을 때 사용한다.

## Rest 매개변수

### Rest 매개변수란??

Rest는 '나머지'라는 뜻으로, 함수로 전달된 여러 개의 인수들을 하나의 배열로 묶어서 받아오는 문법이다.
Spread 연산자가 값을 펼치는 역할이라면, Rest 매개변수는 반대로 값을 모아주는 역할을 한다.

### 예제

```javascript
// 2. Rest 매개변수
// -> Rest는 나머지, 나머지 매개변수
let arr1 = [1, 2, 3];

// 모든 인수를 하나의 배열로 모으기
function funcB(...rest) {
  console.log(rest);
}
funcB(...arr1);

// 특정 인수만 따로 받고 나머지만 모으기
function funcC(one, ...rest) {
  console.log(one); // 1
  consoloe.log(rest); // [2,3]
}
funcC(...arr1);

// 여러 개의 인수를 제외한 나머지만 모으기
function funcD(one, two, ...rest) {
  // 1, 2는 각각 변수에 할당되고 남은 3만 배열에 담긴다.
  console.log(rest); // [3]
}
funcD(...arr1);

// 매개변수 이름은 자유롭게 지정 가능
function funcF(...ds) {
  console.log(ds);
}
funcF(...arr1);
```

**예제 코드 설명**

1. 나머지 매개변수의 역할
   배열로 통합: 함수 호출 시 전달된 여러 개의 독립된 인수들을 함수 내부에서 하나의 배열로 다룰 수 있게 해준다.
   유연한 매칭: 앞에 일반 매개변수를 선언하면, 순서대로 값을 할당한 뒤 남은 나머지 인수들만 묶어서 가져온다.

2. 사용 시 주의사항
   마지막 위치: Rest 매개변수는 항상 매개변수 리스트의 가장 마지막에 위치해야 한다. 앞이나 중간에 올 경우 자바스크립트는 어디까지가 나머지인지 판단할 수 없어 에러가 발생한다.
   이름 지정: 매개변수 이름은 `...rest`뿐만 아니라 `...ds`처럼 개발자가 자유롭게 정할 수 있다.

---

# 원시타입과 객체타입

## 원시타입과 객체타입으로 나누는 이유

원시타입과 객체타입은 값이 저장되거나 복사되는 과정이 서로 다르기 때문이다.

## 원시타입

Number, String, Boolean 등 ... 값 자체로써 변수에 저장되고 복사된다.
불변값이다. (메모리 값 수정 X)
![](https://velog.velcdn.com/images/leekh010502/post/0ff252dd-b100-49c3-afa7-7f04ee532c24/image.png)

## 객체타입

Object, Array, Function 등... 참조값을 통해 변수에 저장하고 복사된다.
가변값이다. (메모리 값 수정 O)

### 객체 타입 주의사항 1. 의도치 않게 갚이 수정될 수 있다.

![](https://velog.velcdn.com/images/leekh010502/post/300e4443-d070-47bf-9f03-7b4e26bd6e66/image.png)
![](https://velog.velcdn.com/images/leekh010502/post/5f3a8325-a653-488b-b55b-6dbc3c60a3ed/image.png)
![](https://velog.velcdn.com/images/leekh010502/post/1f2ad110-6150-4fb4-b438-7c41a1c632fe/image.png)

#### 얕은 복사 vs 깊은 복사

- 얕은 복사
  객체의 참조값을 복사한다. (**원본 객체가 수정될 수 있어 위험하다.**)
- 깊은 복사
  새로운 객체를 생성하면서 프로퍼티만 따로 복사한다. (**원본 객체가 수정될 일이 없어 안전하다.**)
  ![](https://velog.velcdn.com/images/leekh010502/post/bfec0ba7-e778-4ba5-886a-881a042cca79/image.png)

### 객체 타입 주의사항 2. 객차간의 비교는 기본적으로 참조값을 기준으로 이루어진다.

![](https://velog.velcdn.com/images/leekh010502/post/84b5067c-4c19-4dc2-89a9-d9d899cecd48/image.png)
![](https://velog.velcdn.com/images/leekh010502/post/852b5fc7-9d54-4a12-8b84-795a0fe4a6cc/image.png)

#### JSON.stringify() - 객체를 문자열로 변환하는 기능을 하는 자바스크립트 내장함수이다.

#### 얕은 비교 vs 깊은 비교

- 얕은 비교
  참조값을 기준으로 비교한다.

- 깊은 비교
  객체를 문자열로 변환하여 비교한다. (JSON.stringify 등의 내장 함수를 이용해야 한다.)
  ![](https://velog.velcdn.com/images/leekh010502/post/3f01beb7-8c87-4dd9-b120-77ccaaf89bcc/image.png)

### 객체 타입 주의사항 3. 배열과 함수도 사실 객체이다.

![](https://velog.velcdn.com/images/leekh010502/post/adebcf05-f36c-4f00-a26b-4f82eabfcebb/image.png)
![](https://velog.velcdn.com/images/leekh010502/post/71a76991-0ad9-4385-9a9a-4e80be2d817b/image.png)

---
