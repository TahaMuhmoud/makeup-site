import { IMG_SRC_SUPABASE, supabase } from "./supabase/supabase";
// GET THE DATA OF USER
export async function getUser() {
  const { data } = await supabase.auth.getSession();

  if (data.session === null) return null;

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return user;
}
// LOGIN
export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw new Error(error.message);
  return data;
}
//SIGNUP
export async function signup({
  email,
  password,
  phone,
  username,
  profile_image,
}) {
  const imgFile = profile_image[0];
  const imgSrc = profile_image[0].name;
  console.log(imgFile, imgSrc);
  const { data: signupData, error } = await supabase.auth.signUp({
    email,
    password,
    phone,
    options: {
      data: {
        username,
        profile_image: `${IMG_SRC_SUPABASE}${imgSrc}`,
        cart: null,
      },
    },
  });

  await supabase.storage.from("avatars").upload(imgSrc, imgFile);

  if (error) throw new Error(error.message);
  return signupData;
}
// LOGOUT
export async function logoutApi() {
  let { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}
