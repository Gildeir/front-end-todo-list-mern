import React from 'react'

function TodoItem({ todoFromForm }) {
  return (
    <div>
      <h3>{ todoFromForm.name}</h3>
      <p>{ todoFromForm.comment}</p>
    </div>
  )

}
export default TodoItem;
