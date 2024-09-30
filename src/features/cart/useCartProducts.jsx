import { useQuery } from "react-query";
import { getCart } from "../../services/cartApi";

export function useCartProducts() {
  const { data: cartProducts, isLoading } = useQuery("cart", getCart);
  return { cartProducts, isLoading };
}
