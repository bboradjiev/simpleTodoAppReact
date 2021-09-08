import React from "react";

function TodosCount({todos}) {
  return (
    <div>
      <div clasName="todos-total">
        total items: <span class="output">{todos.length}</span>
      </div>
    </div>
  );
}

export default TodosCount;
