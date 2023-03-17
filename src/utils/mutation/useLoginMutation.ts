import { useMutation } from "react-query";
import axiosInstance from "../axios";

const createSession = async ({ username, id }: any) => {
  const res = await axiosInstance.put(`/session/${id}`, { username });
  return res;
};

const useLoginMutation = () => {
  return useMutation((user: any) => createSession(user));
};

export default useLoginMutation;
