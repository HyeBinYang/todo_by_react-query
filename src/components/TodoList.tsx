import React from "react";
import { AxiosError } from "axios";
import { useQuery } from "react-query";
import TodoItem from "./TodoItem";
import axiosInstance from "../utils/axios";

export interface Todo {
  id: number;
  title: string;
}

const TodoList = () => {
  const fetchTodoList = async () => {
    const response = await axiosInstance.get("todos");
    return response.data;
  };

  // useQuery<쿼리 함수의 return 값의 type, 에러가 발생했을 때 error의 type>(query key, query function)
  // 쿼리 키 기반으로 쿼리 캐싱을 관리한다.
  // 쿼리 키가 동일한 여러 개의 쿼리를 호출하면 하나만 호출됨
  // 쿼리 키가 내부적으로 해시가 된다.
  // 쿼리 키는 문자열 또는 배열로 받음
  // react-query 내부적으로 문자열을 배열로 변환시킴
  const { data: todoList, status, error } = useQuery<Todo[], AxiosError>("todoList", fetchTodoList);

  if (status === "loading") {
    return <h1>Loading...</h1>;
  }

  if (status === "error") {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <div>
      <ul>{todoList ? todoList.map((todo) => <TodoItem key={todo.id} {...todo} />) : null}</ul>
    </div>
  );
};

export default TodoList;
