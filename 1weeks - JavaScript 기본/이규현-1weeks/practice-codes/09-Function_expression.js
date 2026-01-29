// 함수 표현식과 화살표 함수 에제입니다.

// 1. 함수 표현식
// 함수도 숫자와 문자열과 같은 하나의 값으로서 취급하기 때문에 함수 자체를 변수에다가 그냥 담아놓을 수도 있다.
// 변수명으로 함수를 호출할 수 있다.
function funcA() {
  console.log("funcA");
}

let varA = funcA;
varA();

// 2. 화살표 함수
let varB = (value) => {
  return value + 1;
};

console.log(varB(10));
