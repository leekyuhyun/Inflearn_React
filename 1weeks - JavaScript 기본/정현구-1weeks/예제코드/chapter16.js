//* 상수 객체
const animal = {
    type: "고양이",
    name: "별이",
    color: "black",
};

animal.age = 2; // 추가 
animal.name = "까망이"; //수정
delete animal.color; //삭제 

//* 2. 메서드
// -> 값이 함수인 프로퍼티를 말함

const person = {
    name: "정현구",
    // 메서드 선언
    sayHi () {
        console.log("hi");
    },
};

person.sayHi(); 
person["sayHi"]();