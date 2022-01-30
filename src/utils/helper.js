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
      `${SEARCH_RECIPE_URL}${query}&number=100&apiKey=${API_KEY}`
    );
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    const { results, totalResults } = data;
    return {
      results,
      totalResults,
    };
  } catch (error) {
    alert(error);
  }
};

export const getRecipeInfo = async (id) => {
  try {
    if (!id) return;
    const res = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?&apiKey=f361032d66cc4e4bb8ffc4fbc0a38b06`
    );
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message}(${res.status})`);

    console.log(`Recipe info for the id ${id}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};
