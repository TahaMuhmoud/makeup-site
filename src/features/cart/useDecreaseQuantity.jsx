import { useMutation, useQueryClient } from "react-query";
import { decreaseProductQuantityApi } from "../../services/cartApi";

export function useDecreaseQuantity() {
  const qClient = useQueryClient();
  const { mutate: decreaseQuantity, isLoading: isQuantityDecreasing } =
    useMutation(["cart"], (data) => decreaseProductQuantityApi(data), {
      onSuccess() {
        qClient.invalidateQueries();
      },
    });
  return { decreaseQuantity, isQuantityDecreasing };
}
