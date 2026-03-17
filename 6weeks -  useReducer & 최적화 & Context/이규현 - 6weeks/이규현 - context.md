# Context

## Context란?

컴포넌트 간의 데이터를 전달하는 또 다른 방법이다.
기존의 Props가 가지고 있던 단점을 해결할 수 있다.

### Props Drilling

Props는 **부모 -> 자식**으로만 데이터를 전달할 수 있었다.
![](https://velog.velcdn.com/images/leekh010502/post/b31279a8-ffff-4aa3-a331-dff4f330259d/image.png)

부모 -> 자식으로만 데이터를 전달할 수 있기때문에
데이터를 2중으로 전달을 해야했다.

![](https://velog.velcdn.com/images/leekh010502/post/96925cc3-2035-44be-a01a-4704f0d78a2e/image.png)

여러개의 계층구조가 생기게되면 위에 사진과 같이 코드 하나를 수정하면 전부 찾아가서 수정을 해야한다.
이를 props가 드릴처럼 땅을 파고 내려가는 것 같다라고 해서 Props Drilling이라고 한다.

Context를 사용하면 아래 이미지와 같이 다이렉트로 필요한 데이터를 전달할 수 있다.

![](https://velog.velcdn.com/images/leekh010502/post/97e5ea13-3cd1-40c9-ba6e-490f77017ea3/image.png)

![](https://velog.velcdn.com/images/leekh010502/post/0307c0f3-5c20-403d-85f0-a9db96d1d36b/image.png)

## Context 적용하기

### App.jsx

```jsx
import "./App.css";
import { useRef, useReducer, useCallback, createContext, useMemo } from "react";
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

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item,
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  const [todos, dispatch] = useReducer(reducer, mokData);
  const idRef = useRef(3);

  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, []);

  const memoizedDispatch = useMemo(() => {
    return { onCreate, onDelete, onUpdate };
  }, []);

  return (
    <div className="App">
      <Header />
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
```

`TodoStateContext`와 `TodoDispatchContext` 두 개의 Context를 분리해서 만들었다. 상태와 함수를 하나로 합치면 함수만 필요한 컴포넌트도 `todos`가 바뀔 때마다 같이 리렌더링되기 때문에 분리한 것이다.
`onCreate`, `onUpdate`, `onDelete` 세 함수를 `useMemo`로 하나의 객체로 묶어서 `TodoDispatchContext`에 전달했다. 의존성 배열이 `[]`이라 앱 최초 마운트 시 딱 한 번만 객체가 생성되고, 이후 `todos`가 바뀌어도 이 객체의 참조는 유지된다.

### Editor.jsx

```jsx
import "./Editor.css";
import { useState, useRef, useContext } from "react";
import { TodoDispatchContext } from "../App";

const Editor = () => {
  const { onCreate } = useContext(TodoDispatchContext);
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const onKeydown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };
  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };
  return (
    <div className="Editor">
      <input
        ref={contentRef}
        value={content}
        onKeyDown={onKeydown}
        onChange={onChangeContent}
        placeholder="새로운 Todo..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};
export default Editor;
```

`useContext(TodoDispatchContext)`로 `onCreate`만 가져온다. `TodoStateContext`를 구독하지 않기 때문에 `todos`가 변경되어도 이 컴포넌트는 리렌더링되지 않는다.

### List.jsx

```jsx
import "./List.css";
import TodoItem from "./TodoItem";
import { useState, useMemo, useContext } from "react";
import { TodoStateContext } from "../App";

const List = () => {
  const todos = useContext(TodoStateContext);
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredDate = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase()),
    );
  };
  const filteredTodos = getFilteredDate();

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);

  return (
    <div className="List">
      <h4>Todo List 📋</h4>
      <div>total: {totalCount}</div>
      <div>done:{doneCount}</div>
      <div>notDone: {notDoneCount}</div>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} />;
        })}
      </div>
    </div>
  );
};
export default List;
```

통계 계산(`totalCount`, `doneCount`, `notDoneCount`)을 `useMemo`로 감쌌다. `todos`가 바뀔 때만 다시 계산하고, 검색어가 바뀌어서 리렌더링될 때는 이전 계산값을 재사용한다.

### TodoItem.jsx

```jsx
import "./TodoItem.css";
import { memo, useContext } from "react";
import { TodoDispatchContext } from "../App";

const TodoItem = ({ id, isDone, content, date }) => {
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);

  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };
  return (
    <div className="TodoItem">
      <input
        onChange={onChangeCheckbox}
        readOnly
        checked={isDone}
        type="checkbox"
      />
      <div className="content">{content}</div>
      <div classame="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

export default memo(TodoItem);
```

`memo`로 감싸서 부모인 `List`가 리렌더링되어도 props가 바뀐 항목만 리렌더링되도록 했다. `useContext(TodoDispatchContext)`로 `onUpdate`, `onDelete`를 가져오는데, 이 `Context`의 참조가 변하지 않기 때문에 `memo`의 최적화가 깨지지 않는다.
