import React from "react";
import "../../assets/style/todo/Todo.css";
import { TodoContextProvider } from "../../context/TodoContext";
import TodoDate from "./date/TodoDate";
import TodoList from "./list/TodoList";

const Todo = () => {
  return (
    <div>
      <TodoContextProvider>
        <TodoDate />
        <TodoList />
      </TodoContextProvider>
    </div>
  );
};

export default Todo;
