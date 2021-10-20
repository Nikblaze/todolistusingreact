import React from 'react';

function Form({setInputText,todo,setTodo,inputText,status,setStatus}){
  const inputTextHandler = (e)=>{
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitTodoHandler=(e)=>{
    e.preventDefault();
    console.log("clicked");
    todo.push({text: inputText, complete:false, id:Math.random()*1000});
    setTodo(todo);
    console.log(todo);
    setInputText('');
  }
  const statusHandler=(e)=>{
    setStatus(e.target.value);
  }
  return(
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="complete">Completed</option>
          <option value="uncomplete">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
