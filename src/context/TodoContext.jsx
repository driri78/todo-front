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
  const [isPending, setIsPending] = useState(false);
  const [searchVal, setSearchVal] = useState("");

  const getTodos = () => {
    fetch("http://localhost:4500/todo")
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          setIsPending(true);
          setTodo(res);
        } else {
          console.log("todo 가져오기 실패");
        }
      });
  };

  const saveTodos = () => {
    console.log("todo: ", todo);
    if (!isPending) return;
    fetch("http://localhost:4500/todo", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ todo }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          console.log("저장 성공");
        } else {
          console.log("저장 실패");
        }
      });
  };
  useEffect(getTodos, []);
  useEffect(() => {
    saveTodos();
    console.log("todo 바뀜");
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
