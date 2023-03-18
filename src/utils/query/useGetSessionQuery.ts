import { useQuery } from "react-query";
import { User } from "../../types/auth";
import axiosInstance from "../axios";
import useDeleteSession from "../mutation/useDeleteSessionMutation";

const getSessionUser = async () => {
  const user = localStorage.getItem("user");
  if (!user) return;
  const { username } = JSON.parse(user);
  const res = await axiosInstance.get(`/session?username=${username}`);
  return res.data[0];
};

const useGetSessionQuery = () => {
  const deleteMutation = useDeleteSession();

  return useQuery(["getSession"], getSessionUser, {
    onSuccess(user) {
      if (user) {
        if (user.until <= Date.now()) {
          // deleteMutation.mutate(user.id);
        }
      }
    },
    retry: 0,
  });
};

export default useGetSessionQuery;
