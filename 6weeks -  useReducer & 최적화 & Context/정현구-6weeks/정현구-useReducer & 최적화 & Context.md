# **[JavaScript]** 6주차 useReducer & 최적화 & Context (정현구)

## useReducer

- 컴포넌트 내부에 새로운 state를 생성하는 React Hook
- 모든 useState는 useReducer로 대체 가능하다.

![](https://velog.velcdn.com/images/hyunguu/post/19585c86-16db-4ec3-b9cb-c581b694dfe5/image.png)

![](https://velog.velcdn.com/images/hyunguu/post/96239709-7b7c-49ec-b756-360c3c4c4656/image.png)

- State의 값이 복잡해지거나 다양한 상태 변화를 제공할 경우 컴포넌트 안 코드가 길고 복잡해짐

- react의 주된 목적은 UI를 렌더링하는 것
  - ui를 렌더링하는 코드보다 상태를 관리하는 코드가 많아지면 한눈에 파악하기 어려워짐
  - 상태를 관리하는 코드가 복잡해지고 많아진다면 외부의 별도 함수로서 분리해야 함

> 그리하여 사용하는 것이 UseReducer (컴포넌트 외부의 상태 관리 코드를 분리시키는 역할)

### 주요 구성 요소

1. Reducer

```javascript
function reducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    default:
      return state;
  }
}
```

- 상태를 실제로 업데이트
- 컴포넌트 외부에 정의하여 UI로직과 상태관리 로직을 분리하기 좋음. 현재의 상태(state)와 어떤 행동을 할 지 담긴 정보(action)를 받아 새로운 상태로 반환

2. dispatch

```javascript
const [state, dispatch] = useReducer(reducer, 0);

const onClickMinus = () => {
  dispatch({
    type: "DECREASE",
    data: 1,
  });
};
```

- 상태 업데이트를 요청하는 함수
- 호출 시 `액션 객체`를 인자로 전달하며, 이 함수가 실행되면 리액트는 내부적으로 reducer를 호출하여 상태를 변경하고 리렌더링을 수행합니다.

3. action

- 어떤 변화가 일어날지 정의한 자바스크립트 객체
- 반드시 어떤 종류의 변화인지 나타내는 type 속성을 포함해야 하며, 변경에 필요한 데이터를 선택적으로 포함

4. 실행 흐름
   1. 클릭: 사용자가 + 버튼을 누름
   2. Dispatch 호출: onClickPlus 함수가 실행되며 dispatch를 통해 액션 객체({ type: "INCREASE", data: 1 })를 보냄
   3. Reducer 실행: React는 현재 상태(0)와 받은 액션 객체를 가지고 reducer 함수를 실행
   4. 상태 업데이트: reducer가 0 + 1인 1을 반환하면, React가 화면의 state를 1로 업데이트하고 컴포넌트를 다시 그림

## 최적화 (Optimization)

웹 서비스의 성능을 개선하는 모든 행위를 의미하며, 리액트에서는 불필요한 연산이나 리렌더링을 방지하는 것이 핵심

#### 일반적인 최적화

- 서버 응답 속도 개선, 이미지/폰트 등 정적 파일 로딩 개선, 네트워크 요청 최소화 등.

#### 리액트 내부의 최적화

1.  불필요한 연산 방지: 리렌더링 시 무거운 계산 반복 줄이기.
2.  불필요한 함수 재생성 방지: 매번 함수가 새로 만들어지는 것 방지.
3.  불필요한 리렌더링 방지: 부모가 변해도 자식이 변할 필요가 없다면 렌더링 생략.

### 1. useMemo: 불필요한 연산 방지

연산 결과값을 메모리에 저장해두고 재사용하는 Hook

- 동작 방식: 의존성 배열(deps)의 값이 변경되지 않으면, 이전에 계산한 값을 그대로 가져옴
- 주요 용도: TODO 리스트의 통계 계산처럼 리렌더링마다 수행하기엔 부담스러운 무거운 연산에 사용
- 의존성 배열 기준
  - `[]`: 마운트 시 한 번만 연산
  - `[value]`: value가 변경될 때만 다시 연산

### 2. React.Memo: 컴포넌트 재사용

React.memo는 컴포넌트를 인자로 받아 최적화된 컴포넌트로 반환하는 **고차 컴포넌트(HOC)**

- 핵심원리: 전달받은 props가 변경되지 않으면 리렌더링을 건너뜀
- 얕은 비교(Shallow Compare)의 한계: 기본적으로 props를 얕게 비교하므로, 객체·배열·함수처럼 참조값이 바뀌는 데이터는 내용이 같아도 '변경됨'으로 인식
- 커스텀 비교 함수: 두 번째 인자로 비교 함수를 전달해 수동으로 리렌더링 여부를 결정할 수 있음

```javascript
export default memo(Component, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id; // true면 리렌더링 방지
});
```

### 3. useCallback: 함수의 재사용 (재생성 방지)

리렌더링 시 컴포넌트 내부 함수가 매번 새로 생성되는 것을 방지하는 훅

-필요성: 함수가 새로 생성되면 참조값이 바뀌므로, 이를 props로 받는 자식 컴포넌트는 React.memo를 써도 리렌더링이 발생하게 됨.

- 해결책: useCallback으로 감싸면 의존성 배열이 변하지 않는 한 동일한 함수 참조값을 유지

## React Context

Props Drilling(데이터가 여러 컴포넌트를 거쳐 전달되는 현상)을 해결하기 위한 리액트 내장 상태 관리 도구

### 1. 핵심 개념 및 흐름

1. createContext: 데이터를 담을 저장소(Context)를 생성

2. Provider: 생성한 Context를 하위 컴포넌트에 공급합니다. value 속성에 담긴 데이터를 자식들이 자유롭게 꺼내 쓸 수 있음

3. useContext: Context 저장소에서 필요한 데이터를 꺼내 사용하는 Hook

### 2. Context 사용 시의 성능 이슈

- 문제점: Provider의 value에 객체({ todos, onCreate, ... })를 그대로 넣으면, todos가 바뀔 때마다 객체가 새로 생성

- 결과: 이로 인해 useContext를 사용하는 모든 하위 컴포넌트가 강제로 리렌더링됩니다. 심지어 React.memo를 적용한 컴포넌트도 Context 값이 바뀌면 리렌더링을 피할 수 없음.

### 3. 해결책: Context 분리 전략 (State & Dispatch)

변하는 값(state)과 변하지 않는 함수(dispatch)를 별도의 Context로 분리하여 관리

- TodoStateContext: 변경이 잦은 todos 상태값만 전달함
- TodoDispatchContext: useMemo로 감싸 참조값이 고정된 onCreate, onUpdate, onDelete 함수들만 전달

```javascript
// 1. 두 개의 Context 생성
export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);

  // 2. 함수들은 재생성되지 않도록 useMemo로 최적화
  const memoizedDispatch = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, []);

  return (
    <div className="App">
      <Header />
      {/* 3. 변화가 잦은 상태 Context */}
      <TodoStateContext.Provider value={todos}>
        {/* 4. 변화가 없는 함수(Dispatch) Context */}
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}
```

### 4. 각 컴포넌트에서의 사용

- List 컴포넌트: const todos = useContext(TodoStateContext); (데이터가 필요할 때)

- Editor 컴포넌트: const { onCreate } = useContext(TodoDispatchContext); (추가 기능만 필요할 때)

이렇게 분리하면 todos가 추가되더라도 TodoDispatchContext를 사용하는 Editor 컴포넌트는 리렌더링되지 않아 최적화된 성능을 유지할 수 있음
