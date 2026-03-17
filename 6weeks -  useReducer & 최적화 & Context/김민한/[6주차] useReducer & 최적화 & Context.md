# useReducer
![](https://velog.velcdn.com/images/minari0v0/post/d5978c1c-b63e-4f70-ae92-161cbd34ad40/image.png)

- 컴포넌트 내부에 새로운 State를 생성하는 리액트 훅
  - 이론적으로 모든 useState는 useReducer로 대체 가능
  - 상태 관리 코드를 컴포넌트 외부로 분리할 수 있음
  
## reducer 함수

- state를 실제로 변경하는 함수
- 현재 state와 action을 전달받아 **새로운 state를 반환**

```js
function reducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return state + action.data
    case "DECREASE":
      return state - action.data
    default:
      return state
  }
}
```

| 인자 | 설명 |
|---|---|
| state | 현재 상태 |
| action | 어떤 상태 변화를 할지에 대한 정보 |

<br>

## dispatch

- `dispatch`는 reducer를 실행시키는 함수
- 상태를 어떻게 변경할지 **action 객체**를 전달

```js
dispatch({
  type: "INCREASE",
  data: 1
})
```

| 속성 | 설명 |
|---|---|
| type | 어떤 동작인지 구분 |
| data | 상태 변경에 필요한 값 |

<br>

## useReducer 사용 형태

```js
const [state, dispatch] = useReducer(reducer, initialState)
```

| 요소 | 설명 |
|---|---|
| state | 현재 상태 |
| dispatch | 상태 변경 요청 |
| reducer | 상태 변경 로직 |
| initialState | 초기 상태 |

<br>

## 동작 흐름

1. `dispatch` 실행  
2. `reducer` 호출  
3. 새로운 state 반환  
4. 컴포넌트 리렌더링

<br>

## useState와 차이

| useState | useReducer |
|---|---|
| 간단한 상태 관리 | 복잡한 상태 관리 |
| 상태 로직이 컴포넌트 내부 | 상태 로직을 외부로 분리 가능 |
| 직관적인 사용 | 구조적으로 상태 관리 가능 |

<br>

상태 변화 로직이 많아질수록 `useReducer`를 사용하면 상태 관리를 더 명확하게 할 수 있음

---

# 최적화
- 웹 서비스의 성능을 개선하는 모든 행위를 일컫음
  - 서버 응답속도 개선
  - 이미지, 폰트, 코드 파일등의 정적 파일 로딩 개선
  - 불필요한 네트워크 요청 줄임
  - 리액트 컴포넌트 내부 불필요한 [연산, 함수 재생성, 리렌더링] 방지
  
---
  
## useMemo

- '메모이제이션' 기법을 기반으로 **연산 결과를 저장**하는 리액트 훅
- 의존성 값이 변경되지 않으면 **이전에 계산한 값을 재사용**

<br>

예를 들어 TODO 리스트의 통계를 계산하는 함수가 있다고 가정

```js
const getAnalyzedData = () => {
  const totalCount = todos.length
  const doneCount = todos.filter((todo) => todo.isDone).length
  const notDoneCount = totalCount - doneCount

  return { totalCount, doneCount, notDoneCount }
}

const { totalCount, doneCount, notDoneCount } = getAnalyzedData()
```

이 경우 **검색어를 입력할 때마다 컴포넌트가 리렌더링되면서  
`getAnalyzedData` 함수도 매번 다시 실행됨**

하지만 `todos`가 변경되지 않았다면 이 연산은 다시 실행할 필요가 없음

<br>

### useMemo 적용

```js
const { totalCount, doneCount, notDoneCount } =
  useMemo(() => {
    const totalCount = todos.length
    const doneCount = todos.filter((todo) => todo.isDone).length
    const notDoneCount = totalCount - doneCount

    return { totalCount, doneCount, notDoneCount }
  }, [todos])
```

- `todos`가 변경될 때만 연산 실행
- 그 외 리렌더링에서는 **이전에 계산된 값을 재사용**

<br>

### Dependency Array

- `useMemo` 두 번째 인자로 전달하는 배열
- 배열에 포함된 값이 변경될 때만 연산이 다시 실행됨

| 형태 | 실행 시점 |
|---|---|
| 없음 | 렌더링마다 실행 |
| [] | Mount 시 한 번 |
| [value] | value 변경 시 실행 |


---

## React.memo

- 컴포넌트의 **불필요한 리렌더링을 방지**하는 기능
- 전달받은 **props가 변경되지 않으면 리렌더링을 생략**

<br>

예를 들어 TODO 리스트에서 체크박스를 클릭하면 상태가 변경되면서  
부모 컴포넌트가 리렌더링된다.

이때 부모가 리렌더링되면 **자식 컴포넌트들도 함께 리렌더링됨**

하지만 자식 컴포넌트의 props가 변경되지 않았다면  
이 리렌더링은 불필요한 작업이 될 수 있다.

&rarr;`React.memo`로 리렌더링 방지 가능

```js
import { memo } from "react"

export default memo(Component)
```

<br>

### 얕은 비교 (Shallow Compare)

- `React.memo`는 props를 **얕은 비교**로 판단

  - 원시값 → 값 비교
  - 객체 / 배열 / 함수 → **참조값 비교**

이 때문에 **함수 props가 전달되는 경우 문제가 발생할 수 있음**

컴포넌트가 리렌더링될 때마다 함수가 **새롭게 생성되기 때문에  
참조값이 계속 변경되는 것으로 판단됨**

&rarr; `React.memo`를 사용해도 리렌더링이 발생할 수 있음

<br>

### Custom Comparison

`memo`는 두 번째 인자로 비교 함수를 전달할 수 있다.

-  **props 변경 여부**를 직접 판단 가능

```js
export default memo(Component, (prevProps, nextProps) => {
  // true  → props 변경 없음 (리렌더링 방지)
  // false → props 변경 있음 (리렌더링 발생)

  if (prevProps.id !== nextProps.id) return false
  if (prevProps.isDone !== nextProps.isDone) return false
  if (prevProps.content !== nextProps.content) return false
  if (prevProps.date !== nextProps.date) return false

  return true
})
```

<br>

### 고차 컴포넌트 (HOC)

- `memo` == 고차 컴포넌트
  - 컴포넌트를 인자로 받아
  - 새로운 컴포넌트를 반환하는 함수


- 추가적인 기능을 제공하는 패턴

---

## useCallback

- 함수의 **재생성을 방지**하는 리액트 훅
- 의존성 값이 변경되지 않으면 **기존 함수를 재사용**

<br>

컴포넌트가 리렌더링되면 내부에 선언된 함수도  
**매번 새롭게 생성됨**

이때 함수가 자식 컴포넌트에 props로 전달되면  
**참조값이 변경된 것으로 판단됨**

&rarr; `React.memo`를 사용해도 리렌더링이 발생할 수 있음

<br>

### useCallback 적용

```js
const onCreate = useCallback((content) => {
  dispatch({
    type: "CREATE",
    data: {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    }
  })
}, [])
```

- 의존성 값이 변경되지 않으면 **같은 함수 재사용**
- 함수 props의 **참조값 유지**

&rarr; `React.memo`와 함께 사용하면 **불필요한 리렌더링 방지 가능**

---

## 최적화 기준

### 언제 최적화를 해야 할까

최적화는 **기능 구현 이후에 진행하는 것이 일반적**

너무 이른 시점에 적용하면

- 코드 복잡도 증가
- 기능 수정 시 **최적화가 깨질 가능성 존재**

그래서 보통

> 기능 구현 → 테스트 → 최적화

순서로 진행

<br>

### 어떤 것을 최적화해야 할까

모든 코드에 최적화를 적용하는 것은 권장되지 않음

- 연산 비용이 큰 계산
- 렌더링 개수가 많아질 수 있는 컴포넌트
- 여러 함수가 props로 전달되는 컴포넌트

이런 경우에 **선택적**으로 적용

<br>

반대로 `Header`와 같은 단순한 컴포넌트는  
리렌더링이 발생해도 비용이 매우 작기 때문에  
굳이 최적화를 적용하지 않아도 됨

---

# Context

- 컴포넌트 간 데이터를 전달하는 리액트 기능
- 여러 단계의 컴포넌트를 거쳐 `props`를 전달해야 하는  
  **Props Drilling 문제를 해결하기 위해 사용**

<br>

예를 들어 다음과 같은 구조가 있다고 가정한다면,

```
App
 └ Header
     └ Navigation
         └ Profile
```

`Profile` 컴포넌트에서 필요한 데이터를  
`App → Header → Navigation → Profile` 순서로 계속 전달해야 한다.

이처럼 **중간 컴포넌트들이 사용하지 않는 props를 전달만 하는 문제**를  
**Props Drilling**이라고 한다.

→ `Context`를 사용하면 **중간 컴포넌트를 거치지 않고 데이터 전달 가능**함

---

## Context 생성

```js
import { createContext } from "react"

export const TodoContext = createContext()
```

- `createContext()`로 Context 객체 생성
- 이 객체를 통해 데이터를 공유할 수 있음

---

## Provider

Context 값을 **하위 컴포넌트에 전달하는 컴포넌트**

```js
<TodoContext.Provider value={value}>
  <App />
</TodoContext.Provider>
```

| 속성 | 설명 |
|---|---|
| Provider | Context 값을 공급 |
| value | 전달할 데이터 |

Provider로 감싸진 컴포넌트들은  
해당 Context 값을 사용할 수 있다.

---

## useContext

Context 값을 사용하는 리액트 훅

```js
import { useContext } from "react"
import { TodoContext } from "./TodoContext"

const value = useContext(TodoContext)
```

- 가장 가까운 `Provider`의 `value`를 가져옴
- `props` 없이 데이터 사용 가능

---

## Context 사용 흐름

1. `createContext()`로 Context 생성  
2. `Provider`로 컴포넌트 감싸기  
3. `useContext`로 값 사용

---

## Context 사용 시 알아야 할 점

### Context 값이 변경되면 리렌더링 발생

`Provider`의 `value`가 변경되면  
해당 Context를 사용하는 컴포넌트들이 **모두 리렌더링된다**

```js
<TodoContext.Provider value={{ todos, onCreate }}>
```

이 경우 컴포넌트가 리렌더링될 때마다  
**객체가 새롭게 생성**됨

→ Context 값이 변경된 것으로 판단

→ `useContext`를 사용하는 컴포넌트 **모두 리렌더링**

<br>

### React.memo로 막을 수 없음

`React.memo`는 **props만 비교**한다.

하지만 Context 값이 변경되면  
`useContext`를 사용하는 컴포넌트는 **리렌더링이 발생**

---

## Context 최적화 방법

Context를 **두 개로 분리**하여 해결 가능

```js
const TodoStateContext = createContext()
const TodoDispatchContext = createContext()
```

| Context | 역할 |
|---|---|
| State Context | 변경되는 값 |
| Dispatch Context | 변경되지 않는 함수 |

이렇게 분리하면

- **state 사용하는 컴포넌트만 리렌더링**
- **dispatch만 사용하는 컴포넌트는 리렌더링 방지**

---

 **정리**

- Context는 **Props Drilling 문제를 해결하기 위한 기능**
- `Provider`의 `value`가 변경되면 **모든 소비 컴포넌트 리렌더링**
- `React.memo`로 막을 수 없음
- 필요하면 **Context 분리로 최적화 가능**