export async function getUrlData(email: string | undefined) {
  if (!email) {
    throw new Error("Email is required");
  }

  const res = await fetch(`http://localhost:5000/api/shorten?email=${email}`);

  if (!res.ok) {
    throw new Error("Failed to fetch URL data");
  }

  return await res.json();
}
