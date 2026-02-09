// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자

let date2 = new Date("1997-01-07/10:10:10");
//"1997/01/07", "1997.01.07" 구분 가능

// 2. 타임 스탬프
let ts1 = date1.getTime();
let date3 = new Date(ts1);
//console.log(date3);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth();
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(1);

// 5. 시간을 여러 포맷으로 출력
console.log(date1.toDateString());
console.log(date1.toLocaleString());