import React from "react";

function TodoItem({text, id, completed, toggleComplete, deleteTodo}) {
   return (
    <>
      <li>
        <span className="todoID"></span>
        <span className={completed ? "completed" : ""}>{text}</span>
        <div className="todo-remove-btn" onClick={()=>deleteTodo(id)}>
          <i className="far fa-trash-alt"></i>
        </div>
        <div className="todo-check-btn" onClick={()=>toggleComplete(id)}>
          <i className="fas fa-check"></i>
        </div>
      </li>
    </>
  );
}

export default TodoItem;
