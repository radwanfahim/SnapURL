import { supabase } from "./supabase";

const getUser = async () => {
  try {
    const { data: { user } = {}, error } = await supabase.auth.getUser();

    if (error) {
      console.error("Error fetching user:", error.message);
      return null;
    }

    return user;
  } catch (err) {
    console.error("Unexpected error in getUser:", err);
    return null;
  }
};

const getUserData = await getUser();

export default getUserData;
