interface PostUrlPayload {
  url?: string;
  email?: string;
}

// get
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

// post
export async function postUrlData({ url, email }: PostUrlPayload) {
  if (!url || !email) {
    throw new Error("url is required");
  }

  const res = await fetch(`http://localhost:5000/api/shorten`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      originalUrl: url,
      email: email,
    }),
  });

  if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

  return await res.json();
}

// delete
export async function deleteurlData(id: string) {
  if (!id) {
    throw new Error("id required");
  }

  const res = await fetch(`http://localhost:5000/api/shorten/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
  return await res.json();
}
