import { useMutation, useQueryClient } from "react-query";
import { removeFromFavorites } from "../../services/favoritesApi";

export function useDeleteFromFavs() {
  const qClient = useQueryClient();
  const { mutate: deleteFavProduct, isLoading: isDeleting } = useMutation(
    "favorites",
    (id) => removeFromFavorites(id),
    {
      onSuccess() {
        qClient.invalidateQueries();
      },
    }
  );
  return { deleteFavProduct, isDeleting };
}
