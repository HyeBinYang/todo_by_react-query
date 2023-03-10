import React, { useRef } from "react";
import useAddTodoMutation from "../../utils/mutation/useAddTodoMutation";
import "./style.css";

const TodoInput = () => {
  const todoRef = useRef<HTMLInputElement>(null);
  const mutation = useAddTodoMutation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (todoRef.current && todoRef.current.value) {
      mutation.mutate({ title: todoRef.current.value, done: false });
      todoRef.current.value = "";
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo__search">
      <input type="text" ref={todoRef} className="todo__search--text" placeholder="오늘 할 일" />
      <button className="todo__button">+</button>
    </form>
  );
};

export default TodoInput;
