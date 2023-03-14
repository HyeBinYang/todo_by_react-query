import React, { useContext } from "react";
import { TodoActionsContext } from "../../context/TodoContext";
import "./style.css";

const TodoAddButton = () => {
  const todoActionsContext = useContext(TodoActionsContext);

  const handleClickAdd = () => {
    todoActionsContext.toggleModal("add");
  };

  return (
    <button className="todo__btn--add" onClick={handleClickAdd}>
      +
    </button>
  );
};

export default TodoAddButton;
