import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getProductsByBrand } from "../../services/api";

export function useBrandProducts() {
  const params = useParams();
  const { data: products, isLoading } = useQuery(
    ["products", params.name],
    () => getProductsByBrand(params.name)
  );
  return { products, isLoading };
}
