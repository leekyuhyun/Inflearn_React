//* 1. 객체 생성 

let obj1 = new Object(); // 객체 생성자
let obj2 = {}; //* 객체 리터럴 (대부분 사용)

//* 2. 객체 프로퍼티 (객체 속성) (key : vaule(아무거나 넣어도 됌))
let person = {
    name : "정현구",
    age : 26,
    hobby: "축구",
    job : "developer",
    extra : {},
};

//* 3. 객체 프로퍼티 다루는 법 
//* 3-1. 특정 프로퍼티 접근 (점 표기법, 괄호 표기법)
let name = person.name;

let age = person["age"];

let property = "hobby";
let hobby = person[property]; //* 동적으로 접근 가능 

//* 3-2. 새로운 프로퍼티를 추가하는 방법 
person.job = "fe developer";
person["favorite food"] = "감자탕";

console.log(person);

//* 3-3. 프로퍼티를 수정하는 방법 
person["favorite food"] = "찜닭";

//* 3-4. 프로퍼티를 삭제하는 방법 
delete person.job;
delete person["favorite food"]

//* 3-5. 프로퍼티 존재유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
// console.log(result1) : true