import { useQuery, QueryFunctionContext } from "react-query";
import { LoginValues } from "../../types/auth";
import axiosInstance from "../axios";

const getUser = async ({ queryKey }: QueryFunctionContext<["getUser", LoginValues]>) => {
  const loginValues = queryKey[1];
  const res = await axiosInstance.get(`/users?username=${loginValues.username}&password=${loginValues.password}`);
  return res.data;
};

const useGetUserQuery = ({ username, password }: LoginValues) => {
  return useQuery(["getUser", { username, password }], getUser, {
    onSuccess(user) {
      // localStorage.setItem("user", user);
    },
    retry: 0,
  });
};

export default useGetUserQuery;
