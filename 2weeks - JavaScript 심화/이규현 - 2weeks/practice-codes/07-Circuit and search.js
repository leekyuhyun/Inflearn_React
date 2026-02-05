// 배열 메서드2. 순회와 탐색 예제입니다.

// 1. forEach()
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
  console.log(idx, item * 2);
});

let doubledArr = [];

arr1.forEach((item) => {
  doubledArr.push(item * 2);
});
console.log(doubledArr);

/* --------------------- */

// 2. includes()
// 배열에 특정 요소가 있는지 확인하는 그런 메서드
let arr2 = [1, 2, 3];
let isInclued = arr.includes(3);
let isInclued2 = arr.includes(10);

console.log(isInclued);
console.log(isInclued2);

/* --------------------- */

// 3, indexOf()
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);
let index2 = arr3.indexOf(20);
console.log(index);
console.log(index2);

let arr4 = [2, 2, 2];
let index3 = arr4.indexOf(2);
console.log(index3);

/* --------------------- */

// 4. findIndex()
// 모든 요소를 순회하면서, 콜백함수를 만족하는
// 특성 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr5 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => {
  if (item === 2) return true;
});
console.log(findedIndex);

const findedIndex2 = arr4.findIndex((item) => {
  if (item % 2 !== 0) return true;
});
console.log(findedIndex2);

const findedIndex3 = arr4.findIndex((item) => item % 2 !== 0);
console.log(findedIndex3);

/* --------------------- */

// indexOf(), findIndex() 객체타입 찾을 때
let objectArr = [{ name: "이규현" }, { name: "왕곽봉" }];
console.log(objectArr.indexOf({ name: "이규현" })); // 얕은 복사
console.log(objectArr.findIndex((item) => item.name === "이규현"));

/* --------------------- */

// 5. find()
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환하는 메서드
let arr6 = [{ name: "이규현" }, { name: "왕곽봉" }];

const finded = arr6.find((item) => item.name === "이규현");
console.log(finded);
