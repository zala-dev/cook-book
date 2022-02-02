import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import RecipeImage from '../../assets/burger.jpeg';
import { AppContext } from '../../context/context';

import './recipe-info.styles.scss';

const RecipeInfo = () => {
  const { recipeInfo } = useContext(AppContext);

  const { image, title, dishTypes, extendedIngredients } = recipeInfo;

  let stringToHTML = function (str) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, 'text/html');
    return doc.body.innerHTML;
  };

  return (
    <article className='recipe'>
      {recipeInfo && (
        <>
          <figure className='recipe__fig'>
            <img
              className='recipe__img'
              src={image ? image : RecipeImage}
              alt='recipe'
            />

            <h4 className='recipe__title'>
              <span>{title}</span>
            </h4>
            <Link className='recipe__btn' to='/'>
              Back Home
            </Link>
          </figure>
          <div className='recipe__dishType'>
            <h2 className='recipe__dishType--label'>Dish Type</h2>
            {dishTypes?.map((dish, i) => {
              return (
                <div key={i} className='recipe__dishType--item'>
                  {dish}
                </div>
              );
            })}
          </div>
          <div className='recipe__ingredients'>
            <h2 className='recipe__ingredients--heading'>Ingredients</h2>
            <ul className='recipe__ingredients--list'>
              {extendedIngredients?.map((ing, i) => {
                return (
                  <li key={i} className='recipe__ingredients--item'>
                    <span>✔️</span> {ing.original}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='recipe__instructions'>
            <h2 className='recipe__instructions--heading'>Instructions</h2>
            <p className='recipe__instructions--text'>
              {stringToHTML(recipeInfo?.instructions)}
            </p>
          </div>
        </>
      )}
    </article>
  );
};

export default RecipeInfo;
