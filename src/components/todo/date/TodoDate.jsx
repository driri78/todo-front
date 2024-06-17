import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import style from "../../../assets/style/todo/TodoDate.module.css";
import { format } from "date-fns";
const TodoDate = () => {
  return (
    <div className={style.todo_date_box}>
      <div className={style.prev}>
        <FaAngleLeft />
      </div>
      <div className={style.next}>
        <FaAngleRight />
      </div>
      <h1 className={style.todo_date}>{format(new Date(), "yyyy-MM-dd")}</h1>
    </div>
  );
};

export default TodoDate;
