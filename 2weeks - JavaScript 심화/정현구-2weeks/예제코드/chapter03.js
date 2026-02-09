//* 1. 배열의 구조 분해 할당  
let arr =[1,2,3];

let [one,two,three, four = 4] = arr; //순서대로 변수값 할당
// console.log(one,two,three,four);

//* 2. 객체의 구조 분해 할당 
let person = {
    name:"정현구",
    age : 26,
    hobby : "축구"
}

let {name, age: myAge ,hobby,extra="hello"} = person;
console.log(name,myAge,hobby,extra);

//* 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수룰 받는 방법
const func = ({name,age,hobby,exgra}) => {
    console.log(name,age,hobby,extra);
}

func(person);