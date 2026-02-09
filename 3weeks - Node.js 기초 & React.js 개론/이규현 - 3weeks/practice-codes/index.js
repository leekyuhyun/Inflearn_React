/* CJS
// require라는 내장함수를 이용해서
// Math 모듈의 경로를 불러와서 사용할 수 있다.
const moduleData = require("./math");
console.log(moduleData);
console.log(moduleData.add(1, 2));
console.log(moduleData.sub(1, 2));

// 구조 분해 할당으로 불러오기
// 구조 분해 할당을 이용하면 코드가 훨씬 간결해진다.
const { add, sub } = requrie("./math");
console.log(moduleData.add(1, 2));
console.log(moduleData.sub(1, 2));
*/

/**
 * [ESM 방식]
 * 1. import 키워드를 사용하며, 중괄호 안에 가져올 이름을 명시한다.
 * 2. 상대 경로로 불러올 때 확장자(.js)를 반드시 생략 없이 작성해야 한다.
 
import { add, sub } from "./math.js";
import mul from "./math.js";
//import multiply from "./math.js"
// import mul, {add, sub} from "./math.js"
console.log(add(1, 2));
console.log(sub(1, 2));
console.log(mul(2, 3));
*/

// 라이브러리에서 어떠한 값을 가져올 때는 경로를 명시하는 게 아니고
// from 뒤에 라이브러리의 이름만 명시하면 된다.
import randomcolor from "randomcolor";

const color = randomcolor();
console.log(color);
