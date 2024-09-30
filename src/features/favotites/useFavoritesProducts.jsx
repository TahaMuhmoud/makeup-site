import { useQuery } from "react-query";
import { getFavorites } from "../../services/favoritesApi";

export function useFavoritesProducts() {
  const { data: favorites, isLoading: isLoadingFavorites } = useQuery(
    ["favorites"],
    getFavorites
  );
  return { favorites, isLoadingFavorites };
}
