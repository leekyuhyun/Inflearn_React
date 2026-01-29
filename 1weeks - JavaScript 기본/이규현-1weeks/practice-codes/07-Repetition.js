// 반복문 예제입니다.

for (let idx = 0; idx < 5; idx++) {
  console.log("반복!");
}

for (let idc = 0; idc <= 10; idc++) {
  if (idx % 2 === 0) {
    continue;
  }
  console.log(idc);

  if (idx >= 5) {
    break;
  }
}
