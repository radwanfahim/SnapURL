export async function postUrlData(params: {
  originalUrl: string;
  shortCode: string;
  email: string;
  clicks: number;
}) {
  try {
    const res = await fetch(`/api/shorten?email=${params.email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });

    if (!res.ok) {
      throw new Error("Failed to post URL data");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error posting URL data:", error);
    throw error;
  }
}
