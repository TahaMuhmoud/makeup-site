import { useMutation } from "react-query";
import { logoutApi } from "../../services/authApi";

export function useLogout() {
  let { mutate: logout, isLoading: isLogingOut } = useMutation(() =>
    logoutApi()
  );
  return {
    logout,
    isLogingOut,
  };
}
