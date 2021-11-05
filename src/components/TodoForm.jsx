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




  const insertTodos = () => {
    return (
      <div className="Texet-editor">
        <form>
          <div className="input-control">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter the name"></input>
          </div>
          <div className="input-control">
            <label htmlFor="comment">Comment</label>
            <textarea name="" id="comment" cols="30" rows="5"></textarea>
          </div>
          <button className="submit-btn">Add Item</button>
        </form>
      </div>
    )}
  return (
    <div>
        {insertTodos()}
        { renderTodos() } 
    </div>
  )
}

export default TodoForm;