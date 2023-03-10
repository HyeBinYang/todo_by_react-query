import { AxiosError } from "axios";
import React, { useRef } from "react";
import { useMutation, useQueryClient } from "react-query";
import { Todo } from "../../types/todo";
import axiosInstance from "../../utils/axios";
import "./style.css";

const TodoInput = () => {
  const todoRef = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();

  const addTodo = async (newTodo: Todo) => {
    const { data } = await axiosInstance.post<Todo>("todos", newTodo);
    return data;
  };

  const mutation = useMutation<Todo, AxiosError, Todo>(addTodo, {
    onSuccess: async (data, variables, context) => {
      queryClient.invalidateQueries("todoList");
    },
    onError: async (error, variables, context) => {
      console.error(error);
      alert("에러가 발생 했습니다. 다시 한번 시도해주세요.");
    },
  });

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
