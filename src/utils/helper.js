import { SEARCH_RECIPE_URL, API_KEY, TIMEOUT_SEC } from './config';

const timeout = (s) => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error(`Request took too long! Timeout after ${s} seconds`));
    }, s * 1000);
  });
};

export const getJSON = async (query) => {
  try {
    const fetchPro = fetch(
      `${SEARCH_RECIPE_URL}${query}&number=10&apiKey=${API_KEY}`
    );
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    const { results, totalResults } = data;
    console.log(data);
    return {
      results,
      totalResults,
    };
  } catch (error) {
    alert(error);
  }
};
