import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';
import styled from 'styled-components';

function TodoForm() {

  const link = 'http://localhost:5000/todo';

  const [todos, setTodos] = useState([]);
  const [todoName, setTodoName] = useState('')
  const [todoComment, setTodoComment] = useState('')

  useEffect(() => {
  getTodos()
  
  },[])

  const getTodos = async () => {
    const data = await axios.get(link);
    setTodos(data.data.todo)
    console.log(todos)
    console.log(data)
  };

  const addTodos = async (e) => {
    e.preventDefault()
    
    const todoData = {
      name: todoName ? todoName : undefined,
      comment: todoComment ? todoComment : undefined,
    }
    
    await axios.post(link, todoData)
    
    setTodoName('');
    setTodoComment('');
    getTodos()


  }

  const renderTodos = () => {
    return todos.map((todo, index) => {
      return <TodoItem key={index} todoFromForm={todo} />
  })
};
  const insertTodos = () => {
    return (
      <div className="text-editor">
        <form onSubmit={ addTodos }>
          <div className="input-control">
            <label htmlFor="name"></label>
            <input 
              value={ todoName }
              onChange={(e)=> setTodoName(e.target.value)}
              required
              autocomplete="off"  type="text" id="name"
              placeholder="Enter the name"></input>
          </div>
          <div className="input-control">
            <label htmlFor="comment"></label>
            <textarea
              required
              value={ todoComment }
              onChange={(e)=> setTodoComment(e.target.value)}
              name="" id="comment" cols="30" rows="5" 
              placeholder="Task name"></textarea>
          </div>
          <button className="submit-btn">Add Item</button>
        </form>
      </div>
    )}

      return (
        <TodoFormStyled>
            {insertTodos()}
            { renderTodos() } 
        </TodoFormStyled>
      )
}

const TodoFormStyled = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 80%;
  .text-editor{
    width: 60%;
    form {
      .submit-btn {
        padding: .5rem 1rem;
        cursor: pointer;
        background-color: #6bbe92;
        border: none;
        border-radius: 34px;
        color: white;
        margin-bottom: 20px;
      }
    }
  }
`;

export default TodoForm;