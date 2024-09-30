import { useParams } from "react-router-dom";
import { getProductsByProduct } from "../../services/api";
import { useQuery } from "react-query";

export function useProductTypeProducts() {
  const params = useParams();
  const { data: products, isLoading } = useQuery(
    ["products", params.name],
    () => getProductsByProduct(params.name)
  );
  return { products, isLoading };
}
