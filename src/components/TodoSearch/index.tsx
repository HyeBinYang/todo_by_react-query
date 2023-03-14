import React, { useContext } from "react";
import { TodoActionsContext, TodoContext } from "../../context/TodoContext";
import "./style.css";

const TodoSearch = () => {
  const todoContext = useContext(TodoContext);
  const todoActionsContext = useContext(TodoActionsContext);

  return (
    <input
      type="text"
      className="search__input--text"
      placeholder="등록된 할 일 검색"
      value={todoContext.keyword}
      onChange={(e) => todoActionsContext.onChangeKeyword(e.target.value)}
    />
  );
};

export default TodoSearch;
