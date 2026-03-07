import { useState, useRef } from 'react'
import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "리액트 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "잡코리아 뒤적이기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "알고리즘 챌린지 하기",
    date: new Date().getTime(),
  },

]

function App() {

  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    }

    setTodos([newTodo, ...todos]);
  }

  const onUpdate = (targetId) => {
    //todos State의 값들 중에
    // targetId와 일치하는 id를 갖는 todo item의 isDone 변경
    setTodos(todos.map((todo) =>
      todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo))
  }

  const onDelete = (targetId) => {
    // todos 배열에서 targetID와 일치하는 id를 갖는 todo item 제거
    setTodos(todos.filter((todo) => todo.id !== targetId));
  }

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>

  )
}

export default App
