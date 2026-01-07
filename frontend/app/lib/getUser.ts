import { supabase } from "./supabase";

export const getUser = async () => {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    console.error("Failed to get user:", error.message);
    return null;
  }

  return user;
};
