import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainView from './components/MainView';
import SavedProps from './components/SavedProps';

const Routes = 
  <Switch>
    <Route path="/saved-properties">
      <SavedProps />
    </Route>
    <Route path="/">
      <MainView />
    </Route>
  </Switch>

export default Routes;