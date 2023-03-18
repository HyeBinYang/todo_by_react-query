import { QueryFunctionContext, useQuery } from "react-query";
import axiosInstance from "../axios";

const getSessionUser = async ({ queryKey }: QueryFunctionContext<["getSession"]>) => {
  const username = localStorage.getItem("user");

  if (!username) return;

  const res = await axiosInstance.get(`/session?username=${username}`);
  return res.data;
};

const useGetSessionQuery = () => {
  return useQuery(["getSession"], getSessionUser, {
    onSuccess(user) {
      if (user) {
      }
    },
    retry: 0,
  });
};

export default useGetSessionQuery;
