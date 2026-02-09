// Truthy & Falsy 예제입니다.

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
