import React, { useState, useRef, useContext } from 'react';
import { AppContext } from '../../context/context';

import cookbookLogo from '../../assets/cook-book.png';
import searchImage from '../../assets/searching.png';

import './home.styles.scss';

import RecipeItem from './search-recipe-item.component';
import Loading from '../../components/Loading/loading.component';

const Home = () => {
  const { recipeData, fetchRecipeData, fetchRecipeInfo, isLoading } =
    useContext(AppContext);

  const [query, setQuery] = useState('');

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query) {
      fetchRecipeData(query);
      setQuery('');
    }
  };

  const getRecipeId = async (id) => {
    if (id) {
      await fetchRecipeInfo(id);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <header className='header'>
      <div className='header__content'>
        <h3>CookBook</h3>
        <h1>Your Recipe Guide</h1>
      </div>
      <div className='header__logo'>
        <img src={cookbookLogo} alt='cook-book' />
      </div>

      <form className='header__form' onSubmit={handleSubmit}>
        <div className='header__form--input-container'>
          <input
            className='header__form--input-container--input'
            type='text'
            name='recipe'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Search over 360,000 recipes....'
          />
          <button
            className='header__form--input-container--button'
            type='submit'
          >
            <img src={searchImage} alt='search' />
          </button>
        </div>
      </form>
      {/* Recipe search items section starts */}
      {recipeData.length !== 0 && (
        <>
          <span className='header__recipeCount'>
            Total <big>{recipeData.totalResults}</big> recipe(s) found. <br />{' '}
            Click on the recipe for more information.
          </span>

          <div ref={scrollRef} className='header__searchView'>
            {recipeData.results.map((item) => {
              return (
                <RecipeItem
                  key={item.id}
                  item={item}
                  getRecipeId={getRecipeId}
                />
              );
            })}
          </div>

          {/* Recipe search items section ends */}

          {/* Scroll buttons section starts */}
          <div className='header__scrollButtonContainer'>
            <button
              className='header__scrollButtonContainer--scrollBtn'
              onClick={() => scroll('left')}
            >
              &#10094;
            </button>
            <button
              className='header__scrollButtonContainer--scrollBtn'
              onClick={() => scroll('right')}
            >
              &#10095;
            </button>
          </div>
          {/* Scroll buttons section ends */}
        </>
      )}
    </header>
  );
};

export default Home;
