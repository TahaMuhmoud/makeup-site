import { useQuery } from "react-query";
import { getMostRatedProducts } from "../../services/api";

export function useProductsMostReated(from = 4.5) {
  let { data: mostRatedProducts, isLoading } = useQuery(
    ["mostRatedProducts"],
    () => getMostRatedProducts(from)
  );

  return { mostRatedProducts, isLoading };
}
