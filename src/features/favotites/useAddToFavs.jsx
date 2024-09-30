import { useMutation, useQueryClient } from "react-query";
import { addToFavorites } from "../../services/favoritesApi";

export function useAddToFavs() {
  const qClient = useQueryClient();
  const { mutate: addToFavs, isLoading: isAdding } = useMutation(
    "favorites",
    (data) => addToFavorites(data),
    {
      onSuccess() {
        qClient.invalidateQueries();
      },
    }
  );
  return { addToFavs, isAdding };
}
