import React from 'react'
import TodoItem from './TodoItem'


export const _Todos = (props) => {
   
  return (
    <div className='container py-5'>
        <h1 className='text-center'>Todo List</h1>
        {props.todos.length===0? "No todos to display": props.todos.map((todo)=>{
            return <TodoItem todo={todo} key={todo.Sno} onDelete={props.onDelete}/>
         })}
            
    </div>
  )
}
