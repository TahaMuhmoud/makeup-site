import { getUser } from "./authApi";
import { supabase } from "./supabase/supabase";
// GET ALL PRODUCT IN USER CART
export async function getCart() {
  const user = await getUser();
  let { data, error } = await supabase
    .from("cart")
    .select(`*`)
    .eq("user_id", user.id);

  if (error) throw new Error(error.message);

  return data;
}
// ADD ONE PRODUCT TO USER CART
export async function addToCartApi({
  id,
  product,
  selectedColor,
  inCart,
  quantity,
}) {
  const user = await getUser();
  const { data, error } = await supabase.from("cart").insert([
    {
      user_id: user.id,
      product_id: id,
      product,
      inCart,
      selectedColor,
      quantity,
    },
  ]);

  if (error) throw new Error(error.message);

  return data;
}
// DELETE ONE PRODUCT FROM USER CART
export async function removeProductFromCartApi(id) {
  const { data, error } = await supabase.from("cart").delete().eq("id", id);

  if (error) throw new Error(error.message);

  return data;
}
// INCREASE THE QUANTITY OF THE PRODUCT IN CART
export async function increaseProductQuantityApi({ id, quantity }) {
  const { data, error } = await supabase
    .from("cart")
    .update({ quantity: quantity + 1 })
    .eq("id", id);

  if (error) throw new Error(error.message);
  return data;
}
// DECREASE THE QUANTITY OF THE PRODUCT IN CART
export async function decreaseProductQuantityApi({ id, quantity }) {
  if (quantity === 1) {
    const data = await removeProductFromCartApi(id);
    return data;
  }
  const { data, error } = await supabase
    .from("cart")
    .update({ quantity: quantity - 1 })
    .eq("id", id);

  if (error) throw new Error(error.message);
  return data;
}
// CLEAR THE CART
export async function removeAllFromCart() {
  const user = await getUser();
  const { data, error } = await supabase
    .from("cart")
    .delete()
    .eq("user_id", user.id);

  if (error) throw new Error(error.message);

  return data;
}
