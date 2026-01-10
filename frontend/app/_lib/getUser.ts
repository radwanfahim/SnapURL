import { supabase } from "./supabase";

export const getUser = async () => {
  try {
    const { data: { user } = {}, error } = await supabase.auth.getUser();

    if (error) {
      console.error(error.message);
      return null;
    }

   
    return user;
  } catch (err) {
    console.error("Unexpected error in getUser:", err);
    return null;
  }
};
