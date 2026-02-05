// 비동기 작업 처리하기 2. Promise 예제입니다.

const promise = new Promise(() => {
  // 비동기 작업을 실행하는 함수
  // executor

  setTimeout(() => {
    console.log("안녕");
  }, 2000);
});

console.log(promise);

const promise2 = new Promise((resoleve, reject) => {
  setTimeout(() => {
    console.log("안녕");
    resoleve();
  }, 2000);
});

setTimeout(() => {
  console.log(promise2);
}, 3000);

const promise3 = new Promise((resoleve, reject) => {
  setTimeout(() => {
    console.log("안녕");
    resoleve("안녕");
  }, 2000);
});

setTimeout(() => {
  console.log(promise3);
}, 3000);

const promise4 = new Promise((resoleve, reject) => {
  setTimeout(() => {
    console.log("안녕");
    reject("왜 실패했는지 이유...");
  }, 2000);
});

setTimeout(() => {
  console.log(promise4);
}, 3000);

const promise5 = new Promise((resoleve, reject) => {
  setTimeout(() => {
    const num = 10;

    if (typeof num === "number") {
      resoleve(num + 10);
    } else {
      reject("num이 숫자가 아닙니다.");
    }
  }, 2000);
});

setTimeout(() => {
  console.log(promise5);
}, 3000);

// then / catch 메서드
// -> 그 후에
promise5
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

function add10(num) {
  const promise6 = new Promise((resoleve, reject) => {
    setTimeout(() => {
      if (typeof num === "number") {
        resoleve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다.");
      }
    }, 2000);
  });
  return promise;
}
add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(undefined);
  })
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .catch((error) => {
    console.log(error);
  });
