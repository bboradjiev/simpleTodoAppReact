import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, toggleComplete, deleteTodo }) {
  return (
    <div>
      <ul className="todo-items">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
