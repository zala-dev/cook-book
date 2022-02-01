import React from 'react';
import { Link } from 'react-router-dom';

const RecipeItem = ({ item: { id, title, image }, getRecipeId }) => {
  return (
    <Link to='/recipe'>
      <div
        className='header__searchView--item-container'
        onClick={() => getRecipeId(id)}
      >
        <img src={image ? image : ''} alt='recipe item' />
        <div className='header__searchView--item-container--content'>
          <span>{title ? title : ''}</span>
        </div>
      </div>
    </Link>
  );
};

export default RecipeItem;
