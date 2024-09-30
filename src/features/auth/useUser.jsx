import { useQuery } from "react-query";
import { getUser } from "../../services/authApi";

export function useUser() {
  const { data: user, isLoading } = useQuery("users", getUser);
  return { user, isLoading, isAuthenticated: user?.role === "authenticated" };
}
