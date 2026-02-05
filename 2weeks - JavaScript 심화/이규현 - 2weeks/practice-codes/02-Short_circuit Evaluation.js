// 단락 평가 에제 코드입니다.

// 1. 단락 평가 간단
function returnFalse() {
  console.log("False 함수");
  return false;
}

function returnTrue() {
  console.log("True 함수");
  return true;
}

// AND 연산: 앞이 false면 뒤는 보지도 않고 false 확정
console.log(returnFalse() && returnTrue());

// OR 연산: 앞이 true면 뒤는 보지도 않고 true 확정
console.log(returnTrue() || returnFalse());

/* --------------------------------------*/

// 2. Truthy & Falsy
// 논리 연산식에, Truthy 하거나 Falsy한 값이 사용되었을 때
// 연산 결과가 그냥 Truthy 하거나 Falsy한 값 그 자체가 되어버린다.
function returnFalse() {
  console.log("False 함수");
  return undefined; // Falsy 한 값
}

function returnTrue() {
  console.log("True 함수");
  return 10; // Truthy 한 값
}

// AND 연산: 앞이 Truthy 하면 뒤의 값을 반환한다.
console.log(returnTrue() && returnFalse()); // 결과: undefined

// OR 연산: 앞이 Truthy 하면 바로 그 값을 반환한다.
console.log(returnTrue() || returnFalse()); // 결과: 10

/* --------------------------------------*/

// 3. 단락 평가 활용 사례
function printName(person) {
  // person이 있으면 person.name을, 없으면 Falsy 한 person을 name에 할당한다.
  const name = person && person.name;

  // name이 존재하면 name을 출력하고, 없으면 뒤의 문자열을 출력한다.
  console.log(name || "person의 값이 없음");
}

printName(); // 결과: "person의 값이 없음"
printName({ name: "이규현" }); // 결과: "이규현"
