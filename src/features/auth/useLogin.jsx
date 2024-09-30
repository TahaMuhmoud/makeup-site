import { useMutation, useQueryClient } from "react-query";
import { login as loginApi } from "../../services/authApi";

export default function useLogin() {
  const queryClient = useQueryClient();
  const { mutate: login, isLoading } = useMutation((data) => loginApi(data), {
    onSuccess() {
      queryClient.invalidateQueries();
    },
  });
  return { login, isLoading };
}
