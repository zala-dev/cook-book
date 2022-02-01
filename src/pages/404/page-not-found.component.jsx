import React from 'react';
import { Link } from 'react-router-dom';
import Page_Not_Found from '../../assets/pagenotfound.svg';

import './page-not-found.styles.scss';

const PageNotFound = () => {
  return (
    <section className='page-error'>
      <img className='page-error__img' src={Page_Not_Found} alt='error' />
      <Link className='page-error__btn' to='/'>
        Back Home
      </Link>
    </section>
  );
};

export default PageNotFound;
