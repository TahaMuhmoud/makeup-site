import { useMutation, useQueryClient } from "react-query";
import { removeAllFromCart } from "../../services/cartApi";

export function useClearCart() {
  const qClient = useQueryClient();
  const { mutate: clearCart, isLoading: isClearing } = useMutation(
    "cart",
    removeAllFromCart,
    {
      onSuccess() {
        qClient.invalidateQueries();
      },
    }
  );
  return { clearCart, isClearing };
}
