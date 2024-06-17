import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useTodo } from "../../../context/TodoContext";
import style from "../../../assets/style/todo/TodoSearch.module.css";
const TodoSearch = () => {
  const { searchVal, setSearchVal } = useTodo();
  const [isFocus, setIsFocus] = useState();

  return (
    <div className={style.todo_search_box}>
      <div
        className={
          isFocus ? `${style.todo_search} ${style.focus}` : style.todo_search
        }
      >
        <label htmlFor="todoSearch">
          <FaSearch />
        </label>
        <input
          type="text"
          id="todoSearch"
          onChange={(e) => {
            setSearchVal(e.target.value);
          }}
          onFocus={() => {
            setIsFocus(true);
          }}
          onBlur={() => {
            setIsFocus(false);
          }}
          value={searchVal}
          placeholder="search"
        />
      </div>
    </div>
  );
};

export default TodoSearch;
