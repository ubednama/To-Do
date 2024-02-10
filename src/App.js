import './App.css';
import Header from './Components/Header';
import { Todos } from './Components/Todos';
import { Footer } from './Components/Footer';
import { AddTodo } from './Components/AddTodo';
import { About } from './Components/About';
import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  //getting back todos saved from localStorage
  let initTodo;
  if(localStorage.getItem("myTodoList")===null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("myTodoList"))
  }


  const onDelete = (todo) =>{
    console.log('this will delete your item',todo)

    //this wont work
    // let index = myTodoList.indexOf(todo);
    // myTodoList.splice(index, 1);

    setTodos(myTodoList.filter((e)=>{
      return e!==todo;
    }))
    localStorage.setItem("myTodoList",JSON.stringify(myTodoList));
  };

  const addTodo = (title, desc) =>{
    console.log("I am adding this to todo list", title, desc)
    let sno = 0;
    if(myTodoList.length===0){
      sno  = 0;
    } else {
      sno  = myTodoList[myTodoList.length-1].sno;
    }
    const myTodo = {
      sno: sno+1,
      title: title,
      desc: desc,
    }
    setTodos([...myTodoList, myTodo]);            // ... -> spread operator(used to create a new array with the existing elements)
    console.log(myTodo);
  }


  const[myTodoList, setTodos] = useState(initTodo);
  
  
  // storing todos locally
  useEffect(() => {
    localStorage.setItem("myTodoList",JSON.stringify(myTodoList));
  }, [myTodoList])


  return (
    <>
    
    <Router>
      <Header title="My to-do list" searchBar={false}/>
        <Routes>
          <Route path="/" element={<Home addTodo={addTodo} myTodoList={myTodoList} onDelete={onDelete} />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer/>
      </Router>
    
    </>
  );

  function Home() {
    return (
      <>
        <AddTodo AddTodo={addTodo}/>
        <Todos todos={myTodoList} onDelete={onDelete}/>
      </>
    );
  }
}

export default App;
