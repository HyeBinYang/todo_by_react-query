import React from "react";
import { Todo } from "./TodoList";

interface TodoItemProps extends Todo {}

const TodoItem = (todo: TodoItemProps) => {
  return <li>{todo.title}</li>;
};

export default TodoItem;
