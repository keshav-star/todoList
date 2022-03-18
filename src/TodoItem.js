import React from 'react'

export default function TodoItem({todo,onDelete}) {
    
  return (
    <div >
        <h2 >{todo.title}</h2>
        <h4>{todo.Desc}</h4>
        <button className='btn btn-danger' onClick={()=>{onDelete(todo)}}>Remove</button>
    </div>
  )
}
