import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axios";

const createSession = async ({ username }: any) => {
  const res = await axiosInstance.post(`session`, { username, until: Date.now() });
  return res.data;
};

const useLoginMutation = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation((user: any) => createSession(user), {
    onSuccess(user) {
      const { id, username } = user;
      localStorage.setItem("user", JSON.stringify({ id, username }));
      queryClient.invalidateQueries({ queryKey: ["getSession"] });
      navigate("/todo");
    },
  });
};

export default useLoginMutation;
