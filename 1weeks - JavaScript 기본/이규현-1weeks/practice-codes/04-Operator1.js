// 연산자 에제 코드 입니다.

// 1. 대입 연산자
let var1 = 1; // 값을 저장할 이름과 저장한 값을 입력

// 2. 산술 연산자
// +,-,8,/,% 같은 연산자를 산술 연산자라고 부름
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

console.log(num1, num2, num3, num4, num5);

// 3. 복합 대입 연산자
// 산술 연산자와 대입 연산자가 복합되어 있다.
let num7 = 10;
num7 += 20;
num7 -= 20;
num7 *= 20;
num7 /= 20;
num7 %= 20;

console.log(num7);

// 4. 증감 연산자
// 값을 1씩 늘리거나 줄일때 사용한다.
let num8 = 10;
console.log(++num8); // 전위 연산 (먼저 계산 후에 출력) 11
console.log(num8++); // 후위 연산 (출력 후에 게산) 11
console.log(num8); // 후위 연산자 결과는 해당 라인에서 출력된다. 12

// 5. 논리 연산자
// boolean 타입의 값 (true, false) 저장할 때 사용
let or = true || false; // 값이 하나만 참이면 참
let and = true && false; // 양쪽 다 참이여야만 참
let not = !true; // 참->거짓, 거짓->참으로 변경

console.log(or, and, not);

// 6. 비교 연산자
// 값을 비교하여 true, false로 출력
let comp1 = 1 === 2;
let comp2 = 1 !== 2;

let comp3 = 2 > 1;
let comp4 = 2 < 1;

let comp5 = 2 >= 2;
let comp6 = 2 <= 2;
console.log(comp1, comp2, comp3, comp4, comp5, comp6);
