import React, { useContext } from "react";
import { TodoActionsContext, TodoContext } from "../../context/TodoContext";

const TodoSearch = () => {
  const todoContext = useContext(TodoContext);
  const todoActionsContext = useContext(TodoActionsContext);

  return (
    <div className="todo__search">
      <input
        type="text"
        className="search__input--text"
        value={todoContext.keyword}
        onChange={(e) => todoActionsContext.onChangeKeyword(e.target.value)}
      />
    </div>
  );
};

export default TodoSearch;
