import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import { v4 as uuid } from "uuid";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    const newTodo = { ...todo, id: uuid() };
    setTodos((todos) => [...todos, newTodo]);
  };
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <>
      <NewTodoForm addTodo={addTodo} />
      {todos.map(({id, task}) => (
        <Todo
          key={id}
          id={id}
          removeTodo={removeTodo}
          task={task}
        />
      ))}
    </>
  );
};

export default TodoList;
