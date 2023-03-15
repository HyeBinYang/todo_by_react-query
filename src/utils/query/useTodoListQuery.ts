import { AxiosError } from "axios";
import { useQuery, QueryFunctionContext } from "react-query";
import { Todo } from "../../types/todo";
import axiosInstance from "../axios";

const getTodoList = async () => {
  const response = await axiosInstance.get(`todos`);
  return response.data;
};

const useTodoListQuery = (a?: any) => {
  return useQuery<Todo[], AxiosError>(["todoList", a], getTodoList);
};

export default useTodoListQuery;
