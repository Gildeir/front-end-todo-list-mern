import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';

function TodoForm() {

  const link = 'http://localhost:5000/todo';

  const [todos, setTodos] = useState([]);

  useEffect(() => {
  getTodos()
  
},[])

const getTodos = async () => {
  const data = await axios.get(link);
  setTodos(data.data.todo)
  console.log(todos)
  console.log(data)
  }

  const renderTodos = () => {
    return todos.map((todo, index) => {
      return <TodoItem key={index} todoFromForm={todo} />
  })
}


    return (
      <div>
      { renderTodos() }
      </div>
    )
}

export default TodoForm