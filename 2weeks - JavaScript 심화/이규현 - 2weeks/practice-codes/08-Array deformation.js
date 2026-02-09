// 배열 메서드 3. 배열 변형 예제입니다.

// 1. filter()
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환하는 메서드
let arr1 = [
  { name: "이규현", hobby: "메이플" },
  { name: "왕곽봉", hobby: "메이플" },
  { name: "엄박봉", hobby: "피파" },
];

const maplePeople = arr1.filter((item) => {
  if (item.hobby === "메이플") return true;
});

console.log(maplePeople);

const maplePeople2 = arr1.filter((item) => {
  item.hobby === "메이플";
});

console.log(maplePeople2);

/* ----------------- */

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환하는 메서드
let arr2 = [1, 2, 3];
const mapResult = arr2.map((item, idx, arr) => {
  return item * 2;
});
console.log(mapResult);

let names = arr1.map((item) => item.name);
console.log(names);

/* ----------------- */

// 3. sort()
// 배열을 사전순으로 정렬하는 메서드
let arr3 = ["b", "a", "c"];
arr3.sort();

console.log(arr3);

let arr4 = [10, 3, 4];
arr4.sort((a, b) => {
  if (a > b) {
    // b가 a 앞에 와라
    return 1;
  } else if (a < b) {
    //a가 b앞에 와라
    return -1;
  } else {
    // a=b 두 값의 자리를 바꾸지 마라
    return 0;
  }
});

console.log(arr4);

let arr5 = [10, 3, 4];
arr5.sort((a, b) => {
  if (a > b) {
    // a가 b 앞에 와라
    return -1;
  } else if (a < b) {
    //b가 a앞에 와라
    return 1;
  } else {
    // a=b 두 값의 자리를 바꾸지 마라
    return 0;
  }
});

console.log(arr5);

/* ----------------- */

// 4. toSorted()
// 정렬된 새로운 배열을 반환하는 메서드
let arr6 = ["c", "a", "b"];
const sorted = arr.toSorted();

console.log(arr6);
console.log(sorted);

/* ----------------- */

// 5. join()
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드이다.
let arr7 = ["hi", "im", "kyulee"];
const joined = arr7.join();
console.log(joined);
