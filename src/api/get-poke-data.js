const API = "https://pokeapi.co/api/v2";

export default async function getPokeData(resource, query) {
  if (typeof query === "string") query = query.trim().toLowerCase();

  const endpoint = [API, resource, query].join("/");

  const response = await fetch(endpoint);
  if (!response.ok) throw new Error(`Response status ${response.status}`);
  const data = await response.json();
  return data;
}

export async function getEvoData(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Response status ${response.status}`);
  const data = await response.json();
  return data;
}
