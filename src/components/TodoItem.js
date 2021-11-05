import React from 'react'
import styled from 'styled-components';
import document from '../img/document.png';
import edit from '../img/edit.png';
import deleteIcon from '../img/deleteIcon.png';
import axios from 'axios';

function TodoItem({ todoFromForm, getTodos, editTodos }) {


    const deleteTodo = async () => {
      await axios.delete(`http://localhost:5000/todo/${todoFromForm._id}`);
      getTodos();
    }
  return (
    < TodoItemStyled >
      <div className="icon-document">
        <img src={document} alt="document icon"></img>
      </div>
      <div className="text-con">
       <div className="left-text">
         <h3>Task</h3>
         <p>{ todoFromForm.name}</p>
       </div>
       <div className="rigth-text">
         <h3>Status</h3>
         <p>{ todoFromForm.comment}</p>
       </div>
      </div>
      <div className="edit">
        <img src={ edit } alt="edit icon" onClick={()=> editTodos(todoFromForm)}></img>
      </div>
      <div className="delete" onClick={deleteTodo}>
        <img src={ deleteIcon } alt="document icon"></img>
      </div>
    </TodoItemStyled>
  )
}

const TodoItemStyled = styled.div`
  display: flex;
  background-color: #4F6877;
  padding: 1rem;
  margin: .8rem 0;
  width: 100%;
  border-radius: 30px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
  
  h3 {
    color: #6bbe92;
    margin-bottom: 10px;
  }
  p {
    margin-bottom: 10px;
    color: white;
    
  }
  .icon-document, .edit, .delete , img{
    height: 30px;
    margin-bottom: 10px;
  } 
  .text-con {
    flex: 3;
    display: grid;
    grid-template-columns: inherit(2, 1fr);
    .right-text {
      flex: 3;
      background-color: white;
    }
  }

  .edit{
    margin-left: 100px;
  }

  .icon-document {
    margin-right: 15px;
  }
`;
export default TodoItem;
