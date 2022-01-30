import React from 'react';
import Header from './pages/header/header.component';
import RecipeInfo from './pages/recipe-info/recipe-info.component';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Header} />
          <Route path='/recipe' component={RecipeInfo} />
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
