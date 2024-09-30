import { useMutation } from "react-query";
import { signup as signupApi } from "../../services/authApi";

export function useSignUp() {
  const { mutate: signup, isLoading } = useMutation("users", (data) =>
    signupApi(data)
  );
  return { signup, isLoading };
}
