import { QueryFunctionContext, useQuery } from "react-query";
import axiosInstance from "../axios";

const getSessionUser = async ({ queryKey }: QueryFunctionContext<["getSession"]>) => {
  const username = localStorage.getItem("user");

  console.log(username);
  if (!username) return;

  const res = await axiosInstance.get(`/session?username=${username}`);
  return res.data;
};

const useGetSessionQuery = () => {
  return useQuery(["getSession"], getSessionUser, {
    retry: 0,
  });
};

export default useGetSessionQuery;
