import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import TodoList from './components/Todolist';
import Form from './components/Form';
import Snapshot from './components/Snapshot';
import Calc from './components/Calculator';
import './App.css';
import ShoppingCart from './components/ShoppingCart';

function App() {
  const initialState = JSON.parse(localStorage.getItem("todos")) || []
  const [input, setInput] = useState("")
  const [todos, setTodos] = useState(initialState)
  const [editTodo, setEditTodo] = useState(null)

useEffect (()=>{
  localStorage.setItem("todos", JSON.stringify(todos))
}, [todos])

  return (
    <div>
      <Header />
      <Form classname="todoinput" input={input} setInput={setInput} todos={todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo} />
      <TodoList todos={todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo} />
      <Calc/>
      <Snapshot/>
      <ShoppingCart/>
    </div>
    
  )
}

export default App;
