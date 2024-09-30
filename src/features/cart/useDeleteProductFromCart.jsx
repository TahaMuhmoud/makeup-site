import { useMutation, useQueryClient } from "react-query";
import { removeProductFromCartApi } from "../../services/cartApi";

export function useDeleteProductFromCart() {
  const qClient = useQueryClient();
  const { mutate: deleteProduct, isLoading: isDeleting } = useMutation(
    "cart",
    (id) => removeProductFromCartApi(id),
    {
      onSuccess() {
        qClient.invalidateQueries();
      },
    }
  );
  return { deleteProduct, isDeleting };
}
