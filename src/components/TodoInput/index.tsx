import React, { useRef } from "react";
import { useMutation, useQueryClient } from "react-query";
import axiosInstance from "../../utils/axios";
import "./style.css";

interface Todo {
  title: string;
}

const TodoInput = () => {
  const todoRef = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();

  const addTodo = async (todo: string) => {
    console.log("addTodo");
    const { data } = await axiosInstance.post<Todo>("todos", {
      title: todo,
    });

    return data;
  };

  const mutation = useMutation<Todo, number, string>(addTodo, {
    onMutate: () => {
      console.log("onMutate");
    },
    onSuccess: async (data, variables, context) => {
      console.log(data, variables, context);
      queryClient.setQueryData<Todo[]>("todoList", (oldData) => {
        if (!oldData) return [];

        return [
          ...oldData,
          {
            title: data.title,
          },
        ];
      });
      // return queryClient.invalidateQueries(["todoList"]);
    },
    onError: async (error, variables, context) => {
      console.log(error, variables, context);
    },
    onSettled: async (data, error, variables, context) => {
      console.log("second");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (todoRef.current && todoRef.current.value) {
      mutation.mutate(todoRef.current.value, {
        onSuccess: () => {
          console.log("success mutate");
        },
      });
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
