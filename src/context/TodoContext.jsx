import { createContext, useContext, useEffect, useState } from "react";

const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [todo, setTodo] = useState(getTodos);
  const [searchVal, setSearchVal] = useState("");

  function getTodos() {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (!todos) return [];

    const filterTodos = todos.filter((todo) => {
      const [year, month, date] = todo.date.split("-");
      if (new Date().getFullYear() > +year) {
        return false;
      }
      if (new Date().getMonth() > +month) {
        return false;
      }
      if (new Date().getDate() > +date) {
        return false;
      }
      return true;
    });
    return filterTodos;
  }

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
