import React from 'react'
import Todo from './Todo';

const Todos = (props) => {
  let myStyle ={
    minwidth: "90vh",
  }
  return (
    <div className='container' style={myStyle}>
     <h4 className='text-center'>Todo List</h4>
     {props.todos.length === 0? "No Todos to display":
     props.todos.map((todo)=>{
     return(
      <>
      <Todo todo = {todo} key={todo.sno} onDelete = {props.onDelete} /> //
      <hr/>
      </>
     )
})
}
    </div>
  )
}

export default Todos
