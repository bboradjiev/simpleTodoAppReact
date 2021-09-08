import { useEffect, useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodosCount from "./components/TodosCount";

function App() {
  //state for the todos
  const [todos, setTodos] = useState(() => {
    // get the todos from localstorage
    const savedTodos = localStorage.getItem("todos");
    // if there are todos stored
    if (savedTodos) {
      // return the parsed JSON object back to a javascript object
      return JSON.parse(savedTodos);
      // otherwise
    } else {
      // return an empty array
      return [];
    }
  });
  //useEffect hook so that localstorage can be updated with the
  //current todo list
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //obtaining the todo from AddTodo Component
  const getTodo = (todo) => {
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };
  
  //toggling the complete button for each todo in TodoItem Component
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (id === todo.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  //deleting the todo from the TodoItem Component
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="page">
      <Header />
      <main class="todo-app">
        <AddTodo getTodo={getTodo} />
        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
        <TodosCount todos={todos} />
      </main>
    </div>
  );
}

export default App;
