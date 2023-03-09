import { useMutation, useQueryClient } from "react-query";
import { Todo } from "../../types/todo";
import axiosInstance from "../axios";

const updateTodo = async (newTodo: Todo) => {
  const { data } = await axiosInstance.patch(`/todos/${newTodo.id}`, newTodo);
  return data;
};

const useUpdateTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(updateTodo, {
    onSuccess: (newData) => {
      console.log(newData);
      queryClient.setQueryData<Todo[]>("todoList", (oldData) => {
        if (!oldData) return [];
        return oldData.map((data) => (data.id === newData.id ? newData : data));
      });
    },
    onError: (error) => {
      console.error(error);
      alert("에러가 발생 했습니다. 다시 한번 시도해주세요.");
    },
  });
};

export default useUpdateTodoMutation;
