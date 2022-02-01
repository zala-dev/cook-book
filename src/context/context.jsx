import React, { useState } from 'react';
import { SEARCH_RECIPE_URL, API_KEY, TIMEOUT_SEC } from '../utils/config';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [recipeData, setRecipeData] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  const [recipeInfo, setRecipeInfo] = useState([]);
  const [error, setError] = useState({ show: false, message: '' });

  // Timeout function
  const timeout = (s) => {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error(`Request took too long! Timeout after ${s} seconds`));
      }, s * 1000);
    });
  };

  // Fetch recipe
  const fetchRecipeData = async (query) => {
    try {
      const fetchPro = fetch(
        `${SEARCH_RECIPE_URL}${query}&number=100&apiKey=${API_KEY}`
      );
      const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
      const data = await res.json();
      if (!res.ok) throw new Error(`${data.message} (${res.status})`);
      // const { results, totalResults } = data;
      setRecipeData(data);
      // return {
      //   results,
      //   totalResults,
      // };
    } catch (error) {
      setError({ show: true, message: error });
      console.log(error);
    }
  };

  // Fetch recipe information
  const fetchRecipeInfo = async (id) => {
    try {
      if (!id) return;

      const res = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?&apiKey=${API_KEY}`
      );
      const data = await res.json();

      if (!res.ok) throw new Error(`${data.message} (${res.status})`);
      setRecipeInfo(data);
    } catch (error) {
      console.log(error);
      setError({ show: true, message: error });
    }
  };

  return (
    <AppContext.Provider
      value={{
        fetchRecipeData,
        // isLoading,
        recipeInfo,
        error,
        fetchRecipeInfo,
        recipeData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
