import React, { useState } from 'react';
import cookbookLogo from '../../assets/cook-book.png';
import searchImage from '../../assets/searching.png';

import { getJSON } from '../../utils/helper';

import './header.styles.scss';
import RecipeItem from './search-recipe-item.component';

const Header = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setData(await getJSON(query));
      setQuery('');
    } catch (error) {
      alert(`Header Component ${error}`);
    }
  };

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

      {data.length !== 0 && (
        <>
          <span className='header__recipeCount'>
            Total <big>{data.totalResults}</big> recipe(s) found. <br /> Click
            on the recipe for more information.
          </span>

          <div className='header__searchView'>
            {data.results.map((item) => {
              return <RecipeItem key={item.id} {...item} />;
            })}
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
