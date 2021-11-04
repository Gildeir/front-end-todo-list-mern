import React from 'react'

function TodoItem({ todoFromForm }) {
  return (
    <div>
      <h1>{ todoFromForm.comment}</h1>
    </div>
  )

}
export default TodoItem;
