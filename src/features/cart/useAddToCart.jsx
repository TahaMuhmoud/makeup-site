import { useMutation, useQueryClient } from "react-query";
import { addToCartApi } from "../../services/cartApi";

export function useAddToCart() {
  const qClient = useQueryClient();
  const { mutate: addToCart, isLoading: isAdding } = useMutation(
    "cart",
    (data) => addToCartApi(data),
    {
      onSuccess() {
        qClient.invalidateQueries();
      },
    }
  );
  return { addToCart, isAdding };
}
