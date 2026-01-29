// 1. null 병합 연산자 
// -> 존재하는 값을 추러내는 기능
// -> null 이나 undefined 아닌 값 찾아냄 
let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2; 
// undefined 아닌 var2 삽입 
let var5 = var1 ?? var3;
let var6 = var2 ?? var3;
// 둘다 값이 있으면 앞에있는 걸로 삽입 var2

let username = "정현구";
let usernickname = "goostmalone";

let displayname = username ?? usernickname;

// 2. typeof 연산자 
// -> 값의 타입을 문자열로 변환하는 기능을 하는 연산자 
let var7 = 1; 
var7 = "hello" // 자바스크립트는 자동으로 타입 변환 

let t1 = typeof var7; // -> Stirng 출력 

// 3. 삼항 연산자
// -> 조건식을 이용해 참 거짓일 때 값을 다르게 변환 

let var8 = 10;
let res = var8 % 2 === 0 ? "짝수" : "홀수";

console.log(res);

