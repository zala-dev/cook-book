import React from 'react';

import RecipeInfo from './pages/recipe-info/recipe-info.component';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PageNotFound from './pages/404/page-not-found.component';
import Home from './pages/home/home.component';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/recipe' component={RecipeInfo} />
        <Route path='*' component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
