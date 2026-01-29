// 스코프 에제입니다.

// 스코프
// -> 전역(전체 영역) 스코프 / 지역(특정 영역) 스코프
// -> 전역 스코프 : 전체 영역에서 접근 가능
// -> 지역 스코프 : 특정 영역에서만 접근 가능

let a = 1; // 전역 스코프

function funcA() {
  let b = 2; // 지역 스코프
  console.log(a); // 1 출력
}

funcA();
console.log(b); // is not defined -> 함수 내부에서 b를 선언했기 때문에 외부에서 접근할 수 없음

// 중괄호 안에서 선언된 모든 변수들을 지역 스코프
// 외부에서 함수에 접근하면 에러 발생
if (true) {
  let c = 1;
}
console.log(c);

for (let i = 0; i < 10; i++) {
  let d = 1;
}
console.log(d);
