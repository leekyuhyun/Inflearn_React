//* 5가지 배열 변형 메서드 

//* 1. filter
// 기본 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환 
//* 웹서비스 만들 때 카테고리별 필터 같은 기능 만드는데 용이 
let arr1 = [
    {name:"정현구", hobby:"축구"},
    {name:"김선빈", hobby:"축구"},
    {name:"이규현", hobby:"야구"},
];

const soccerPeople = arr1.filter((item)=>{
    if (item.hobby ==="축구") return true;
});

//* 간결화 버전 
const soccerPeople1 = arr1.filter(
    (item) => item.hobby ==="테니스"
);

console.log(soccerPeople); // hobby가 축구인 요소 반환 

//* 2. map 
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환 
let arr2 = [1,2,3];
const mapResult1 = arr2.map((item,idx,arr)=>{
    return item * 2;
});

console.log(mapResult1); //[2,4,6]

//* 활용 사례 : arr1에서 name 값 추출하여 새로운 배열 

let names = arr1.map((item)=>item.name);
console.log(names); // [정현구,김서빈,이규현]

//* 3. sort 
// 배열을 사전순으로 정렬하는 메서드 
let arr3 = ["b", "a", "c"];
arr3.sort();

console.log(arr3); //a,b,c
//* 주의: 숫자인 경우 해당 x, 숫자를 오름차순으로 하고 싶은 경우 
let arr4 = [10,3,5];

arr4.sort((a,b)=>{
    if(a>b){
        //b가 a 앞에 와라 
        return 1;
    } else if(a<b){
        // a가 b앞에 와라 
        return -1;
    } else {
        //두 값의 자리를 바꾸지 마라 
        return 0;
    }
});

//* 4. toSorted (최신 함수)
// 정렬된 *새로운 배열*을 반환하는 메서드 
let arr5 = ["c","a","b"];
const sorted = arr5.toSorted();

console.log(arr5); //c,a,b
console.log(sorted); //a,b,c

//* 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 그런 메서드 
let arr6 = ["hi", "im", "hyungu"];
const joined = arr6.join(" ") //"-", "*" 등 문자열 사이 구분자를 넣을 수 있음 
console.log(joined); 