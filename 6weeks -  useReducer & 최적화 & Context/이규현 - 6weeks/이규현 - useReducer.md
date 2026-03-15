# useReducer

## useReducer란?

- 컴포넌트 내부에 새로운 State를 생성하는 React Hook이다.
- 모든 useState는 useReducer로 대체 가능하다.
- useState와 거의 비슷한 기능을 하지만 **상태 관리 코드를 컴포넌트 외부로 분리할 수 있다**는 핵심적인 차이점이 있다.

## TodoList 프로젝트에 적용해보기

지난시간에 진행한 프로젝트에서 useState 버전을useReducer를 사용하도록 리팩토링한 하였다. 기능은 완전히 동일하고, 상태 관리 방식만 바뀌었다.
[👉🏻 TodoList 프로젝트 둘러보기] (https://velog.io/@leekh010502/React-07.-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-TodoList)

```jsx
import "./App.css";
import { useRef, useReducer } from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";

const mokData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "Node.js 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "사이드 프로젝트 기획안 작성하기",
    date: new Date().getTime(),
  },
];

function reducer(State, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...State];
    case "UPDATE":
      return State.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item,
      );
    case "DELETE":
      return State.filter((item) => item.id !== action.targetId);
    default:
      return State;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, mokData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  };

  const onUpdate = (targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  };

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
```

### 1. reducer 함수 추가

기존에는 `onCreate`, `onUpdate`, `onDelete` 각각의 함수 안에 상태 변경 로직(`setTodos(...)`)이 직접 작성되어 있었다. useReducer로 바꾸면서 그 로직들을 컴포넌트 외부의 `reducer` 함수 하나로 모두 꺼냈다.
`reducer`는 현재 상태(`State`)와 액션(`action`)을 받아서 `action.type`에 따라 새로운 상태를 반환한다. CREATE는 새 항목을 앞에 추가하고, UPDATE는 해당 id의 isDone을 토글하고, DELETE는 해당 id를 배열에서 제거한다.

### 각 함수 내부 변경

`onCreate`, `onUpdate`, `onDelete` 함수가 여전히 존재하지만, 내부 로직이 완전히 달라졌다. 기존에는 각 함수가 `setTodos`를 호출하면서 직접 배열을 가공했지만, 이제는 `dispatch`에 `type`과 필요한 데이터만 넘기는 것으로 단순해졌다. 실제 상태 변경 로직은 위에서 만든 `reducer`가 담당한다.
