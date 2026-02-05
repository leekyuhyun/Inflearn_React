// Async/Await 예제입니다.

// 1. async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 키워드

async function getData() {
  return {
    name: "이규현",
    id: "kyulee",
  };
}

console.log(getData());

async function getData2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "이규현",
        id: "kyulee",
      });
    }, 1500);
  });
}

console.log(getData2());

// 2. await
// async 함수 내부에서만 사용이 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할
function printData() {
  getData2().then((result) => {
    console.log(result);
  });
}
printData();

async function printData2() {
  const data = await getData2();
  console.log(data);
}
printData2();
