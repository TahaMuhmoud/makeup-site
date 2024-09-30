import { useMutation, useQueryClient } from "react-query";
import { removeAllFromFavs } from "../../services/favoritesApi";

export function useClearFavs() {
  const qClient = useQueryClient();
  const { mutate: clearFavs, isLoading: isClearing } = useMutation(
    "favorites",
    removeAllFromFavs,
    {
      onSuccess() {
        qClient.invalidateQueries();
      },
    }
  );
  return { clearFavs, isClearing };
}
