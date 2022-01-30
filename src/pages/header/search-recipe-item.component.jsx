import React from 'react';

const RecipeItem = ({ item: { id, title, image }, getRecipeId }) => {
  return (
    <div
      className='header__searchView--item-container'
      onClick={() => getRecipeId(id)}
    >
      <img src={image ? image : ''} alt='recipe item' />
      <div className='header__searchView--item-container--content'>
        <span>{title ? title : ''}</span>
      </div>
    </div>
  );
};

export default RecipeItem;
