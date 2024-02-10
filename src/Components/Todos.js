//this displays all todos

import React from 'react'
import {TodoItem} from "./TodoItem"

export const Todos = (props) => {
  let bodyStyle={
    paddingBottom: '50px',
  };
  return (
    <div className='container' style={bodyStyle}>
      <h3 className='text-center my-3'>To-do list</h3>
      {props.todos.length===0? "No to-dos to display" :
        props.todos.map((todo)=>{
        return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
      })
      }
    </div>
  )
}
