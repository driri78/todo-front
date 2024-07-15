import React, { useEffect, useRef, useState } from "react";
import { useTodo } from "../../../context/TodoContext";
import { IoRemoveCircleSharp } from "react-icons/io5";
import { PiNotePencilDuotone } from "react-icons/pi";
import { FaRegSquare } from "react-icons/fa";
import { format } from "date-fns";

const TodoAddItem = ({ addTodo, setAddTodo }) => {
  const { todo, setTodo } = useTodo();
  const [value, setValue] = useState("");
  const addRef = useRef("");
  const addTodoList = () => {
    if (!value.trim().length) return;
    const newTodo = {
      id: todo.length ? Math.max(...todo.map((item) => item.id)) + 1 : 1,
      content: value.trim(),
      checked: false,
      date: new Date().getTime(),
      date: format(new Date(), "yyyy-MM-dd"),
    };
    value.trim().length !== 0 && setTodo([newTodo, ...todo]);
  };
  useEffect(() => {
    addTodo && addRef.current.focus();
  }, [addTodo]);
  return (
    <form
      className="todo_item"
      onSubmit={(e) => {
        e.preventDefault();
        setAddTodo(false);
        addTodoList();
      }}
    >
      <button title="할일 체크!!">
        <FaRegSquare />
      </button>
      <input
        type="text"
        ref={addRef}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onBlur={() => {
          setAddTodo(false);
          addTodoList();
        }}
        value={value}
      />
      <button title="할일 수정!!">
        <PiNotePencilDuotone />
      </button>
      <button title="할일 제거!!">
        <IoRemoveCircleSharp />
      </button>
    </form>
  );
};

export default TodoAddItem;
