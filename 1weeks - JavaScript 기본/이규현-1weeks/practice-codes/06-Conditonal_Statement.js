// 조건문 에제입니다.

// 1. if 문
// 조건을 만족할 때만 실행
let num = 9;

if (num >= 10) {
  console.log("num은 10 이상입니다.");
  console.log("조건이 참 입니다.");
} else if (num >= 5) {
  console.log("num은 5 이상입니다.");
} else if (num >= 3) {
  console.log("num은 3 이상입니다.");
} else {
  console.log("조건이 거짓입니다!");
}

// 2. switch 문
// 하나의 변수가 여러 값 중 무엇과 같은지 확인할 때 사용
let animal = "cat";

switch (animal) {
  case "cat": {
    console.log("고양이입니다.");
  }
  case "dog": {
    console.log("강아지입니다.");
  }
  case "bear": {
    console.log("곰입니다.");
  }
  case "tiger": {
    console.log("호랑이입니다.");
  }
  default: {
    console.log("해당하는 동물이 없습니다.");
  }
}
