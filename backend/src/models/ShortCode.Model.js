import supabase from "../config/supabase.js";

// get
async function getShortCode(shortCode) {
  const { data, error } = await supabase
    .from("shorturls")
    .select("*")
    .eq("shortCode", shortCode)
    .limit(1);

  // add clicks
  await supabase
    .from("shorturls")
    .update({ clicks: data[0].clicks + 1 })
    .eq("shortCode", shortCode);

  return { data, error };
}

export default { getShortCode };
