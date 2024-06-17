import React from "react";
import { IoAddCircle } from "react-icons/io5";
import { useTodo } from "../../../context/TodoContext";

const TodoListTitle = ({ addTodo, setAddTodo }) => {
  const { todo, searchVal, setSearchVal } = useTodo();
  return (
    <div className="todo_title_box">
      <h1>TodoList</h1>
      {(!searchVal || !todo.length) && (
        <button
          className={
            todo !== undefined ? (!todo.length && !addTodo ? "empty" : "") : ""
          }
          title="할일 추가!!"
          onClick={() => {
            setAddTodo(true);
            setSearchVal("");
          }}
        >
          <IoAddCircle />
        </button>
      )}
    </div>
  );
};

export default TodoListTitle;
