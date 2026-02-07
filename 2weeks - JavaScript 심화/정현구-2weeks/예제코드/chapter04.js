//* 1. Spread 연산자 
// Spread : 흩뿌리다, 펼치다 
//*-> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할 

let arr1 = [1,2,3];
let arr2 = [4, ...arr1, 5,6];
console.log(arr2);

let obj1 = {
    a:1,
    b:2,
};
let obj2 = {
    ...obj1,
    c: 3,
    d: 4,
}

function funcA(p1,p2,p3){
    console.log(p1,p2,p3);
}

funcA(...arr1);

//* -> 원래 방식은 
//* funcA(arr1[0], arr[1], arr[2]);

//* 2. Rest 매개변수 
// rest: 나머지, 나머지 매개변수 

function funcB(one, two,...rest) { //* 주의: (...rest)는 매개변수를 정의하는 공간에서 사용해서 spread연산자가 아님
    console.log(rest);             
}

funcB(...arr1);

//* 주의점: rest매개변수는 앞에 변수가 있으면 차례대로 할당하다가 rest매개변수에 다 넣는 방식으로 뒤에 매개변수를 추가할 시 들어오지 않는다.
//* 결론: rest매개변수는 무조건 뒤에 붙임.