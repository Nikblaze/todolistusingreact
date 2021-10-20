import './App.css';
import React,{useState,useEffect} from 'react';
import Form from './form';
import TodoList from './Todolist';

function App() {
  const [inputText,setInputText]=useState("");
  const [todo,setTodo]=useState([]);
  const [status,setStatus]=useState("all");
  const [filteredTodos,setFilteredTodos]=useState([]);
  useEffect(()=>{
    getLocal();
  },[]);
  useEffect(()=>{
    filterHandler();
    saveLocalTodos();
  },[todo,status]);
  const filterHandler =()=>{
    switch(status){
      case 'complete':
      setFilteredTodos(todo.filter(item=>item.complete===true));
    break;
    case 'uncomplete':
    setFilteredTodos(todo.filter(item=>item.complete===false));
    break;
    default:
    setFilteredTodos(todo);
    }
  };
  const saveLocalTodos = () => {
localStorage.setItem("todo",JSON.stringify(todo));
};
  const getLocal = () => {
    console.log("local host has");
    console.log(localStorage.getItem("todo"));
    if(localStorage.getItem("todo")=== null){
      console.log("local host empty");
      localStorage.setItem("todo",JSON.stringify([]));
    }
    else{
      console.log("it is not empty");
      let todolocal = JSON.parse(localStorage.getItem("todo"));
      console.log(todolocal);
      setTodo(todolocal);
    }
  };
  return (
    <div className="App">
    <header>
    <h1>Todo's List</h1>
    </header>
    <Form inputText={inputText} setInputText={setInputText} todo={todo} setTodo={setTodo}
    status={status}
    setStatus={setStatus}
    />
    <TodoList todo={todo} setTodo={setTodo} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
