//* 함수 표현식과 화살표 함수 

// 1. 함수 표현식 
function funcA(){
    console.log("funcA");
}

let varA = funcA; //* 함수를 변수에 담는 것도 가능 
varA();

let varB = function () { //* 익명함수, 이런식으로 하면 호이스팅 불가(아래에서 선언하는 것)
    console.log("funcB"); 
}

varB();

// 2. 화살표 함수 
let varC = (value) => {
    console.log(value);
    return value + 1;
}

console.log(varC(10));