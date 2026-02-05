// 구조 분해 할당 예제입니다.

// 1. 배열의 구조 분해 할당

let arr = [1, 2, 3];

/* 배열 선언 및 할당
let one = arr[0];
let two = arr[1];
let three = arr[2];
*/

// 배열의 구조 분해 할당 적용
let [one, two, three] = arr;
console.log(one, two, three);

// 특정 원소를 제외하고 할당하고 싶으면 변수명을 생략할 수 있다.
let [onee, twoo] = arr;
console.log(one, two);

// 배열의 원소의 개수를 넘어서 four라는 변수를 추가로 선언해도 오류가 발생하진 않음
let [oneee, twooo, threee, four] = arr;
console.log(oneee, twooo, threee, four); // four - undefined 출력

// 기본값을 설정하는 것도 가능하다.
let [oneeee, twooo0, threeee, fourr = 4] = arr;
console.log(oneeee, twoooo, threeee, four); // four - 4 출력

/*----------------------*/

// 2. 객체의 구조 분해 할당

let person = {
  name: "이규현",
  age: 26,
  hobby: "야구",
};

/* 객체 할당
let userName = person.name;
let userAge = person.age;
let userHobby = person.hobby
console.log(userName,userAge,userHobby);
*/

// 객체의 구조 분해 할당
let { userName, useAge, userHobby } = person;

// 존재하지 않는 프로퍼티를 구조 분해할 수도 있다.
let { userNamee, userAgee, userHobbyy, extra } = person; // extra -> undefined 출력

// 기본값을 설정하는 것도 가능하다.
let { userNameee, userAgeee, userHobbyyy, extraa = "hello" } = person;

/*----------------------*/

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra);
};

func(person);
