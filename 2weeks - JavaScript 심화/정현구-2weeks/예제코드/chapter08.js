//* 5가지 요소 순회 및 탐색 메서드 

//* 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드 

let arr1 = [1,2,3];

arr1.forEach(function (item,idx,arr){
    console.log(idx,item*2); // 0,2 1,4 2,6
});

let doubledArr = [];

arr1.forEach((item)=>{
    doubledArr.push(item * 2);
});

console.log(doubledArr); // 2,4,6

//* 2. includes
// 배열에 특정 요소가 있는 지 확인하는 메서드 
let arr2 = [1,2,3];
let isInclude = arr2.includes(3);

console.log(isInclude); // true - 존재하지 않으면 false

//* 3. indexOf
// 특정 요소의 인덱스를 찾아서 반환하는 메서드 
let arr3 = [1,2,3];
let index = arr3.indexOf(2);
console.log(index); //1
//* 만약 [2,2,2] 처럼 중복된 경우 앞에꺼 먼저 반환하여 0
//* 없는 값을 반환하는 경우 -1 

//* 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 그런 
// 특정 요소의 인덱스를 반환하는 메서드 
let arr4 = [1,2,3];
const findedIndex = arr4.findIndex((item)=>{
    if(item % 2 !== 0) return true; //* 만족하는 값이 1이기에 0
})
//* 간결화 버전 
const findedIndex1 = arr4.findIndex(
    (item)=> item % 2 !== 0);

console.log(findedIndex); //0 

//* indexOf 와 findIndex 차이점 
//* indexOf는 기본적으로 얕은 비교 즉 객체값들은 참조값을 기준으로 비교가 되기 때문에
//* 프로퍼티를 기준으로 비교되지 않아 특정 객체값이 존재하는 지 찾을 수 없음 
//* 결론 단순한 원시 값에는 indexOf 복잡한 객체 타입 값 찾을 때는 findIndex

let objectArr = [
    {name:"정현구"},
    {name:"김선빈"},
];
// indexOf
console.log(
    objectArr.indexOf({name:"정현구"})
) //* -1이 나옴 이유는 객체값을 찾을 수 없음 
// findIndex
console.log(
    objectArr.findIndex(
        (item) => item.name === "정현구"
    )
); //* 0 콜백함수를 이용하여 직접 특정 프로퍼티 값을 기준으로 비교 가능 

//* 5. find 
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환 

let arr5 = [
    {name: "정현구"},
    {name: "김선빈"},
];

const finded = arr5.find(
    (item)=>item.name==="정현구"
);

console.log(finded); // name: "정현구" -> 요소 그대로 반환 

