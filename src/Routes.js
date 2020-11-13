import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainView from './components/MainView';

const Routes = 
  <Switch>
    <Route path="/">
      <MainView />
    </Route>
  </Switch>

export default Routes;