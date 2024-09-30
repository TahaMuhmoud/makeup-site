import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://fbtxdioulnslmboyvuyd.supabase.co";
export const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
export const IMG_SRC_SUPABASE =
  "https://fbtxdioulnslmboyvuyd.supabase.co/storage/v1/object/public/avatars/";
