//* 순회: 배열,객체에 저장된 여러개의 값에 순서대로 하나씩 접근 

//* 배열 순회 
let arr = [1,2,3];

// 1-1. 배열 인덱스 
for (let i = 0; i<arr.length; i++){
    console.log(arr[i]);
}

// 1-2. for of 반복문 
for(let item of arr) { //* arr 배열에 있는 값을 순차적으로 item에 삽입
    console.log(item);
} //* 배열에 있는 값을 순회만 하는 방식 

//* 2. 객체 순회 
let person = {
    name:"정현구",
    age: 26,
    hobby: "테니스",
};


// 2-1. Object.keys 사용 
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 반환 
let keys = Object.keys(person);

for (let key of keys){
    const value = person[key];
    console.log(key);
}

// 2-2. Object.values
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환 
let values = Object.values(person);

for (let value of values) {
    console.log(value);
}

// 2-3. for in 
for(let key in person){
    const value = person[key];
    console.log(key,value);
}

//* 주의점: for of는 배열, for in은 객체에서만 사용 가능 