import React, { useState, useRef, useEffect } from 'react';
import cookbookLogo from '../../assets/cook-book.png';
import searchImage from '../../assets/searching.png';

import { getJSON, getRecipeInfo } from '../../utils/helper';

import './header.styles.scss';
import RecipeItem from './search-recipe-item.component';

const Header = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  const [id, setId] = useState(null);
  const [recipeInfo, setRecipeInfo] = useState([]);

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setData(await getJSON(query));
      setQuery('');
    } catch (error) {
      alert(`Header Component ${error}`);
    }
  };

  const getRecipeId = (id) => {
    return setId(id);
  };

  useEffect(() => {
    setRecipeInfo(getRecipeInfo(id));
  }, [id]);

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
      {data.length !== 0 && (
        <>
          <span className='header__recipeCount'>
            Total <big>{data.totalResults}</big> recipe(s) found. <br /> Click
            on the recipe for more information.
          </span>

          <div ref={scrollRef} className='header__searchView'>
            {data.results.map((item) => {
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

export default Header;
