import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axios";

const deleteSession = async (id: number) => {
  const res = await axiosInstance.delete(`/session/${id}`);
  return res.data;
};

const useDeleteSessionMutation = () => {
  const navigate = useNavigate();

  return useMutation(deleteSession, {
    onSuccess() {
      localStorage.removeItem("user");
      navigate("/login");
    },
  });
};

export default useDeleteSessionMutation;
