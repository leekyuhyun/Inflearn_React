// Date 객체와 날짜 예제입니다.

// 1. Date 객체 생성 및 타임스탬프
// 1.1 Date 객체 생성
let date1 = new Date(); // 생성자
console.log(date1);

let date2 = new Date("2001.05.02.10:10:10"); // - . / 모두 사용 가능
console.log(date2);

let date3 = new Date(2001, 5, 2, 12, 11, 10);
console.log(date3);

// 1.2 타임스탬프 (Time Stamp)
// 특정시간이 "1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났는지를 의미하는 숫자값
// 여기서 1970.01.01 00시 00분 00초는 협정 세계시 (UTC)이다.
// UTC -> 세계 모든 나라가 표준으로 사용하는 시간이 시작되는 지점
let ts1 = date1.getTime();
console.log(ts1);

let date4 = new Date(ts1);
console.log(date1, date4);

// 2.. 시간 요소들을 추출 및 수정
// 2.1 시간 요소 추출
let year = date1.getFullYear();
let month = date1.getMonth();
let date = date1.getDate();
let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

console.log(year, month, date, hour, minute, seconds);

// 2.2 시간 수정하기 (set 메서드)
date1.setFullYear(2025);
date1.setMonth(5);
date1.setDate(2);
date1.setHours(16);
date1.setMinutes(10);
date1.setSeconds(59);

console.log(date1);

// 3. 시간을 어러 포맷으로 출력하기
// 3.1 영문 포맷 출력 (날짜만)
console.log(date1.toDateString());
// 3.2 현지화 포맷 출력 (날짜 + 시간)
// 사용자의 설정에 따라 한국어 등의 환경에 맞춰 출력된다.
console.log(date1.toLacalString());
