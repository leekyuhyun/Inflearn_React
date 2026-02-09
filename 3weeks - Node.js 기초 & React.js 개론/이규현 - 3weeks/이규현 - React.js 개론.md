해당 학습 정리는 이정환 강사님의 한입 크기로 잘라먹는 React기반으로 작성하였습니다.

# React.js를 소개합니다.

## React.js란?

Meta(Facebook)이 개발한 오픈소스 JavaScript 라이브러리이다.

대규모 웹 서비스의 UI를 더 편하게 개발하기 위해 만들어진 기술이다.

Netflix, Facebook, Instagram, Notion이 대표적으로 React.js로 만들어졌다.

가장 많은 인기를 누르고 있는 프론트엔드 기술이다.

## React의 기술적인 특징

![](https://velog.velcdn.com/images/leekh010502/post/0d0ad9e3-970e-420c-b5e1-fae8611530b4/image.png)

### React의 기술적인 특징 1. 컴포넌트를 기반으로 UI를 표현한다.

![](https://velog.velcdn.com/images/leekh010502/post/05fc767b-afda-4cfe-b046-b09c49bb2f75/image.png)

예를 들어 구현해야하는 웹페이지가 헤더, 메인, 푸터 세 가지 부분으로 나뉘어져 있다라고 하면 React에서는 각가의 영역을 분리해서 JavaScript 파일에 component라는 단위로 나눠서 모듈화해서 보관할 수 있게 때문에 웹 페이지를 마치 레고를 조립하듯이 여러 개의 컴포넌트들을 합쳐서 만들어낼 수가 있다.
![](https://velog.velcdn.com/images/leekh010502/post/41374db3-ce15-4255-9fad-f03acc329b7f/image.png)

컴포넌트를 자바스크립트 파일로 모듈화할 수 있다는 것은 중복 코드를 제거하는 관점에서 매우 큰 장점이 된다.
![](https://velog.velcdn.com/images/leekh010502/post/e51b2569-264f-44c5-9d7c-a3f8132bd6d1/image.png)
위에 이미지처럼 헤더 컴퍼넌트를 만들고 이 컴퍼넌트를 여러 페이지에서 불러와서 사용하도록 만들면 중복코드가 발생하지 않는다.

수정사항이 발생한다고 하더라고 해당 컴퍼넌트 하나만 수정해주면 되기 때문에 유지보수 차원에서도 굉장히 용이하다.

### React의 기술적인 특징 2. 화면 업데이트 구현이 쉽다.

#### 업데이트란?

![](https://velog.velcdn.com/images/leekh010502/post/d63458b0-e039-48a7-bacf-fb84d934a3a0/image.png)

#### 선언형 프로그래밍이란?

React는 선언형 프로그래밍이라는 방식으로 동작하기 때문에 화면 업데이트를 구현하기 쉽다.
![](https://velog.velcdn.com/images/leekh010502/post/5e011f70-8b78-45ca-93df-c089798b44c8/image.png)

#### 설명

React는 컴포넌트 단위로 나눠서 개발을 하게 되는데, 각각의 컴퍼넌트에는 State라는 해당 컴퍼넌트의 상태를 저장하는 아주 특수한 변수를 저장할 수 있다.

이 State 값이 바귀면 컴퍼넌트가 바뀐 스테이트 값에 따라서 각각 다른 UI를 화면에 렌더링 하도록 설정할 수 있다.

렌더링 (Rendering)이란 UI 요소를 화면에 그려내는 것을 말한다.

![](https://velog.velcdn.com/images/leekh010502/post/971c65d7-b082-47ed-8f95-1a2fab3875bd/image.png)

위에 이미지 같이 State 변수의 값이 1이면 1번 UI라는 렌더링 결과가 나오고 State 변수의 값이 2면 2번 UI로 렌더링하도록 설정해 줄 수 있기 때문에 화면에 업데이트가 필요할 때 컴퍼넌트가 가지고 있는 이 State라는 변수의 값만 바꾸면 자동으로 다른 버전의 UI를 렌더링하도록 설정할 수 있어서 훨씬 더 편하고 훨씬 더 간결하게 업데이트를 구현수 있다.

#### 핵심

![](https://velog.velcdn.com/images/leekh010502/post/4faeaf5f-c0c6-458c-8466-f8f1057959f3/image.png)

### React의 기술적인 특징 3. 화면 업데이트가 빠르게 처리된다.

React는 화면 업데이트를 매우 쉽게 구현할 수 있음과 동시에 업데이트들이 매우 빠른 속도로 처리될 수 있도록 도와준다.
어떻게 그럴 수 있는지 살펴보려면 브라우저가 어떻게 동작하는지에 대해서 먼저 살펴봐야한다.

#### 브라우저

![](https://velog.velcdn.com/images/leekh010502/post/04a3283b-58f7-47cf-84b5-3a1fc09068d5/image.png)

브라우저의 렌더링 과정 (Critical Rendering Path)
![](https://velog.velcdn.com/images/leekh010502/post/084f0a40-5181-4ace-a537-5d76757e7e83/image.png)

**Critical Rendering Path는 앞으로 프론트엔두 개발을 꾸준히 하다 보면 계속해서 맞닥뜨릴 수 밖에 없는 핵심 기본 개념 중에 하나이다.**

#### 브라우저 렌더링 과정 알아보기

#### 1. HTML과 CSS는 각각 DOM이라는 것과 CSS Object Model이라는 것으로 변환한다.

DOM이라는 건 브라우저가 자기가 더 이해하기 쉬운 방식으로 변환한 객체이다.
HTML 문서를 일종의 객체 모델로 변환한 거다라고 해서 문서 객체 모델 (Dom -> Document Object Model)라고 부른다.
![](https://velog.velcdn.com/images/leekh010502/post/aa692ec5-3a5a-46bf-aa7d-1ae7673758ac/image.png)

CSSOM (CSS Object Model)도 DOM과 비슷하다.
CSS 코드를 브라우저가 자기가 더 이해하기 쉬운 형태로 변환한 것이다.

#### 2. DOM과 CSSOM을 합쳐서 Render Tree를 만든다.

Render Tree는 웹페이지의 청사진 (또는 웹페이지의 설계도)정도의 역할을 한다.

DOM에는 HTML로 표현한 요소들의 위치, 배치, 모양에 관한 모든 정보가 있고, CSSOM에는 CSS로 표현한 요소들의 스타일과 관련된 모든 정보가 있다.

그래서 DOM과 CSSOM을 협쳐서 만든 Render Tree에는 렌더링 되어야하는 요소들의 모든 정보가 다 포함이 되어 있다. 그렇기 때문에 Render Tree를 웹페이지의 청사진이라고 부른다.

#### 3. Layout 작업을 수행한다.

Layout은 웹페이지라는 공간 안에 Render Tree에 포함되어 있는 요소들의 배치를 잡아보는 것이다.
(ex: 방 꾸미기할 때 각각의 가구들을 어떻게 배치하는가)

#### 4. Painting

요소를 실제로 화면으로 그려내는 과정이다.
이 과정까지 거치게되면 웹페이지가 눈 앞에 실제로 나타나게 된다.

#### 화면에 업데이트는 어떻게 발생하게 될까??

JavaScript가 DOM을 수정하면 업데이트가 발생한다.
![](https://velog.velcdn.com/images/leekh010502/post/80f169a6-5dfe-45f7-82cb-5fa74d93ff11/image.png)

DOM이 수정되면 브라우저는 Critical Rendaering Path의 전체 단계를 다시 진행한다.

Render Tree를 다시 생성하고 Layout을 다시 잡고 다시 Painting을 진행하게 된다.

그럼으로써 화면에 그려지는, 즉 렌더링되는 요소가 변경이 되면서 업데이트가 실제로 이루어진다.

#### 주의! Layout,Painting은 매우 오래걸린다.

![](https://velog.velcdn.com/images/leekh010502/post/9a2ff81f-9ff7-407c-b79c-126fcec175eb/image.png)

JavaScript로 DOM을 순식간에 여러번 수정하게 되면 Render TREE 이후 과정을 그 만큼 다시 진행되는데 성능이 굉장히 약화가 된다. 심할 경우 브라우저에서 응답없음 페이지를 띄워버리면서 마비가 되어버리는 현상이 발생할 수도 있다.

![](https://velog.velcdn.com/images/leekh010502/post/522bb1be-34ad-421f-8276-9e1a275f64a7/image.png)

![](https://velog.velcdn.com/images/leekh010502/post/4da67962-5401-4433-8a78-60ea7409dd31/image.png)

JavaScript로 DOM을 직접 수정해서 업데이트를 구현할 때에는 DOM 수정 횟수를 최소화해야 되기 때문에 업데이트를 모아뒀다가 한 번만 DOM을 수정할 수 있도록 고려해야한다.
![](https://velog.velcdn.com/images/leekh010502/post/884c2b5b-0bd8-4d0d-b0dd-e658edf6320f/image.png)

하지만 서비스의 규모가 커질수록 점점 힘들어진다.
실제로 개발하게 될 서비스에서는 다뤄야할 업데이트와 동시에 발생하는 업데이트들도 굉장히 많기 때문에 굉장히 힘들 일이다.
![](https://velog.velcdn.com/images/leekh010502/post/76244a8c-7a8a-4345-a422-a1320c745fa9/image.png)

하지만 React에서는 이 과정을 자동으로 진행해준다.
![](https://velog.velcdn.com/images/leekh010502/post/cb01ed0c-dbf5-448e-b0ef-84574daf2569/image.png)

#### Virtual DOM이란?

DOM을 자바스크립트 객체로 흉내낸 것으로 일종의 복제판이라고 생각하면 된다.
React는 업데이트가 발생하면 실제 DOM을 수정하기 전에 이 가상의 복제판 DOM에 먼저 반영해본다.
![](https://velog.velcdn.com/images/leekh010502/post/8f8d858a-de49-420c-8c3c-a9584a310bc5/image.png)

![](https://velog.velcdn.com/images/leekh010502/post/3441e086-2420-4ddd-82f4-a70b4ae401fa/image.png)

![](https://velog.velcdn.com/images/leekh010502/post/2aa4e18f-df40-47f6-9f21-af0567445a07/image.png)

---

# 첫번째 React App 생성하기

React로 만든 웹 서비스들은 보통 React App, React Application이라고 불린다.

그 이유는 React로 만들어진 대다수의 웹 서비스들은 단순한 웹 페이지의 기능을 넘어서 Netflix, Instagram, Facebook, Notion처럼 사실상 어플리케이션에 가까울 정도로 매우 다양한 기능들을 제공하고 있기 때문에 마치 단순한 웹이 아니라 웹 브라우저 위에서 동작하는 어플리케이션같다 라고 해서 보통은 React APP, React Application이라고 부르게 된다.

## React APP 생성하기

### React도 자바스크립트의 라이브러리

![](https://velog.velcdn.com/images/leekh010502/post/ea87aca2-915e-4e69-bb80-5cd6a6027e72/image.png)

3번째 과정인 기타 도구들을 직접 설치하고 설정하는 게 상당히 복잡하다.

### Vite로 React APP

![](https://velog.velcdn.com/images/leekh010502/post/45b4d133-0e7a-45bb-ae50-b5122e089f73/image.png)

React 공식 문서에서도 이 방법을 권장하고 있고 오늘날 대부분의 리액트 앱은 이 vite를 이용해서 만들어진다.

### Vite로 React APP 만들기

터미널에 다음과 같이 명렁어를 입력한다.

```bash
npm create vite@latest
```

해당 명령어를 입력하면 다음과 같은 과정이 있는데 이미지를 캡쳐해서 보여주는걸로 대체하였다.
![](https://velog.velcdn.com/images/leekh010502/post/d4e2909b-a823-461f-9e52-38ffd7b15c20/image.png)

#### package.json 파일을 확인해보자

![](https://velog.velcdn.com/images/leekh010502/post/1a64f1f8-0337-4a43-81bd-03dd7387fdc6/image.png)

> scripts
> dev, build, lint, preview 등 개발 중에 사용할 스크립트들이 미리 다 설정 되있다.

> dependencies
> react, react dom이라는 라이브러리가 미리 설치가 되어있다.

> devDependencies
> 오직 개발할 때에만 사용되는 라이브러리들이 담겨있다.
> 개발 시에 유용한 문법 체크 도구, 개발 시에 활용한 테스트 도구같은 것이 들어있다.
> 나중에 React App을 나중에 배포할 때에는 개발용 라이브러리들은 포함되지 않는다.

이 package.json에 있는 라이브러리들을 사용하려면 `npm install`이라는 명령어를 입력해야한다.
그러면 `package-lock.json` `node_modules`가 생성된다.

### React APP 폴더와 파일 확인해보기

React APP 생성시 자동으로 생성되는 파일과 폴더를 확인해보도록 하겠다.

#### 1. public 폴더

![](https://velog.velcdn.com/images/leekh010502/post/89495522-06a1-485d-9537-10113660cea8/image.png)

public 폴더 안에는 bit.svg라는 이미지 파일이 하나 들어있다.

public 폴더의 용도는 svg, png, jpg 같은 이미지 파일들을 보관하거나 폰트나 동영상 같은 코드가 아닌 정적인 파일들을 보관하는 저장소라고 생각하면 된다.

#### 2. src 폴더

![](https://velog.velcdn.com/images/leekh010502/post/460421f1-6bdf-45c6-9d1f-76d53c46e397/image.png)

jsx라는 확장자는 리액트에서 사용하는 확장자이다.

assets 폴더도 public과 동일하게 정적 파일들을 보관하는 곳이다.

하지만 public과 assets 방식의 차이가 있는데 나중에 실습을 하면서 차차 알아가는걸로 하겠습니다.

#### 3. eslint.cjs 파일

ESLint 설정 파일이다.
ESLint는 개발자들 사이에 코드 스타일을 통일하는 데에 도움을 주는 도구이다.

#### 4. .gitignore

github에 업로드할 때 올리면 안되는 파일들을 명시하는 파일이다.

#### 5. index.html

React APP의 기본 틀 역할을 하는 HTML 코드가 담긴 파일이다.

src/App.jsx를 열어보면 JavaScript 함수로 되어 있는 컴포넌트를 index.html에 나중에 DOM을 수정해서 추가하는 방식으로 동작한다.

#### 6. vite.config.js

React APP을 만들 때 사용한 vite라는 도구의 옵션을 설정하는 파일이다.

## React APP 실행하기

![](https://velog.velcdn.com/images/leekh010502/post/ab05f410-0a55-462d-9bad-91e6bf0284b1/image.png)

package.json에 React APP을 실행시킬 수 있는 4가지의 명령어가 미리 설정되어 있다.

dev라는 명령어는 React APP을 개발용으로 실행시키는 명령어이다.

다음과 같이 명령어를 입력하면 React APP을 실행시켜볼수 있다.

```bash
npm run dev
```

![](https://velog.velcdn.com/images/leekh010502/post/6b8d5407-c6a0-41ff-acc0-8213873d2a89/image.png)

![](https://velog.velcdn.com/images/leekh010502/post/2b8eb1b4-3a02-41d8-aa3a-da6ab9b844b3/image.png)

실행 시키면 접속할수 있는 주소가 나오고 h+enter를 하게되면 헬프 명령어들이 나타난다.
`r + enter` : 서버를 다시 실행한다.
`u + enter` : 서버의 주소를 다시 보여준다.
`o + enter` : 브라우저에서 자동으로 이 주소에 접근하게 해준다
`c + enter` : 콘솔을 정리해준다.
`q + enter` : 종료된다.

---

# React APP 구동 원리 살펴보기

![](https://velog.velcdn.com/images/leekh010502/post/bef264c5-1927-4c2c-a079-f85a925afe55/image.png)

vite를 통해 생성한 React APP에는 웹서버가 내장되어 있고 가동하기 위해 `npm run dev`를 사용한다.
이를 통해 localhost:5173 주소를 통해 React APP에 접속할 수 있던것이다.

## localhost라는 주소는 어떤 뜻일까??

localhost는 지금 쓰고 있는 그 컴퓨터의 주소를 의미한다.
![](https://velog.velcdn.com/images/leekh010502/post/0cb4edea-50df-46ab-a33a-09a6ba729b96/image.png)

웹브라우저에서 localhost:5173이라는 주소로 접속한다는 것은 내 컴퓨터에서 실행되고 있는 React 웹 서버에 접속 요청을 보낸다라고 이해하면 된다.

localhost라는 주소는 자기 자신의 컴퓨터를 가리키는 주소이기 때문에 남의 컴퓨터에서는 접속할 수가 없다.

localhost 뒤에 콜론(`:`)과 함께 나오는 5173이라는 번호는 포트번호라는 것이다.

포트번호는 하나의 컴퓨터 내에서 여러 대의 서버를 동작시키기 위해서 필요한 주소 체계이다.

### 포트번호가 필요한 이유

하나의 컴퓨터에서 여러개의 웹서버가 동작하고 있다고 가정해보자
![](https://velog.velcdn.com/images/leekh010502/post/0055b826-04c7-4069-ab81-9cfe44027938/image.png)

만약 브라우저에서 이렇게 localhost라는 주소로 내 pc에 요청을 보내게 되면 어떠한 서버가 요청에 응답해야 되는지 굉장히 모호하기 때문에 이러한 상황을 막기 위해 컴퓨터는 모든 프로그램이 실행될 때마다 자동으로 고유한 포트번호를 붙여준다.

이러면 localhost:5173으로 요청이 들어오면 React Server가 localhost:3344로 요청이 들어오면 되면 PHP Server가 응답하게 된다.

## React APP의 렌더링 원리에 대해 알아보자

우선 React APP에 접속을 해보자

```bash
npm run dev
```

![](https://velog.velcdn.com/images/leekh010502/post/6b8d5407-c6a0-41ff-acc0-8213873d2a89/image.png)

localhost:5173으로 React APP에 접속하게 되면 index.html이라는 파일을 브라우저에게 보내주게 된다.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>kyulee-react-codes</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

index.html 파일을 확인해보면 body 태그 안에 텅텅 비어있는데 브라우저로 접속한 React APP을 확인하면 다양한 이미지 버튼 등이 존재한다.

이러한 요소들은 index.html에서 스크립트 태그로 불러오고 있는 src/main.jsx라는 자바스크립트 파일이 실행되었을 때 동적으로 추가되는 요소들이다.

### main.jsx 파일 분석

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

ReactDOM, createRoot,render등 React가 제공하는 내부 메서드를 이용해서 뭔가를 하고 있는것을 볼 수 있다.

ReactDOM의 createRoot라는 메서드는 인수로 전달받은 HTML 요소를 리액트의 루트로, 즉 뿌리로 만들어주는 역할을 한다.

인수로 전달하고 있는 요소는 `document.getElementById('root')`라고 해서 이 index.html파일 안에 있는 root를 아이디로 갖는 요소를 불러오고 있는 걸 확인할 수 있다.

그래서 이 요소가 지금 main.jsx에 이렇게 인수로써 전달이 되고 있는 것이다. 그리고 React는 이 요소를 React의 루트로 변환해주고 있다.

그리고 난 다음에 render라는 메서드를 호출해서 이렇게 만든 루트 아래에 <App />이라는 거를 렌더링하겠다 라고 설정하고 있다.

html 태그를 쓰듯이 <App />이라고 써 놓은 거는 컴퍼넌트를 렌더링하는 문법이다. -> <App /> 컴퍼넌트를 렌더링 하고 있다.

`import App from './App.jsx'` ES 모듈 시스템의 문법으로 App.jsx를 임포트 하고 있다.

### App.jsx 분석

```jsx
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
```

`function App()`이라고 해서 App이라는 함수가 있다. 이 함수는 HTML 태그들을 리턴하고 있다.

함수가 HTML 태그들을 리턴하고 있으면 이 함수를 컴퍼넌트라고 부른다. -> 앱 컴퍼넌트라고 부른다.

App 함수가 리턴하고 있는 HTML 태그들이 main.jsx에 불러와져서 렌더 메서드를 통해서 렌더링 되고 있다.
