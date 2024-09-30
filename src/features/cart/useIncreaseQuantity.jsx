import { useMutation, useQueryClient } from "react-query";
import { increaseProductQuantityApi } from "../../services/cartApi";

export function useIncreaseQuantity() {
  const qClient = useQueryClient();
  const { mutate: increaseQuantity, isLoading: isQuantityIncreasing } =
    useMutation("cart", (data) => increaseProductQuantityApi(data), {
      onSuccess() {
        qClient.invalidateQueries();
      },
    });
  return { increaseQuantity, isQuantityIncreasing };
}
