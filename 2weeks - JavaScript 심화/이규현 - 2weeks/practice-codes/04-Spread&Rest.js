// Spread 연산자 & Rest 매개변수 예제입니다.

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

/* ------------------------------ */

// 2. Rest 매개변수
// -> Rest는 나머지, 나머지 매개변수

function funcB(...rest) {
  console.log(rest);
}
funcB(...arr1);

function funcC(one, ...rest) {
  consolog.log(rest);
}
funcC(...arr1);

function funcD(one, two, ...rest) {
  console.log(rest);
}
funcD(...arr1);

function funcF(...ds) {
  console.log(ds);
}
funcF(...arr1);
