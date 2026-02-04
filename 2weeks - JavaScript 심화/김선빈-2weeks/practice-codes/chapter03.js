// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];
// 기존 방식
// let one = arr[0];
// let two = arr[1];
let [one, two, three, four = 4] = arr;

// 2. 객체의 구조 분해 할당당
let person = {
  name: "김선빈",
  age: 26,
  hobby: "헬스",
};

let {
  age: myAge,
  hobby,
  name,
  extra = "hello",
 } = person;

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 얻는 방법
const func = ({name, age, hobby, extra}) => {
  console.log(name, age, hobby, extra);
};

func(person);