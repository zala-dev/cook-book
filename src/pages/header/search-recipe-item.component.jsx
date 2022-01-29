import React from 'react';

const RecipeItem = ({ title, image }) => {
  return (
    <div className='header__searchView--item-container'>
      <img src={image ? image : ''} alt='recipe item' />
      <div className='header__searchView--item-container--content'>
        <span>{title ? title : ''}</span>
      </div>
    </div>
  );
};

export default RecipeItem;
