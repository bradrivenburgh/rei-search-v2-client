import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainView from './components/MainView';
import SavedProps from './components/SavedProps';
import PropertyProfile from './components/PropertyProfile';

const Routes = 
  <Switch>
    <Route path="/property-profile">
      <PropertyProfile />
    </Route>
    <Route path="/saved-properties">
      <SavedProps />
    </Route>
    <Route path="/">
      <MainView />
    </Route>
  </Switch>

export default Routes;