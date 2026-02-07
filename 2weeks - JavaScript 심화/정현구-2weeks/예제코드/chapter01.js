//* Truthy, Falsy 값

//* 1. Falsy한 값 
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;                
let f5 = NaN;
let f6 = "";
let f7 = 0n;

// if(!f1){
//     console.log("falsy");
// } -> 콘솔에 falsy가 나오는 것을 확인할 수 있음

//* 2. Truthy 한 값 
// -> 7가지 falsy 한 값을 제외한 나머지 모든 값 

let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

// 3. 활용 사례 

function printName(person) {
    if(!person) { 
        //* (person === undefined || person === null)할 시 비효율  
        //*  
        console.log("person의 값이 없음");
        return; // 아래 콘솔 접근 방지 (오류방지)
    }
    console.log(person.name);
}

// let person = null; -> person의 값이 없음 출력 가능 
let person = {name:"정현구"};
printName(person);

//* 결론 : Truthy,Falsy 값은 비효울적인 조건문을 더 간결하게 개선 가능