//* 단락 평가 : 논리 연산자에서 앞에 확정되는 값이 나오면 뒤에 값을 사용하지 않음

function returnFalse(){
    console.log("False 함수")
    return false;
    //* return undefined; 
}

function returnTrue(){
    console.log("True 함수")
    return true;
    //* return 10; -> truthy,falsy 값도 가능 
}

console.log(returnFalse() && returnTrue());
//* 단락 평가로 앞에 returnFalse() 함수만 출력
//* True()함수가 앞에 있으면 단락 평가가 작동하지 않음 


//* 단락 평가 활용 사례 

function printName(person) {
    const name = person && person.name;
    console.log(name || "person의 값이 없음");
}

printName(); // person의 값이 없음
printName({ name:"정현구" }); // 정현구


  


