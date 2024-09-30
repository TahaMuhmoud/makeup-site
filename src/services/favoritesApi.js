import { getUser } from "./authApi";
import { supabase } from "./supabase/supabase";
// GET ALL PRODUCT IN USER FAVORITES
export async function getFavorites() {
  const user = await getUser();

  let { data, error } = await supabase
    .from("favorites")
    .select(`*`)
    .eq("user_id", user.id);

  if (error) throw new Error(error.message);

  return data;
}
// ADD ONE PRODUCT TO USER FAVORITES
export async function addToFavorites({ id, product, isFav }) {
  const user = await getUser();
  const { data, error } = await supabase.from("favorites").insert([
    {
      user_id: user.id,
      product_id: id,
      product,
      isFav,
    },
  ]);

  if (error) throw new Error(error.message);

  return data;
}
// DELETE ONE PRODUCT FROM USER FAVORITES
export async function removeFromFavorites(id) {
  const { data, error } = await supabase
    .from("favorites")
    .delete()
    .eq("id", id);

  if (error) throw new Error(error.message);

  return data;
}
// CLEAR THE FAVORITES
export async function removeAllFromFavs() {
  const user = await getUser();
  const { data, error } = await supabase
    .from("favorites")
    .delete()
    .eq("user_id", user.id);

  if (error) throw new Error(error.message);

  return data;
}
