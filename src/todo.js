import React from 'react';
function Todo({id,text,todo,setTodo,cur}){
  const deleteHandler=()=>{
    console.log("deleted");
    setTodo(
      todo.filter((el)=>(el.id!==id))
    );
  };
  const completeHandler=()=>{
    console.log("completed");

    setTodo(
      todo.map((item)=>{
        if(item.id===cur.id){
          return {...item, complete: (!item.complete)};
        }
        return item;
      })
    );
  }
  return(
    <div className="todo">
    <li className={`todo-item ${cur.complete ? "completed" : "" }`}>{text}</li>
    <button onClick={completeHandler} className="complete-btn">
    <i className="fas fa-check"></i>
    </button>
    <button onClick={deleteHandler} className="trash-btn">
    <i className="fas fa-trash"></i>
    </button>
    </div>
  );
}
export default Todo;
