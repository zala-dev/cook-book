import React, { useState } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [recipeInfo, setRecipeInfo] = useState(null);
  const [error, setError] = useState({ show: false, message: '' });

  // Fetch recipe

  // Fetch recipe information

  return (
    <AppContext.Provider
      value={{ searchResults, isLoading, recipeInfo, error }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
