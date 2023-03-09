import React from "react";
import TodoItem from "../TodoItem";
import useTodoListQuery from "../../utils/hook/useTodoListQuery";
import "./style.css";

const TodoList = () => {
  const { data: todoList, status, error } = useTodoListQuery();

  if (status === "loading") {
    return <h1>Loading...</h1>;
  }

  if (status === "error") {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <ul className="todo__list">
      {todoList
        ? todoList.map((todo) => (
            <React.Fragment key={todo.id}>
              <TodoItem {...todo} />
            </React.Fragment>
          ))
        : null}
    </ul>
  );
};

export default TodoList;
