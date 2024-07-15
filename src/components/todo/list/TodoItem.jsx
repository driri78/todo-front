import React, { useEffect, useRef, useState } from "react";
import { useTodo } from "../../../context/TodoContext";
import { IoRemoveCircleSharp } from "react-icons/io5";
import { PiNotePencilDuotone } from "react-icons/pi";
import { FaRegCheckSquare } from "react-icons/fa";
import { FaRegSquare } from "react-icons/fa";

const TodoItem = ({ item }) => {
  const { todo, setTodo } = useTodo();
  const { id, content, checked } = item;

  const [inputVal, setInputVal] = useState(content);
  const [read, setRead] = useState(true);

  const checkedHandle = () => {
    const newTodo = todo.map((item) => {
      item.id === id && (item.checked = !checked);
      return item;
    });
    setTodo(newTodo);
  };

  const editHandle = () => {
    if (!inputVal.trim().length) {
      setInputVal(content);
    } else {
      const newTodo = todo.map((item) => {
        item.id === id && (item.content = inputVal);
        return item;
      });
      setTodo(newTodo);
    }
    setRead(true);
  };

  const removeTodo = () => {
    const filter = todo.filter((item) => item.id !== id);
    setTodo(filter);
  };

  const editRef = useRef();
  useEffect(() => {
    !read && editRef.current.focus();
  }, [read]);

  return (
    <form
      className="todo_item"
      onSubmit={(e) => {
        e.preventDefault();
        editHandle();
      }}
    >
      <button type="button" title="할일 체크!!" onClick={checkedHandle}>
        {checked ? <FaRegCheckSquare /> : <FaRegSquare />}
      </button>
      <input
        title={checked ? "다하셨군요!" : "다하셨나요?"}
        className={`${checked ? "checked" : ""}`}
        type="text"
        ref={editRef}
        onClick={() => {
          read && checkedHandle();
        }}
        onChange={(e) => setInputVal(e.target.value)}
        onBlur={() => {
          if (!read) editHandle();
        }}
        value={inputVal}
        readOnly={read}
      />
      <button type="button" title="할일 수정!!" onClick={() => setRead(false)}>
        <PiNotePencilDuotone />
      </button>
      <button type="button" title="할일 제거!!" onClick={removeTodo}>
        <IoRemoveCircleSharp />
      </button>
    </form>
  );
};

export default TodoItem;
