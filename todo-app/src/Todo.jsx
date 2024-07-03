import React from "react";

const Todo = ({ task, removeTodo, id }) => {
  return (
    <div data-testid="task">
      {task}
      <button onClick={() => removeTodo(id)}>X</button>
    </div>
  );
};

export default Todo;
