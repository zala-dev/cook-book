import React from 'react';
import cookbookLogo from '../../assets/cook-book.png';
import searchImage from '../../assets/searching.png';

import './header.styles.scss';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__content'>
        <h3>CookBook</h3>
        <h1>Your Recipe Guide</h1>
      </div>
      <div className='header__logo'>
        <img src={cookbookLogo} alt='cook-book' />
      </div>
      <form className='header__form'>
        <div className='header__form--input-container'>
          <input
            className='header__form--input-container--input'
            type='text'
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

      <span className='header__recipeCount'>
        Total <big>1001</big> recipe(s) found. <br /> Click on the recipe for
        more information.
      </span>
      <div className='header__searchView'>
        <div className='header__searchView--item-container'>
          <img src={cookbookLogo} alt='recipe item' />
          <span>Recipe 1</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
