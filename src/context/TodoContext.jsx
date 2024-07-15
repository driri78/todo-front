import { createContext, useContext, useEffect, useState } from "react";

const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  // const todoData = {
  //   date: "2024-06-14",
  //   data: [
  //     {
  //       id: 1,
  //       content: "html",
  //       checked: false,
  //     },
  //     {
  //       id: 2,
  //       content: "css",
  //       checked: false,
  //     },
  //     {
  //       id: 3,
  //       content: "javascript",
  //       checked: false,
  //     },
  //     {
  //       id: 4,
  //       content: "react",
  //       checked: false,
  //     },
  //     {
  //       id: 5,
  //       content: "express",
  //       checked: false,
  //     },
  //   ],
  // };

  const [todo, setTodo] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos")); // String
    const filterTodos = todos.filter(
      (todo) => new Date().getTime() - todo.date < 3600000
    ); // 하루 지난 todo 제거
    setTodo(filterTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);
  return (
    <TodoContext.Provider
      value={{
        todo,
        setTodo,
        searchVal,
        setSearchVal,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => useContext(TodoContext);
