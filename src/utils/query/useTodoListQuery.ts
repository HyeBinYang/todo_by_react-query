import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { Todo } from "../../types/todo";
import axiosInstance from "../axios";

const getTodoList = async () => {
  const response = await axiosInstance.get(`todos`);
  return response.data;
};

const useTodoListQuery = () => {
  return useQuery<Todo[], AxiosError>(["todoList"], getTodoList);
};

export default useTodoListQuery;
