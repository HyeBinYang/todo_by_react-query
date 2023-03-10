import { AxiosError } from "axios";
import { useMutation, useQueryClient } from "react-query";
import { Todo } from "../../types/todo";
import axiosInstance from "../axios";

const useAddTodoMutation = () => {
  const queryClient = useQueryClient();

  const addTodo = async (newTodo: Todo) => {
    const { data } = await axiosInstance.post<Todo>("todos", newTodo);
    return data;
  };

  return useMutation<Todo, AxiosError, Todo>(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todoList");
    },
    onError: (error) => {
      console.error(error);
      alert("에러가 발생 했습니다. 다시 한번 시도해주세요.");
    },
  });
};

export default useAddTodoMutation;
