import { createContext, useContext, useEffect, useState } from "react";

const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
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
