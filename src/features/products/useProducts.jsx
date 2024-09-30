import { useQuery } from "react-query";
import { getProducts } from "../../services/api";

export function useProducts() {
  let { data: products, isLoading } = useQuery(["products"], getProducts);

  return { products, isLoading };
}
