import { useMutation, useQueryClient } from "react-query";
import { Todo } from "../../types/todo";
import axiosInstance from "../axios";

const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient();

  const deleteTodo = async (todoId: number) => {
    await axiosInstance.delete(`/todos/${todoId}`);
    return todoId;
  };

  return useMutation(deleteTodo, {
    onSuccess: (deleteTodoId) => {
      queryClient.setQueryData<Todo[]>("todoList", (oldData) => {
        if (!oldData) return [];

        return oldData?.filter((data) => data.id !== deleteTodoId);
      });
    },
    onError: (error) => {
      console.error(error);
      alert("에러가 발생 했습니다. 다시 한번 시도해주세요.");
    },
  });
};

export default useDeleteTodoMutation;
