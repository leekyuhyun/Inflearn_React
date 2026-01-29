// 콜백 함수 에제입니다.

// 1. 콜백함수 기본
function main(value) {
  console.log(1);
  console.log(2);
  value(); // 인수로 받은 함수를 내부에서 실행
  console.log("end");
}

main(() => {
  console.log("I am sub");
});

// 2. 콜백함수의 활용
// 공통된 로직(반복)은 두고, 수행할 동작만 바꿀 때 유용함
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, function (idx) {
  console.log(idx);
});

repeat(5, function (idx) {
  console.log(idx * 2);
});

repeat(5, function (idx) {
  console.log(idx * 3);
});
