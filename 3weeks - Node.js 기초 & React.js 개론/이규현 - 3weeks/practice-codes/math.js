// 계산 기능을 하는 코드들을 모아둔 Math 모듈

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

/* // [CJS 방식]
// module이라는 내장 객체에
// exports라는 프로퍼티의 값으로 객체를 저장
// 이 객체에 각각 프로퍼티로 내보내고 싶은 값들을 넣어주면 된다.
// value 값으로 사용되는 변수가 key값이 같을 경우
// 변수나 또는 함수의 이름만 명시해줘도 알아서 들어가게 된다.

module.exports = {
  add,
  sub,
}; 
*/

// [ESM]
// export 키워드와 함께 중괄호를 열고 add ,sub를 내보내 주도록 설정
// export라는 키워드 뒤에 객체를 리터럴로 생성해서 그 안에 내보내고 싶은 값들으르 담아주기만 하면 된다.
export { add, sub };

// 함수 선언문 앞에 export 키워드를 붙여서 사용도 가능하다.
/*
export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}
  */

export default function mutiply(a, b) {
  return a + b;
}
