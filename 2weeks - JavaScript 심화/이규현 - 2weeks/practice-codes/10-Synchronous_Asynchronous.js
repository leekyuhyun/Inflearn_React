// 동기 비동기 예제입니다.

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
