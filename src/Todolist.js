import React from 'react';
import Todo from './todo';
function TodoList({todo,setTodo,filteredTodos}){
  return(
    <div className="todo-container">
        <ul className="todo-list">
        {
          filteredTodos.map((e)=>(
          <Todo key={e.id} text={e.text}
          id={e.id}
          todo={todo}
          setTodo={setTodo}
          cur={e} />

        ))

        }
        </ul>
      </div>
  );
}
export default TodoList;
