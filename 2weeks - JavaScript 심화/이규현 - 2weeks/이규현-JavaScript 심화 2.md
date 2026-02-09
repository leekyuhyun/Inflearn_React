# 반복문으로 배열과 객체 순회하기

## 순회(Iteration)란?

배열, 객체에 저장된 여러개의 값에 순서대로 하나씩 접근하는 것을 말한다.

## 배열 순회

```javascript
// 1. 배열 순회
let arr = [1, 2, 3];

// 1.1 배열 인덱스

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let arr2 = [4, 5, 6, 7, 8];
for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}

// 1.2 for of 반복문
for (let item of arr) {
  console.log(item); // 1,2,3 출력
}
```

기존 방식: arr.length를 확인하고 인덱스 변수 i를 조작하여 접근해야 하므로 코드가 다소 길다.

개선된 방식: for...of를 사용하면 인덱스 관리 없이 값 자체에 집중할 수 있어 가독성이 훨씬 높아진다.

## 객체 순회

```javascript
// 2. 객체 순회
let person = {
  name: "이정환",
  age: 27,
  hobby: "테니스",
};

// 2.1 Object.keys 사용
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 반환한다.
let keys = Object.keys(person);

for (let key of keys) {
  const value = person[key];
  console.log(key, value);
}

// 2.2 Object.values
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환한다.
let values = Object.values(person);

for (let value of values) {
  //   console.log(value);
}

// 2.3 for in
for (let key in person) {
  const value = person[key];
  console.log(key, value);
}
```

배열화 순회: Object.keys나 Object.values를 사용하면 객체의 정보를 배열 형태로 바꿀 수 있어, 배열이 가진 다양한 메서드들을 함께 활용할 수 있다는 장점이 있다.

for...in의 간결함: 별도의 배열 생성 과정 없이 객체 내부를 바로 훑을 수 있어 매우 편리하다.

---

# 배열 메서드 1. 요소 조작

## 1. push

배열의 맨 뒤에 새로운 요소를 추가하는 메서드이다.

```javascript
let arr1 = [1, 2, 3];
// 1. 단일 요소 추가
arr1.push(4); // arr1 맨 뒤에 4 추가
console.log(arr1); // [1, 2, 3, 4]

// 2. 여러 요소 동시에 추가
arr1.push(5, 6, 7, 8);
console.log(arr1); // [1, 2, 3, 4, 5, 6, 7, 8]

// 3. 반환값 확인
// push 메서드는 요소를 추가한 후, 변경된 배열의 새로운 길이를 반환한다.
const newLength = arr1.push(9, 10, 11, 12);
console.log(newLength); // 12 (새로운 배열의 길이)
console.log(arr1); // [1, 2, ..., 12]
```

1. 요소 추가 방식
   기존에는 배열의 마지막에 값을 넣으려면 arr[arr.length] = 값과 같이 인덱스를 직접 계산해야 했으나, push를 사용하면 자동으로 맨 뒤에 데이터가 쌓인다.
   콤마(,)를 이용해 여러 개의 인수를 한 번에 전달하면, 전달한 순서대로 배열의 끝에 추가된다.

2. 반환값의 특징
   push 메서드를 실행하면 단순히 배열이 수정되는 것뿐만 아니라, 연산이 끝난 시점의 **배열의 전체 길이(length)**를 결과값으로 돌려준다.
   이를 활용해 추가 작업 후의 데이터 개수를 즉시 변수에 담아 사용할 수 있다.

## 2. pop

배열의 맨 뒤에 있는 요소를 제거하고 반환하는 메서드이다.

```javascript
let arr2 = [1, 2, 3];
// 1. 맨 뒤 요소 제거 및 반환
// 배열의 마지막 요소인 3을 삭제하고, 그 값을 popedItem에 저장한다.
const popedItem = arr2.pop();

console.log(popedItem); // 3 (제거된 요소)
console.log(arr2); // [1, 2] (요소가 제거된 배열)
```

1. 요소 제거 방식
   별도의 인덱스를 지정하지 않아도 언제나 배열의 가장 마지막에 위치한 요소를 찾아내어 삭제한다.
   메서드 호출 시 원본 배열에서 요소가 실제로 삭제되어 배열의 길(length)이 줄어든다.

2. 반환값의 특징
   pop은 단순히 삭제만 하고 끝나는 것이 아니라, 방금 삭제한 그 값을 결과값으로 돌려준다.
   이 특징을 이용하면 배열에서 빼낸 데이터를 다른 변수에 담거나, 다른 로직에 즉시 전달하여 활용할 수 있다.

## 3. shift

배열의 맨 앞에 있는 요소를 제거하고 반환하는 메서드이다.

```javascript
let arr3 = [1, 2, 3];
// 1. 맨 앞 요소 제거 및 반환
// 배열의 첫 번째 요소인 1을 삭제하고, 그 값을 shiftedItem에 저장한다.
const shiftedItem = arr3.shift();

console.log(shiftedItem); // 1 (제거된 요소)
console.log(arr3); // [2, 3] (요소가 제거된 배열)
```

1. 요소 제거 방식
   인덱스를 지정하지 않아도 언제나 배열의 0번 인덱스에 위치한 데이터를 삭제한다.
   맨 앞의 요소가 사라지면 뒤에 있던 모든 요소의 인덱스가 하나씩 앞으로 당겨진다. 이 과정에서 배열 전체를 수정하므로 데이터가 많을 경우 pop보다 처리 속도가 느릴 수 있다는 점이 특징이다.

2. 반환값의 특징
   pop과 마찬가지로 방금 삭제한 첫 번째 요소를 결과값으로 돌려준다. 이를 활용해 큐(Queue) 구조를 구현하거나 맨 앞의 우선순위 데이터를 처리할 때 유용하게 쓰인다.

## 4. unshift

배열의 맨 앞에 새로운 요소를 추가하는 메서드이다.

```javascript
let arr4 = [1, 2, 3];
// 1. 맨 앞에 단일 요소 추가
// 0을 배열의 가장 앞에 추가한다.
arr4.unshift(0);
console.log(arr4); // [0, 1, 2, 3]

// 2. 반환값 확인
// unshift 메서드는 요소를 추가한 후, 변경된 배열의 새로운 길이를 반환한다.
const newLength2 = arr4.unshift(-1);
console.log(newLength2); // 5 (새로운 배열의 길이)
console.log(arr4); // [-1, 0, 1, 2, 3]
```

1. 요소 추가 방식
   인덱스를 직접 조작하지 않아도 새로운 데이터를 배열의 가장 첫 번째 칸(0번 인덱스)에 삽입한다.
   새로운 요소가 맨 앞에 들어오면 기존에 있던 모든 요소의 인덱스가 하나씩 뒤로 밀려나게 된다. 이 과정 때문에 배열의 크기가 클수록 push보다 연산 속도가 느려질 수 있다는 특징이 있다.

2. 반환값의 특징
   push와 동일하게 작업을 마친 후의 **배열 전체 길이(length)**를 결과값으로 돌려준다.
   이를 통해 추가 직후 배열에 담긴 데이터의 총 개수를 바로 파악할 수 있다.

## 5. slice()

마치 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 반환하는 메서드이다.

```javascript
let arr5 = [1, 2, 3, 4, 5];
// 1. 시작 인덱스와 끝 인덱스 지정
// 인덱스 2번부터 5번 전(인덱스 4번)까지 잘라낸다.
let sliced = arr5.slice(2, 5);
console.log(sliced); // [3, 4, 5]

// 2. 시작 인덱스만 지정
// 인덱스 2번부터 배열의 끝까지 잘라낸다.
let sliced2 = arr5.slice(2);
console.log(sliced2); // [3, 4, 5]

// 3. 음수 인덱스 사용
// 뒤에서부터 2개의 요소를 잘라낸다.
let sliced3 = arr5.slice(-2);
console.log(sliced3); // [4, 5]

// 4. 원본 배열 확인
// slice는 원본 배열을 변경하지 않는다.
console.log(arr5); // [1, 2, 3, 4, 5]
```

1. 범위 지정 방식
   첫 번째 인수는 시작 인덱스, 두 번째 인수는 종료 인덱스를 의미한다. 이때 주의할 점은 종료 인덱스로 지정한 **'바로 앞'**까지만 잘라낸다는 점이다.
   두 번째 인수를 생략하면 마지막 요소까지 포함하며, 음수를 사용하면 배열의 끝에서부터 거꾸로 계산하여 범위를 지정할 수 있다.

2. 원본 보존의 특징
   push나 pop과 달리 원본 배열을 직접 수정하지 않고 새로운 배열 객체를 생성하여 반환한다.
   따라서 원본 데이터를 안전하게 유지해야 할 때 매우 유용하다.

## 6. concat

두개의 서로 다른 배열을 이어 붙여서 새로운 배열로 반환한다.

```javascript
let arr6 = [1, 2];
let arr7 = [3, 4];

// arr6 배열 뒤에 arr7 배열을 이어 붙인다.
let concatedArr = arr6.concat(arr7);

console.log(concatedArr); // [1, 2, 3, 4]
```

1. 배열 결합 방식
   메서드를 호출한 원본 배열이 앞에 오고, 인수로 전달한 배열이 그 뒤에 순서대로 결합된다.
   하나의 배열뿐만 아니라 여러 개의 배열이나 개별 값들을 인수로 넘겨 한꺼번에 합치는 것도 가능하다.

2. 원본 보존의 특징
   slice와 마찬가지로 기존의 arr6와 arr7 배열을 직접 수정하지 않는다.
   대신 두 배열의 요소를 복사하여 결합한 새로운 배열을 생성하기 때문에 데이터 손상 우려 없이 안전하게 사용할 수 있다.

---

# 배열 메서드 2. 순회와 탐색

## 1. forEach()

배열의 모든 요소를 순회하면서, 각각의 요소에 대해 특정 동작(콜백 함수)을 수행시키는 메서드다.

```javascript
let arr1 = [1, 2, 3];

// 1.1 일반 함수를 이용한 순회
// (item: 현재 요소, idx: 현재 인덱스, arr: 전체 배열)
arr1.forEach(function (item, idx, arr) {
  console.log(idx, item * 2);
});

// 1.2 화살표 함수를 이용한 순회 및 활용
let doubledArr = [];

arr1.forEach((item) => {
  doubledArr.push(item * 2); // 각 요소를 2배로 만들어 새로운 배열에 추가
});
console.log(doubledArr); // [2, 4, 6]
```

배열의 모든 요소를 처음부터 끝까지 하나씩 꺼내어 콜백 함수를 실행한다.

현재 요소(item), 현재 인덱스(idx), 그리고 순회 중인 배열 전체(arr)를 인자로 받아 자유롭게 활용할 수 있다.

단순히 배열의 내용을 출력하거나, 예제처럼 외부 배열에 가공된 값을 담는 등의 반복적인 동작을 수행할 때 유용하다.

## 2. includes()

배열에 특정 요소가 있는지 확인하는 메서드이다.

```javascript
let arr2 = [1, 2, 3];

// 배열에 숫자 3이 있는지 확인
let isIncluded = arr2.includes(3); // 존재하므로 true

// 배열에 숫자 10이 있는지 확인
let isIncluded2 = arr2.includes(10); // 존재하지 않으므로 false

console.log(isIncluded);
console.log(isIncluded2);
```

배열에 특정 값이 포함되어 있는지 확인하여 true 혹은 false를 반환한다.

indexOf를 사용해 -1과 비교하는 방식보다 가독성이 좋아 조건문에서 자주 사용된다.

## 3. indexOf()

특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드다.

```javascript
let arr3 = [1, 2, 3];

// 요소 '2'가 있는 위치(인덱스) 찾기
let index = arr3.indexOf(2); // 1
// 존재하지 않는 요소 '20' 찾기
let index2 = arr3.indexOf(20); // -1 (찾지 못함)

console.log(index);
console.log(index2);

// 중복된 요소가 있을 때
let arr4 = [2, 2, 2];
let index3 = arr4.indexOf(2); // 가장 앞에 있는 0 반환
console.log(index3);
```

찾으려는 값이 배열의 몇 번째 인덱스에 위치하는지 번호를 반환한다.

배열에 없는 값을 찾으라고 하면 -1을 반환하는 특징이 있다.

배열 내에 동일한 값이 여러 개 있다면, 가장 처음에 발견된(가장 낮은 인덱스) 위치를 반환한다.

## 4. findIndex()

모든 요소를 순회하며 콜백 함수를 만족하는 특정 요소의 인덱스를 반환한다.

```javascript
let arr5 = [1, 2, 3];

// 4.1 기본 조건문을 활용한 탐색
const findedIndex = arr5.findIndex((item) => {
  if (item === 2) return true;
});
console.log(findedIndex); // 1

// 4.2 조건식(홀수 찾기)을 활용한 탐색
const findedIndex2 = arr5.findIndex((item) => {
  if (item % 2 !== 0) return true;
});
console.log(findedIndex2); // 0 (1이 홀수이므로)

// 4.3 화살표 함수 축약형을 활용한 탐색
const findedIndex3 = arr5.findIndex((item) => item % 2 !== 0);
console.log(findedIndex3); // 0
```

단순한 값을 찾는 것을 넘어, 콜백 함수를 통해 복잡한 조건을 만족하는 요소의 위치를 찾는다.

배열을 순회하다가 콜백 함수가 true를 반환하는 가장 첫 번째 요소의 인덱스를 반환하고 순회를 종료한다.

### indexOf() vs findeIndex()

```javascript
let objectArr = [{ name: "이규현" }, { name: "왕곽봉" }];

// 1. indexOf는 객체 내부 값 비교 불가 (얕은 비교)
// 동일하게 생긴 객체라도 메모리 주소가 다르므로 찾지 못함
console.log(objectArr.indexOf({ name: "이규현" })); // -1

// 2. findIndex는 콜백 함수를 통해 내부 프로퍼티 비교 가능
console.log(objectArr.findIndex((item) => item.name === "이규현")); // 0
```

indexOf는 원시 타입 값의 일치 여부를 직접 비교하므로, 메모리 주소가 다른 객체 타입 내부의 값은 찾지 못하고 -1을 반환한다.

객체로 이루어진 배열에서 특정 조건의 데이터를 찾을 때는 반드시 콜백 함수 내에서 프로퍼티를 직접 비교할 수 있는 findIndex를 사용해야 한다.

## 5. find()

```javascript
let arr6 = [{ name: "이규현" }, { name: "왕곽봉" }];

// name이 "이규현"인 첫 번째 객체 요소를 그대로 가져옴
const finded = arr6.find((item) => item.name === "이규현");

console.log(finded); // { name: "이규현" }
```

findIndex가 위치(인덱스)를 알려준다면, find는 조건을 만족하는 요소 그 자체를 통째로 반환한다.

특정 키 값을 가진 객체 데이터를 배열에서 바로 뽑아내어 사용해야 할 때 매우 유용하다.

---

# 배열 메서드 3. 배열의 변형

# 1. filter()

기존 배열에서 특정 조건을 만족하는 요소들만 따로 추출하여 새로운 배열로 반환하는 메서드다.

```javascript
let arr1 = [
  { name: "이규현", hobby: "메이플" },
  { name: "왕곽봉", hobby: "메이플" },
  { name: "엄박봉", hobby: "피파" },
];

// 1.1 기본 조건문을 활용한 필터링
const maplePeople = arr1.filter((item) => {
  if (item.hobby === "메이플") return true;
});
console.log(maplePeople); // [이규현, 왕곽봉] 객체 배열 반환

// 1.2 축약형 사용
const maplePeople2 = arr1.filter((item) => item.hobby === "메이플");
});
console.log(maplePeople2); // [이규현, 왕곽봉] 객체 배열 반환
```

콜백 함수가 `true`를 반환하는 요소들만 모아서 새 배열을 만든다.

화살표 함수에서 `(item) => { item.hobby === "메이플" }`처럼 중괄호를 쓰면 반환값이 undefined가 되어 빈 배열이 나온다. 값을 바로 반환하려면 중괄호를 아예 빼거나, 중괄호 안에 return을 써야 한다.

# 2. map()

배열의 모든 요소를 순회하며 콜백 함수를 실행하고, 그 결과값들을 모아서 새로운 배열로 반환하는 메서드다.

```javascript
let arr2 = [1, 2, 3];

// 2.1 요소를 가공하여 새로운 숫자 배열 생성
const mapResult = arr2.map((item, idx, arr) => {
  return item * 2;
});
console.log(mapResult); // [2, 4, 6]

// 2.2 객체 배열에서 특정 프로퍼티(이름)만 뽑아내기
let names = arr1.map((item) => item.name);
console.log(names); // ["이규현", "왕곽봉", "엄박봉"]
```

기존 배열의 요소를 내가 원하는 형태(값, 객체, UI 요소 등)로 1:1 매핑하여 변환한다.

`forEach`와 비슷해 보이지만, `map`은 실행 결과를 모아 새로운 배열을 만든다는 점이 결정적인 차이다.

# 3. sort()

배열의 요소를 정렬하는 메서드다. 기본적으로는 요소를 문자열로 취급하여 사전순으로 정렬한다.

```javascript
// 3.1 문자열 정렬 (사전순)
let arr3 = ["b", "a", "c"];
arr3.sort();
console.log(arr3); // ["a", "b", "c"]

// 3.2 숫자 오름차순 정렬 (작은 것 -> 큰 것)
let arr4 = [10, 3, 4];
arr4.sort((a, b) => {
  if (a > b)
    return 1; // a가 더 크면 b를 앞으로 (순서 바꿈)
  else if (a < b)
    return -1; // a가 더 작으면 a를 앞으로 (순서 유지)
  else return 0; // 같으면 유지
});
console.log(arr4); // [3, 4, 10]

// 3.3 숫자 내림차순 정렬 (큰 것 -> 작은 것)
let arr5 = [10, 3, 4];
arr5.sort((a, b) => {
  if (a > b)
    return -1; // a가 더 크면 a를 앞으로
  else if (a < b)
    return 1; // a가 더 작으면 b를 앞으로
  else return 0;
});
console.log(arr5); // [10, 4, 3]
```

다른 메서드들과 달리 sort는 호출한 원본 배열을 직접 바꾼다. 원본 데이터가 중요할 경우 복사본을 만들어 사용해야 한다.

`sort()`만 쓰면 10이 3보다 앞에 온다(문자열 '1'이 '3'보다 먼저이기 때문). 따라서 숫자를 정렬할 때는 반드시 위와 같은 비교 함수가 필요하다.

# 4. toSorted()

최신 문법으로, sort()와 기능은 같지만 원본은 유지하고 정렬된 새 배열을 반환한다.

```javascript
let arr6 = ["c", "a", "b"];

// 원본은 그대로 두고, 정렬된 결과만 새로운 배열로 받음
const sorted = arr6.toSorted();

console.log(arr6); // ["c", "a", "b"] (원본 유지)
console.log(sorted); // ["a", "b", "c"] (새로운 배열)
```

원본 배열을 보존해야 하는 최신 개발 트렌드(불변성 유지)에 아주 적합한 메서드다.

# 5. join()

배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드다.

```javascript
let arr7 = ["hi", "im", "kyulee"];

// 구분자(콤마)로 합치기
const joined = arr7.join();
console.log(joined); // "hi,im,kyulee"
```

배열에 흩어진 문자열 데이터를 하나의 문장이나 특정 형식의 텍스트로 만들 때 편리하다. 구분자를 주지 않으면 기본적으로 콤마(,)가 들어간다.

---

# Date 객체와 날짜

자바스크립트 내장 객체인 Date를 이용하면 현재 시간을 가져오거나 특정 날짜를 계산하는 등 다양한 시간 관련 작업을 수행할 수 있다.

## 1. Date 객체 생성 및 타임스탬프

날짜 객체를 만드는 방법은 크게 세 가지가 있으며, 컴퓨터가 시간을 계산하는 기준인 '타임스탬프' 개념을 이해해야 한다.

```javascript
// 1.1 Date 객체 생성
let date1 = new Date(); // 현재 시간으로 생성
let date2 = new Date("2001-05-02 10:10:10"); // 특정 날짜 문자열로 생성
let date3 = new Date(2001, 4, 2, 12, 11, 10); // 숫자로 생성 (월은 0부터 시작함에 주의)

// 1.2 타임스탬프 (Time Stamp)
// 1970.01.01 00:00:00(UTC)로부터 몇 밀리초(ms)가 지났는지 나타내는 값이다.
let ts1 = date1.getTime();
let date4 = new Date(ts1); // 타임스탬프 숫자를 넣어 해당 시간의 객체를 복사할 수 있다.
```

날짜 문자열을 넣을 때 하이픈(`-`), 점(`.`), 슬래시(`/)` 등을 모두 인식한다.

숫자로 날짜를 생성할 때 1월은 0, 12월은 11로 취급한다. 따라서 5월을 설정하려면 4를 입력해야 한다.

복잡한 날짜 비교나 연산을 할 때 객체 형태보다 숫자 형태인 타임스탬프를 사용하는 것이 훨씬 빠르고 정확하다.

## 2. 시간 요소 추출 및 수정

생성된 Date 객체에서 연, 월, 일 등 특정 정보만 뽑아내거나 원하는 날짜로 변경할 수 있다.

```javascript
// 2.1 시간 요소 추출
let year = date1.getFullYear();
let month = date1.getMonth(); // 0(1월) ~ 11(12월) 반환
let date = date1.getDate();
let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

// 2.2 시간 수정하기 (set 메서드)
date1.setFullYear(2025);
date1.setMonth(5); // 6월로 설정됨
date1.setDate(2);
date1.setHours(16);
```

값을 가져올 때는 `get...`, 값을 수정할 때는 `set...` 메서드를 사용한다.

과거에 쓰던 `getYear()`는 1900년대를 기준으로 계산하는 버그가 있으므로, 반드시 4자리 연도를 반환하는 `getFullYear()`를 사용해야 한다.

## 3. 다양한 포맷으로 출력하기

객체 형태인 날짜 데이터를 사용자가 읽기 편한 문자열 형태로 변환하여 출력할 수 있다.

```javascript
// 3.1 영문 포맷 출력 (날짜만)
console.log(date1.toDateString()); // 예: "Mon Jun 02 2025"

// 3.2 현지화 포맷 출력 (날짜 + 시간)
// 사용자의 설정에 따라 한국어 등의 환경에 맞춰 출력된다.
console.log(date1.toLocaleString()); // 예: "2025. 6. 2. 오후 4:10:59"
```

`toDateString`은 시/분/초를 제외한 날짜 정보만 영문으로 깔끔하게 보여준다.

`toLocaleString`은 국가별 표준 표기법에 맞춰 자동으로 포맷을 변경해 주기 때문에 웹 사이트 UI에 날짜를 표시할 때 매우 유용하다.

---
