import supabase from "../config/supabase.js";

// create
async function createShortUrl(urlData) {
  const { data, error } = await supabase
    .from("shorturls")
    .insert(urlData)
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data;
}

// get
async function getShortUrlsByEmail(email) {
  const { data, error } = await supabase
    .from("shorturls")
    .select("*")
    .eq("email", email);
  return { data, error };
}

export default {
  createShortUrl,
  getShortUrlsByEmail,
};
