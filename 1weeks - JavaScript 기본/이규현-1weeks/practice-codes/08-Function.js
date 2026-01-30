// 함수 예제 코드입니다.

function getArea() {
  let width = 10;
  let height = 20;
  let area = width * height;
  console.log(area);
}

getArea();
//----------------------------------//

// 함수를 동적으로 사용하기 (내부에서 선언 x)
// 함수를 선언할 때 만들었던 소괄호에 변수를 선언 -> 매개변수라고 부름
function getAre(width, height) {
  let area = width * height;
  console.log(area);
}
getAre(10, 20); // 함수를 호출하면서 값을 전달 -> 인수, 10- > width / 20 -> height

//----------------------------------//
function getAr(width, height) {
  let area = width * height;
  return area;
}

let area1 = getAr(10, 20);
console.log(area1);
//----------------------------------//

// 선언문을 호출문 아래에 두어도 자바스크립트 호이스팅 기능으로 최상단으로 끌어올리기 때문에 상관없음
let area2 = getA(10, 20);
console.log(area2);

function getA(width, height) {
  let area = width * height;
  return area;
}
