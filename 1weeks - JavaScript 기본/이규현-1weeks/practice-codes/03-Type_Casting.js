// 형 변환 예제코드입니다

// 1. 묵시적 형 변환 -> 자바스크립트 엔진이 알아서 형 변환 하는 것

let num = 10;
let str = "20";

const result = num + str; // num이 str로 묵시적 형 변환이 일어남
console.log(result); // result = 1020

//------------------------------------------//

// 2. 명시적 형 변환
// -> 프로그래머 내장함수 등을 이용해서 직접 형 변환을 명시
// 문자열 -> 숫자
let str1 = "10";
let strNum1 = Number(str1); // 문자열을 숫자로 형 변환
console.log(10 + strNum1); // result = 20

// 문자열에 숫자말고 글자가 포함되있을 경우 (숫자가 앞에 있어야 형 변환이 잘 이루어짐)
let str2 = "10개";
let strNum2 = parseInt(str2); // 문자열을 숫자로 형 변환
console.log(strNum2); // result = 10

// 숫자 -> 문자열
let num1 = 26;
let numToStr1 = String(num1);
console.log(numToStr1 + "살 입니다"); // result : 26살 입니다
