import React, { useContext } from "react";
import { TodoActionsContext, TodoContext } from "../../context/TodoContext";
import Input from "../common/Input";

const TodoSearch = () => {
  const { keyword } = useContext(TodoContext);
  const todoActionsContext = useContext(TodoActionsContext);

  return (
    <Input
      type="text"
      placeholder="등록된 할 일 검색"
      value={keyword}
      onChange={(e) => todoActionsContext.onChangeKeyword(e.target.value)}
    />
  );
};

export default TodoSearch;
