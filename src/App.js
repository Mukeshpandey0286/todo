// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import Main from './components/Main';
import Todos from './components/Todos';
import Footer from './components/Footer';
import AddTodo from './components/AddTodo';
function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
     initTodo = [];
  }else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  
const onDelete = (todo) => {
  console.log("Item deleted of todo_list",todo);
  setTodos(todos.filter((e)=>{
    return e!==todo;
  }));
  localStorage.setItem("todos",JSON.stringify(todos));
}

const addTodo = (title, desc) =>{
  console.log("added",title,desc);
  let sno;
  if(todos.length==0){
    sno = 0;
  }else{
   sno = todos[todos.length-1].sno+1;
  }
  const myTodo = {
    sno: sno,
    title: title,
    desc: desc,
  }
  setTodos([...todos,myTodo]);
  console.log(myTodo);
  
}

const [todos, setTodos] = useState(initTodo);
useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todos));
}, [todos])

  return (
    <>
    <Main title = "My_ToDo_List" searchbar = {false}/>
    <AddTodo AddTodo = {AddTodo} addTodo ={addTodo}/>
    <Todos todos = {todos} onDelete = {onDelete}/> 
    <Footer/>

    </>
  );
}

export default App;
