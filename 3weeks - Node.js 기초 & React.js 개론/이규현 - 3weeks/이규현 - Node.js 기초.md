해당 학습 정리는 이정환 강사님의 한입 크기로 잘라먹는 React기반으로 작성하였습니다.

# React.js 배우는데 갑자기 Node.js??

React.js라는 기술은 Node.js를 기반으로 동작하는 기술이다.
Node.js에 대한 기본적인 이해가 없으면 React를 배운다고 해도 제대로 이해하기는 어렵다.
![](https://velog.velcdn.com/images/leekh010502/post/a964ebfa-ccb3-49d4-a0a5-d3f8e99baa2d/image.png)

---

# Nods.js란?

Node.js는 웹 브라우저가 아닌 환경에서도 자바스크립트 코드를 실행시켜주는 자바스크립트의 런타임, 즉 자바스크립트의 실행환경이다. (실행환경 =구동기)

## Node.js가 만들어진 이유

### 자바스크립트 히스토리

- 자바스크립트는 태생 자체가 웹페이지 안에서 일어나는 아주 단순한 기능만을 개발하기 위해 만들어졌다.
  - (ex: 사용자가 웹에서 버튼을 클릭하면 경고창을 띄워준다. 요소의 색상을 변경시킨다 등 아주 단순한 인터랙션을 개발하기 위한 목적으로 오직 웹브라우저 내에서만 동작할 수 있도록 개발되었다.)
- C언어나 자바 언어와는 다르게 문법 자체가 매우 유연하고 작성하기가 편리하도록 설계되었다.

- 개발자들이 최대한 빠르게 개발할 수 있도록 그 생산성에만 중심을 두고 언어가 설계가 되었다.

- 자바스크립트의 매력에 빠진 사람들이 자바스크립트로 웹페이지 내부의 기능을 만드는 걸 넘어서 웹 브라우저 바깥에서도 자바스크립트를 이용해서 프로그램을 만들고 싶어하였다.

- Node.js가 등장하게 되면서 어디서든 동작할 수 있는 범용적인 언어가 되었다.

- Node.js는 자바스크립트가 가진 태생적인 한계를 넘어설 수 있게 해주었고 기존에 C/C# 같은 언어로 만들던 웹서버를 자바스크립트로 구축하는 일이 많아졌다.

- 나아가서 모바일 어플리케이션을 만들고 데스크탑 어플리케이션까지 만들기 시작하였다.

# Node.js 설치하기

## LTS vs latest

### LTS

LTS는 대부분의 유저들에게 추천하는 현재 가장 안정적인 버전이다.
LTS는 Long Term Support의 약자로 장기적으로 지원되는 버전이라는 뜻이다.
오랜기간 동안 안정적으로 지원되기 때문에 많이 사용한다.

### Latest

가장 최근에 개발된 기능들을 바로 써볼 수 있다.
기능 개선이 빠르지만, 그만큼 예상치 못한 버그가 있을 수 있고 지원기간이 짧다.

## 설치하기

본인은 MacOS 유저이고 homebrew를 이용하여 Node.js를 설치할 예정이다.
아래와 같은 명령어를 터미널에 복사하여 순서대로 설치한다. (Node.js 공식 사이트에서 가져왔음)

```bash
# Homebrew 다운로드 및 설치:
curl -o- https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh | bash

# Node.js 다운로드 및 설치:
brew install node@24

# Verify the Node.js version:
node -v # Should print "v24.13.0".

npm 버전 확인:
npm -v # 11.6.2가 출력되어야 합니다.
```

## NPM (Node Package Manager) 설치 확인하기

npm은 Node.js 프로젝트 단위의 패키지를 관리하는 도구이다.
새로운 패키지를 생성하다/외부 라이브러리를 설치 및 삭제하는 유용한 기능을 제공한다.

### 설치가 됐는지 확인하는 방법

터미널을 열어서 다음과 같은 명령어를 입력한다.

```bash
npm -v
```

---

# Node.js 사용하기

프로젝트: 특정 목적을 갖는 프로그램의 단위이다.
![](https://velog.velcdn.com/images/leekh010502/post/5a19f013-0adc-4a3f-87d8-090dc37550a7/image.png)

패키지: Node.js에서 사용하는 프로그램의 단위이다.
![](https://velog.velcdn.com/images/leekh010502/post/53aaa679-64c6-4c2e-b017-b059a70daee1/image.png)

Node.js 환경에서는 여러 개의 JavaScript 파일로 어떠한 목적을 갖는 프로그램을 만들 때 모두 다 이 Package라는 단위로 프로그램을 만들게 된다.

## 패키지 생성

```bash
npm init
```

다음 명령어를 입력하고 모두 엔터를 누르게 되면 다음과 같은 Package.json이라는 파일이 만들어진다.
![](https://velog.velcdn.com/images/leekh010502/post/a08fc2aa-09a2-4686-83ef-b7575f8a0aac/image.png)

## 노드로 실행해보기

우선 index.js 라는 파일을 만들어서 hello node.js라는 문구가 콘솔창에 출력되게 만들어보겠습니다.

```javascript
console.log("hello node.js");
```

그리고 터미널에 다음과 같은 명령어를 입력합니다

```bash
node index.js
```

그러면 콘솔창에 다음과 같이 hello node.js라는 문구가 나오는 것을 확인할 수 있습니다.
![](https://velog.velcdn.com/images/leekh010502/post/a16cd180-535c-486c-b168-3afd11c953f2/image.png)

### 주의사항

index.js가 생성된 위치에 있는 경로에서 node ~라는 명령어를 입력해야합니다.
ex) index.js가 루트 디렉터리가 아닌 src 폴더 안에 위치하고 있다면 터미널에서 `cd src`로 위치를 옮기고 나서 `node index.js` 명령어를 입력해야 hello node.js가 출력됩니다.

### 패키지 스크립트에서 간단하게 해결하기

Package.json `script{}`부분에
`"start":"node (index.js가 위치한 경로)`를 추가해주면 다음과 같은 명령어로 간단하게 index.js가 실행됩니다.

```bash
npm run start
```

![](https://velog.velcdn.com/images/leekh010502/post/114bff99-8ee1-4558-ada7-0ec088a16afe/image.png)

![](https://velog.velcdn.com/images/leekh010502/post/bb186353-3a05-456e-9e0c-e055eb7068bd/image.png)

---

# Node.js 모듈 시스템 이해하기

## 모듈

아래 사진과 같이 기능별로 나뉘어진 각각의 자바스크립트 파일들을 모듈이라는 이름으로 부른다.
![](https://velog.velcdn.com/images/leekh010502/post/c8b84155-f9e8-4375-a14b-bf1f33225518/image.png)

## 모듈 시스템이란?

모듈을 생성하고, 불러오고, 사용하는 등의 모듈을 다루는 다양한 기능을 제공하는 시스템이다.
![](https://velog.velcdn.com/images/leekh010502/post/2f9404c4-118d-4e5e-a563-49ddf0282982/image.png)

## 자바스크립트의 모듈 시스템

![](https://velog.velcdn.com/images/leekh010502/post/099f411e-2540-4fea-b395-55930a43e7f6/image.png)

대표적으로 많이 사용되는 CommonJS와 ESModule이라는 두 개의 모듈 시스템에 대해서만 자세히 실습과 함께 다루어볼 예정이다.

## 간단한 모듈 시스템 실습 (CJS -> Common JS)

### 모듈 생성

간단한 계산 기능을 모아둔 Math.js 모듈 파일을 만들었습니다.

```javascript
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}
```

### index.js에서 불러와서 사용해보기

index.js와 math.js 파일을 수정해줘야합니다.

```javascript
// Math.js
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

// module이라는 내장 객체에
// exports라는 프로퍼티의 값으로 객체를 저장
// 이 객체에 각각 프로퍼티로 내보내고 싶은 값들을 넣어주면 된다.
// value 값으로 사용되는 변수가 key값이 같을 경우
// 변수나 또는 함수의 이름만 명시해줘도 알아서 들어가게 된다.
module.exports = {
  add,
  sub,
};
```

module.exports: 현재 파일을 외부로 내보낼 때 사용하는 내장 객체다.

여러 개의 함수를 내보낼 때는 객체 내부에 프로퍼티로 담아서 한꺼번에 내보낼 수 있다.

```javascript
// index.js
// require라는 내장함수를 이용해서
// Math 모듈의 경로를 불러와서 사용할 수 있다.
const moduleData = request("./math");
console.log(moduleData);
console.log(moduleData.add(1, 2));
console.log(moduleData.sub(1, 2));

// 구조 분해 할당으로 불러오기
// 구조 분해 할당을 이용하면 코드가 훨씬 간결해진다.
const { add, sub } = requrie("./math");
console.log(moduleData.add(1, 2));
console.log(moduleData.sub(1, 2));
```

require: 파일의 경로를 인수로 받아 해당 파일이 내보낸 module.exports 내용을 그대로 가져온다.

상대 경로: 현재 위치를 기준으로 ./math와 같이 경로를 지정하며, .js 확장자는 생략 가능하다.

![](https://velog.velcdn.com/images/leekh010502/post/446ac048-d642-4d73-b164-89dfceeb2935/image.png)

## 간단한 모듈 시스템 실습 (ESM -> ES 모듈 시스템)

ESM을 사용하려면 패키지에 옵션을 추가해야한다.
`"type": "module"`을 추가하면 ESM을 사용하겠다는 뜻이다.
![](https://velog.velcdn.com/images/leekh010502/post/53c86e7b-cd47-4c90-b052-fbb88906c4d1/image.png)

CJS와 ESM은 같이 사용할 수 없기 때문에 ESM 사용할 때는 Package.json에 같이 추가해줘야한다

### 코드 수정하기

math.js / index.js 코드를 수정해야한다.

```javascript
// math.js
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}
// [ESM]
// export 키워드와 함께 중괄호를 열고 add ,sub를 내보내 주도록 설정
// export라는 키워드 뒤에 객체를 리터럴로 생성해서 그 안에 내보내고 싶은 값들으르 담아주기만 하면 된다.
export { add, sub };
```

이름 내보내기(Named Export): export { add, sub }와 같이 중괄호 안에 내보낼 대상을 명시한다.

유연한 위치: 꼭 하단이 아니더라도 함수 선언문 바로 앞에 export function add...와 같이 작성하여 개별적으로 내보낼 수도 있다.

```javascript
// index.js
// ESM
// 모듈의 확장자까지 꼭 명시 해줘야한다.
import { add, sub } from "./math.js";

console.log(add(1, 2));
console.log(sub(1, 2));
```

확장자 필수: CJS(require)와 가장 큰 차이점 중 하나로, ESM 환경(특히 브라우저나 최신 Node.js 환경)에서는 파일의 확장자까지 정확하게 명시해줘야 모듈을 찾을 수 있다.

선택적 로드: 중괄호를 이용해 해당 파일이 내보낸 여러 값 중 필요한 것만 골라서 불러올 수 있어 효율적이다.

![](https://velog.velcdn.com/images/leekh010502/post/9acd2f7f-a566-4d27-a068-f43c643dfa61/image.png)

## ESM 추가적인 기능

ES 모듈 시스템에서는 굉장히 다양한 방법으로 모듈로부터 값을 내보내고 또 가져올 수 있는 기능을 지원하는데 그 중에 자주 사용되는 추가적인 몇 가지 기능만 더 살펴보자.

### 1. export default (기본 내보내기)

모듈을 대표하는 하나의 값을 내보낼 때 사용한다. 파일당 딱 한 번만 사용할 수 있다.

```javascript
// math.js
// 함수 선언문 앞에 export default를 붙여서 대표 함수로 지정한다.
export default function multiply(a, b) {
  return a * b;
}
```

이름 자유 변경: 가져오는 쪽에서 이름을 내 마음대로 지어서 사용할 수 있다. (예: `import mul from "./math.js"`)

중괄호 생략: 대표 값이기 때문에 import 시 중괄호`{ }`를 사용하지 않는다.

### 선언과 동시에 export (개별 내보내기)

변수나 함수를 선언함과 동시에 바로 내보낼 수 있다. 하단에 묶어서 적는 방식보다 어떤 값이 내보내지는지 직관적으로 알 수 있다.

```javascript
// math.js
export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}
```

### 3. 복합적인 모듈 불러오기 (Import)

기본 내보내기(default)와 개별 내보내기(Named)를 한꺼번에 불러오거나, 이름을 바꿔서 불러오는 등 다양한 조합이 가능하다.

```javascript
// index.js

// 1. 기본 내보내기 가져오기: 중괄호 없이 원하는 이름을 붙여서 가져온다.
import mul from "./math.js";
// import multiply from "./math.js" // 이름은 mul이든 multiply든 상관없다.

// 2. 개별 내보내기 가져오기: 내보낸 이름 그대로 중괄호 안에 적어준다.
import { add, sub } from "./math.js";

// 3. 동시에 가져오기: default를 먼저 적고, 그 뒤에 중괄호를 사용한다.
// import mul, { add, sub } from "./math.js";

console.log(add(1, 2)); // 3
console.log(sub(1, 2)); // -1
console.log(mul(2, 3)); // 6
```

---

# Node.js 라이브러리 사용하기

## 라이브러리란?

프로그램을 개발할 때 필요한 기능들을 미리 만들어 모듈화 해 놓은 것
![](https://velog.velcdn.com/images/leekh010502/post/ca0a7576-a00c-437a-9325-9401a5d439c9/image.png)

## 라이브러리 사용하여 실습해보기

[👉🏻 Node.js 라이브러리 백화점 구경가기](https://www.npmjs.com)

### randomcolor 라이브러리 설치

```bash
npm install randomcolor
```

라이브러리를 설치하게 되면 package.json에
dependencies가 추가되면서 그 안에 라이브러리 이름과 버전이 생기는것을 확인할 수 있다.
![](https://velog.velcdn.com/images/leekh010502/post/7a444f08-8467-4f22-bd55-af5a93841a37/image.png)

node_modules,package-lock.json라는 폴더와 파일도 추가로 생성되는데
`node_modules` 폴더는 설치한 라이브러리가 실제로 저장되는 곳이고
`package-lock.json`은 패키지가 사용하고 있는 라이브러리들의 버전이나 정보를 package.json보다 더 정확하고 엄밀하게 저장하는 파일이다.

### randomcolor 이용해보기

```javascript
// 라이브러리에서 어떠한 값을 가져올 때는 경로를 명시하는 게 아니고
// from 뒤에 라이브러리의 이름만 명시하면 된다.
import randomcolor from "randomcolor";

const color = randomcolor();
console.log(color);
```

![업로드중..](blob:https://velog.io/ad0b64e1-b23d-4a53-9b97-4f5afb75a173)

### node_modules와 package-lock.json을 지우면 어떻게 될까?

위에 randomcolor를 실행시켜보면 다음과 같은 에러 메시지가 나오게 된다.
![업로드중..](blob:https://velog.io/3296ae14-d7bd-4eb9-9667-844dc697edc0)

하지만 package.json의 정보만 가지고 있어도 원래 설치되있던 것처럼 라이브러리를 다시 설치하도록 만들어 줄 수가 있다.
터미널에 다음과 같은 명령어를 실행시킨다.

```bash
npm install
```

package.json의 dependecies의 정보를 기준으로 모든 패키지, 모든 라이브러리를 다시 다 설치해준다.

#### Node.js 패키지를 압축해서 누군가한테 공유하거나 또는 Github 같은 곳에 업로드할 때 node_modules 폴더는 굳이 함께 포함하지 않는다 (공유 받은 사용자가 npm install로 설치하면 되기 때문이다.)
