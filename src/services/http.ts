const BASE_URL = import.meta.env.VITE_API_ULR;

export function http(
  url = "",
  method = "GET",
  data = {}
): Promise<Response> {
  const api_token = localStorage.getItem("key")
    ? localStorage.getItem("key")
    : null;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    Authorization: `${api_token}`,
  };

  const opts: RequestInit = { method, headers };

  if (method.toUpperCase() !== "GET") {
    opts.body = JSON.stringify(data);
  }

  return fetch(`${BASE_URL}${url}`, opts);
}
