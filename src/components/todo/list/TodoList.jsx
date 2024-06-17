import React, { useState } from "react";
import TodoItem from "./TodoItem";
import TodoListTitle from "./TodoListTitle";
import TodoAddItem from "./TodoAddItem";
import { useTodo } from "../../../context/TodoContext";
import TodoNosearch from "./TodoNosearch";
import TodoSearch from "../search/TodoSearch";
const TodoList = () => {
  const { todo, searchVal } = useTodo();
  const [addTodo, setAddTodo] = useState(false);

  return (
    <div className="todo_list_box">
      <TodoListTitle addTodo={addTodo} setAddTodo={setAddTodo} />
      <div className="todo_item_box">
        <TodoSearch />
        {addTodo && <TodoAddItem addTodo={addTodo} setAddTodo={setAddTodo} />}
        {todo?.filter((item) => item.content.includes(searchVal.trim()))
          .length || !todo?.length ? (
          searchVal.trim().length ? (
            todo
              ?.filter((item) => item.content.includes(searchVal.trim()))
              .map((item) => <TodoItem key={item.id} item={item} />)
          ) : (
            todo?.map((item) => <TodoItem key={item.id} item={item} />)
          )
        ) : (
          <TodoNosearch />
        )}
      </div>
    </div>
  );
};

export default TodoList;
