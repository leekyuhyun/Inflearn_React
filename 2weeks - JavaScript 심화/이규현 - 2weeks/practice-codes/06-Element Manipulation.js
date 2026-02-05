// 배열 메서드 1. 요소 조작에 대한 예제입니다

// 1. push() 메서드
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];
// 1. 단일 요소 추가
arr1.push(4); // arr1 맨 뒤에 4 추가
console.log(arr1); // [1, 2, 3, 4]

// 2. 여러 요소 동시에 추가
arr1.push(5, 6, 7, 8);
console.log(arr1); // [1, 2, 3, 4, 5, 6, 7, 8]

// 3. 반환값 확인
// push 메서드는 요소를 추가한 후, 변경된 배열의 새로운 길이를 반환한다.
const newLength = arr1.push(9, 10, 11, 12);
console.log(newLength); // 12 (새로운 배열의 길이)
console.log(arr1); // [1, 2, ..., 12]

/*------------------------------*/

// 2. pop() 메서드
// 배열의 맨 뒤에 있는 요소를 제거하고, 반환
let arr2 = [1, 2, 3];
// 1. 맨 뒤 요소 제거 및 반환
// 배열의 마지막 요소인 3을 삭제하고, 그 값을 popedItem에 저장한다.
const popedItem = arr2.pop();

console.log(popedItem); // 3 (제거된 요소)
console.log(arr2); // [1, 2] (요소가 제거된 배열)

/*------------------------------*/

// 3. shift() 메서드
// 배열의 맨 앞에 있는 요소를 제거, 반환
let arr3 = [1, 2, 3];
// 1. 맨 앞 요소 제거 및 반환
// 배열의 첫 번째 요소인 1을 삭제하고, 그 값을 shiftedItem에 저장한다.
const shiftedItem = arr3.shift();

console.log(shiftedItem); // 1 (제거된 요소)
console.log(arr3); // [2, 3] (요소가 제거된 배열)

/*------------------------------*/

// 4. unshift() 메서드
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1, 2, 3];
// 1. 맨 앞에 단일 요소 추가
// 0을 배열의 가장 앞에 추가한다.
arr4.unshift(0);
console.log(arr4); // [0, 1, 2, 3]

// 2. 반환값 확인
// unshift 메서드는 요소를 추가한 후, 변경된 배열의 새로운 길이를 반환한다.
const newLength2 = arr4.unshift(-1);
console.log(newLength2); // 5 (새로운 배열의 길이)
console.log(arr4); // [-1, 0, 1, 2, 3]

/*------------------------------*/

// 5. slice() 메서드
// 마치 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 반환
let arr5 = [1, 2, 3, 4, 5];
// 1. 시작 인덱스와 끝 인덱스 지정
// 인덱스 2번부터 5번 전(인덱스 4번)까지 잘라낸다.
let sliced = arr5.slice(2, 5);
console.log(sliced); // [3, 4, 5]

// 2. 시작 인덱스만 지정
// 인덱스 2번부터 배열의 끝까지 잘라낸다.
let sliced2 = arr5.slice(2);
console.log(sliced2); // [3, 4, 5]

// 3. 음수 인덱스 사용
// 뒤에서부터 2개의 요소를 잘라낸다.
let sliced3 = arr5.slice(-2);
console.log(sliced3); // [4, 5]

// 4. 원본 배열 확인
// slice는 원본 배열을 변경하지 않는다.
console.log(arr5); // [1, 2, 3, 4, 5]

/*------------------------------*/

// 6. concat() 메서드
// 두개의 서로 다른 배열을 이어 붙여서 새로운 배열로 반환
let arr6 = [1, 2];
let arr7 = [3, 4];

// arr6 배열 뒤에 arr7 배열을 이어 붙인다.
let concatedArr = arr6.concat(arr7);
console.log(concatedArr); // [1, 2, 3, 4]
