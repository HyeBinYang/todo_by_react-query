import React from "react";
import { Todo } from "../../types/todo";
import "./style.css";

interface TodoItemProps extends Todo {}

const TodoItem = (todo: TodoItemProps) => {
  return (
    <li className={todo.done ? "todo__item done" : "todo__item"}>
      <input className="item__input--checkbox" type="checkbox" id={`checkbox_${todo.id}`} />
      <label htmlFor={`checkbox_${todo.id}`}></label>
      {todo.done ? <del className="item__title">{todo.title}</del> : <p className="item__title">{todo.title}</p>}
      <div className="item__button-container">
        <button className="item__button">수정</button>
        <button className="item__button">삭제</button>
      </div>
    </li>
  );
};

export default TodoItem;
