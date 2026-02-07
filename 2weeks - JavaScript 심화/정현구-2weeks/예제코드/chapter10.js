//* 1. Date 객체를 생성하는 방법 
let date1 = new Date(); //생성자 (현재 시간 출력)
console.log(date1);

let date2 = new Date("1999-01-07-10:10:10"); // .,/,- 사용 가능
console.log(date2);

// * 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"(utc)로 부터 몇 ms가 지났지는를 의미하는 숫자값 
let ts1 = date1.getTime();

let date4 = new Date(ts1);

console.log(date1, date4);

// * 3. 시간 요소들을 추출하는 방법 
let year = date1.getFullYear();
let month = date1.getMonth() + 1; //* 자바스크립트에는 달이 0부터 시작하기에 +1을 해주어야 한다.(like 배열)
let date = date1.getDate();


let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

console.log(
    year,
    month,
    date,
    hour,
    minute,
    seconds
);

//* 4. 시간 수정하기 
date1.setFullYear(2023);
date1.setMonth(2); // 2를 인수로 던지면 3월 
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

//* 5. 시간을 여러 포맷으로 출력하기 
console.log(date1.toDateString());
console.log(date1.toLocaleDateString()); // 현지화된 시간이 문자열로 출력 