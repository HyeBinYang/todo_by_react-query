import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axios";

const createSession = async ({ username, id }: any) => {
  const res = await axiosInstance.put(`/session/${id}`, { username });
  return res.data;
};

const useLoginMutation = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation((user: any) => createSession(user), {
    onSuccess(user) {
      localStorage.setItem("user", user.name as string);
      queryClient.invalidateQueries({ queryKey: ["getSession"] });
      navigate("/todo");
    },
  });
};

export default useLoginMutation;
