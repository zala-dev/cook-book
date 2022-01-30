import React from 'react';
import { Link } from 'react-router-dom';
import RecipeImage from '../../assets/burger.jpeg';

import './recipe-info.styles.scss';

const RecipeInfo = () => {
  return (
    <article className='recipe'>
      <figure className='recipe__fig'>
        <img className='recipe__img' src={RecipeImage} alt='recipe' />

        <h4 className='recipe__title'>
          <span>Pasta with tomato cream sauce</span>
        </h4>
        <Link className='recipe__btn' to='/'>
          Back Home
        </Link>
      </figure>
      <div className='recipe__dishType'>
        <h2 className='recipe__dishType--label'>Dish Type</h2>
        <div className='recipe__dishType--item'>type</div>
      </div>
      <div className='recipe__ingredients'>
        <h2 className='recipe__ingredients--heading'>Ingredients</h2>
        <ul className='recipe__ingredients--list'>
          <li className='recipe__ingredients--item'>
            <span>✔️</span> 1 1/2 pounds Brussels sprouts, cleaned and halved
          </li>
        </ul>
      </div>
      <div className='recipe__instructions'>
        <h2 className='recipe__instructions--heading'>Instructions</h2>
        <p className='recipe__instructions--text'>
          In a large plastic zippered bag, toss the Brussels sprouts, 3 pressed
          garlic cloves and 2 tablespoons Olive Oil.
          <br /> <br />
          Empty the contents into a ovenproof dish and roast at 350 degrees for
          40 minutes.
          <br /> <br />
          While the Brussels sprouts are roasting, in a pan heat 1/4 cup olive
          oil. When the olive oil is heated through, saute a slice of bread
          until browned on both sides. Set aside.
          <br /> <br />
          When the Brussels sprouts have finished roasting... In the same pan
          that you sauteed the bread, add the onion and saute for about 3
          minutes. Do not let them get fully tender. Add the pancetta and heat
          through for an additional minute.
          <br /> <br />
          Add the Brussels sprouts and heat through for an additional 3 minutes.
          Remove from heat.\nIn a food processor, blend the bread and 1 - 2
          cloves of garlic.
          <br /> <br />
          Sprinkle on top of the Brussels sprouts mixture and finish by a last
          drizzle of Olive Oil!
        </p>
      </div>
    </article>
  );
};

export default RecipeInfo;
