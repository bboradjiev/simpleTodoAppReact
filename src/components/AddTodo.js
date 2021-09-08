import React, { useState } from "react";

export default function AddTodo({ getTodo }) {
  const [input, setInput] = useState("");
   
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      text: input,
      id: Math.floor(Math.random() * 1000),
      completed: false,
    };
    getTodo(newTodo);
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <form className="todo-add" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={input}
          type="text"
          placeholder="add new todo ..."
        />
        <button className="todo-add-btn">Add</button>
      </form>
    </div>
  );
}
