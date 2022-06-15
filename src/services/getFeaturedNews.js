import { API_KEY, API_URL } from "./settings";

export default function getFeaturedNews () {
    return fetch(
      `${API_URL}/top-headlines?country=ar&pageSize=4&apiKey=${API_KEY}`
    ).then(res => res.json())
}